import React, { useEffect, useState, useRef, useCallback } from 'react';
import { ArrowLeft, ExternalLink, ZoomIn, ZoomOut, RotateCcw, Loader2, AlertCircle, Sun, Moon } from 'lucide-react';
import * as pdfjsLib from 'pdfjs-dist';
import { PERSONAL_INFO, RESUME_CONFIG } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

// Configure the worker for pdfjs
pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

interface ResumeViewerProps {
  onBack: () => void;
}

export const ResumeViewer: React.FC<ResumeViewerProps> = ({ onBack }) => {
  const { theme, toggleTheme } = useTheme();
  const [numPages, setNumPages] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [scale, setScale] = useState<number>(1.0);
  
  const canvasRefs = useRef<{ [key: number]: HTMLCanvasElement | null }>({});
  const renderTasksRef = useRef<{ [key: number]: any }>({});
  const pdfDocRef = useRef<any>(null);

  // Scroll to top and set document title
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'My Resume — Abina K';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onBack();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.title = 'Abina K — Computer Science & Engineering Portfolio';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onBack]);

  // Render a specific page
  const renderPage = useCallback(async (pdf: any, pageNum: number, currentScale: number) => {
    try {
      const page = await pdf.getPage(pageNum);
      const canvas = canvasRefs.current[pageNum];
      if (!canvas) return;

      // Cancel any ongoing render task on this canvas
      if (renderTasksRef.current[pageNum]) {
        try {
          renderTasksRef.current[pageNum].cancel();
        } catch {
          // ignore cancelled task errors
        }
      }

      // Calculate DPI for crisp typography on high-resolution screens
      const pixelRatio = Math.max(window.devicePixelRatio || 1, 2);
      // Base width is standard A4 viewing size (around 800px base width)
      const viewport = page.getViewport({ scale: 1.4 * pixelRatio * currentScale });

      canvas.height = viewport.height;
      canvas.width = viewport.width;

      // Maintain responsive CSS dimensions
      canvas.style.width = '100%';
      canvas.style.height = 'auto';

      const context = canvas.getContext('2d', { alpha: false });
      if (!context) return;

      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      };

      const renderTask = page.render(renderContext);
      renderTasksRef.current[pageNum] = renderTask;

      await renderTask.promise;
    } catch (err: any) {
      if (err?.name === 'RenderingCancelledException') {
        // Ignored: expected when zoom or page changes quickly
        return;
      }
      console.error(`Failed to render page ${pageNum}:`, err);
    }
  }, []);

  // Initial load of the PDF document
  useEffect(() => {
    let isCancelled = false;
    let loadingTask: any = null;

    const loadPdf = async () => {
      try {
        setIsLoading(true);
        setError(null);

        loadingTask = pdfjsLib.getDocument(RESUME_CONFIG.filePath);
        const pdf = await loadingTask.promise;

        if (isCancelled) return;

        pdfDocRef.current = pdf;
        setNumPages(pdf.numPages);
        setIsLoading(false);
      } catch (err: any) {
        if (!isCancelled) {
          console.error('Error loading resume PDF:', err);
          setError('Unable to display preview. You can open the PDF directly using the button on top.');
          setIsLoading(false);
        }
      }
    };

    loadPdf();

    return () => {
      isCancelled = true;
      if (loadingTask) {
        loadingTask.destroy();
      }
    };
  }, []);

  // Render pages when document is ready or when scale changes
  useEffect(() => {
    if (!pdfDocRef.current || numPages === 0) return;

    for (let pageNum = 1; pageNum <= numPages; pageNum++) {
      renderPage(pdfDocRef.current, pageNum, scale);
    }
  }, [numPages, scale, renderPage]);

  // Cleanup render tasks on unmount
  useEffect(() => {
    return () => {
      Object.values(renderTasksRef.current).forEach((task) => {
        try {
          task?.cancel();
        } catch {
          // ignore
        }
      });
    };
  }, []);

  const handleZoomIn = () => {
    setScale((prev) => Math.min(Number((prev + 0.15).toFixed(2)), 1.6));
  };

  const handleZoomOut = () => {
    setScale((prev) => Math.max(Number((prev - 0.15).toFixed(2)), 0.7));
  };

  const handleResetZoom = () => {
    setScale(1.0);
  };

  return (
    <div className="min-h-screen bg-[#101216] text-[#F5F5F2] font-sans flex flex-col selection:bg-[#F5A623]/25 selection:text-[#F5A623]">
      {/* ================================================================= */}
      {/* 1. Header Navigation                                              */}
      {/* ================================================================= */}
      <header className="sticky top-0 z-40 bg-[#101216]/95 backdrop-blur-md border-b border-[#2A2F38] py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
          
          {/* Left: Simple "← Back to Portfolio" button */}
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#171A20] hover:bg-[#1F242D] border border-[#2A2F38] hover:border-[#F5A623]/50 text-xs font-semibold text-[#F5F5F2] hover:text-[#F5A623] transition-all cursor-pointer shadow-sm active:scale-95"
            aria-label="Back to Portfolio"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#F5A623]" />
            <span>Back to Portfolio</span>
          </button>

          {/* Center: ABINA K Branding */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-sm bg-[#F5A623] inline-block" />
            <span className="text-sm sm:text-base font-bold tracking-wider text-[#F5F5F2]">
              ABINA K
            </span>
          </div>

          {/* Right: Theme Toggle & Open in New Tab */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="p-1.5 rounded-lg bg-[#171A20] hover:bg-[#1F242D] border border-[#2A2F38] hover:border-[#F5A623]/50 text-[#A6ABB5] hover:text-[#F5A623] transition-all cursor-pointer shadow-sm active:scale-95 flex items-center justify-center"
              aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-[#F5A623]" /> : <Moon className="w-3.5 h-3.5 text-[#F5A623]" />}
            </button>

            <a
              href={RESUME_CONFIG.filePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#171A20] hover:bg-[#1F242D] border border-[#2A2F38] hover:border-[#F5A623]/60 text-xs font-semibold text-[#F5F5F2] hover:text-[#F5A623] transition-all cursor-pointer shadow-sm active:scale-95"
            >
              <span>Open in New Tab</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#F5A623]" />
            </a>
          </div>

        </div>
      </header>

      {/* ================================================================= */}
      {/* 2. Page Content Area                                              */}
      {/* ================================================================= */}
      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex flex-col items-center">
        
        {/* Simplified Header Details */}
        <div className="w-full max-w-[820px] mb-6 text-left">
          {/* Orange eyebrow label */}
          <div className="inline-flex items-center gap-1.5 mb-1.5">
            <span className="w-3 h-[1.5px] bg-[#F5A623]" />
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#F5A623]">
              MY RESUME
            </span>
          </div>
          
          {/* Clear Heading */}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F2] tracking-tight">
            My Resume
          </h1>
          
          {/* Short friendly description */}
          <p className="mt-2 text-sm sm:text-base text-[#A6ABB5]">
            Here's a closer look at my education, projects, and skills.
          </p>
          
          {/* Subtle line showing name and degree */}
          <p className="mt-1 text-xs text-[#A6ABB5]/80 font-mono">
            {PERSONAL_INFO.fullName} · {PERSONAL_INFO.degree}
          </p>
        </div>

        {/* Minimalist Controls Toolbar (Page indicator & Zoom controls) */}
        <div className="w-full max-w-[820px] mb-3 flex items-center justify-between text-xs text-[#A6ABB5] px-1">
          <span className="font-mono text-[11px]">
            {numPages > 0 ? `Document (${numPages} ${numPages === 1 ? 'page' : 'pages'})` : 'Loading...'}
          </span>

          <div className="flex items-center gap-1 bg-[#171A20] border border-[#2A2F38] rounded-lg p-1 shadow-sm">
            <button
              type="button"
              onClick={handleZoomOut}
              disabled={scale <= 0.7}
              className="p-1.5 rounded hover:bg-[#2A2F38] text-[#A6ABB5] hover:text-[#F5F5F2] disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
              title="Zoom out"
              aria-label="Zoom out"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={handleResetZoom}
              className="px-2 py-0.5 rounded hover:bg-[#2A2F38] text-[11px] font-mono text-[#A6ABB5] hover:text-[#F5F5F2] transition-colors cursor-pointer"
              title="Reset zoom to 100%"
              aria-label="Reset zoom"
            >
              {Math.round(scale * 100)}%
            </button>
            <button
              type="button"
              onClick={handleZoomIn}
              disabled={scale >= 1.6}
              className="p-1.5 rounded hover:bg-[#2A2F38] text-[#A6ABB5] hover:text-[#F5F5F2] disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
              title="Zoom in"
              aria-label="Zoom in"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* ================================================================= */}
        {/* 3. Document Surface: Centered, clean white background, shadow     */}
        {/* ================================================================= */}
        <div className="w-full max-w-[820px] flex flex-col items-center">
          
          {/* Loading Skeleton */}
          {isLoading && (
            <div className="w-full aspect-[1/1.414] rounded-xl bg-[#171A20] border border-[#2A2F38] flex flex-col items-center justify-center p-8 text-center text-[#A6ABB5] shadow-2xl">
              <Loader2 className="w-8 h-8 text-[#F5A623] animate-spin mb-3" />
              <p className="text-sm font-medium text-[#F5F5F2]">Rendering resume preview...</p>
              <p className="text-xs text-[#A6ABB5] mt-1">Please wait a moment</p>
            </div>
          )}

          {/* Error State with fallback action */}
          {error && (
            <div className="w-full p-8 rounded-xl bg-[#171A20] border border-red-500/30 text-center flex flex-col items-center">
              <AlertCircle className="w-8 h-8 text-red-400 mb-2" />
              <p className="text-sm text-[#F5F5F2] font-semibold">{error}</p>
              <div className="mt-4">
                <a
                  href={RESUME_CONFIG.filePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#F5A623] text-black text-xs font-bold"
                >
                  <span>Open PDF in New Tab</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}

          {/* Rendered PDF Pages */}
          <div className={`w-full flex flex-col items-center gap-6 ${isLoading ? 'hidden' : 'block'}`}>
            {Array.from({ length: numPages }, (_, i) => i + 1).map((pageNum) => (
              <div 
                key={pageNum}
                className="w-full bg-white rounded-lg shadow-2xl ring-1 ring-black/10 overflow-hidden transition-all"
                style={{
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.75), 0 0 0 1px rgba(255, 255, 255, 0.1)',
                }}
              >
                <canvas
                  ref={(el) => {
                    canvasRefs.current[pageNum] = el;
                  }}
                  className="w-full h-auto block select-none bg-white"
                />
              </div>
            ))}
          </div>

        </div>

        {/* Secondary option note */}
        <div className="mt-8 text-center text-xs text-[#A6ABB5]">
          <span>Prefer using your browser's native PDF reader? </span>
          <a
            href={RESUME_CONFIG.filePath}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F5A623] hover:underline font-medium inline-flex items-center gap-1 ml-1"
          >
            <span>Open in new tab</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

      </main>

      {/* 4. Footer */}
      <footer className="py-6 border-t border-[#2A2F38] text-center text-xs font-mono text-[#A6ABB5]">
        &copy; {new Date().getFullYear()} {PERSONAL_INFO.fullName} · All rights reserved.
      </footer>
    </div>
  );
};
