import React from 'react';
import { 
  User, 
  MapPin, 
  GraduationCap, 
  Calendar, 
  Award, 
  Compass, 
  Layout, 
  Code2, 
  Layers, 
  Palette, 
  Terminal, 
  Laptop, 
  Cpu, 
  Rocket, 
  Lightbulb, 
  FlaskConical, 
  TrendingUp
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {

  return (
    <section id="about" className="py-24 bg-[#101216] border-t border-b border-[#2A2F38] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* ================================================================= */}
        {/* 1. HERO SECTION: A Little About Me + Academic Profile Card        */}
        {/* ================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Introduction & Story */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-[1px] w-5 bg-[#F5A623]" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F5A623]">
                ABOUT ME
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-[#F5F5F2] tracking-tight leading-[1.2]">
              A curious mind with a love for creating.
            </h2>

            <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed">
              <p className="text-[#F5F5F2]/90">
                I'm a Computer Science and Engineering student who enjoys exploring technology, designing simple interfaces, and learning by building. I like turning ideas into practical solutions and discovering something new along the way.
              </p>
              
              <p className="text-[#A6ABB5]">
                I'm interested in understanding how software and hardware work together. Through my classes and projects, I'm building my programming skills, exploring UI/UX design, and learning how technology can solve everyday problems.
              </p>
            </div>
          </div>

          {/* Right Column: Academic Profile Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#171A20] border border-[#2A2F38] p-6 sm:p-7 shadow-xl space-y-5">
              
              {/* Card Header */}
              <div className="pb-4 border-b border-[#2A2F38] flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-bold text-[#F5F5F2]">
                  <GraduationCap className="w-4 h-4 text-[#F5A623]" />
                  <span>My Academic Profile</span>
                </div>
                <span className="text-[11px] font-mono text-[#F5A623] px-2 py-0.5 rounded bg-[#F5A623]/10 border border-[#F5A623]/20">
                  B.E. Student
                </span>
              </div>

              {/* Verified Profile Items */}
              <div className="space-y-3.5 text-sm">
                
                {/* Name */}
                <div className="flex items-start gap-3">
                  <User className="w-4 h-4 text-[#F5A623] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs text-[#A6ABB5] block">Name</span>
                    <span className="font-semibold text-[#F5F5F2]">{PERSONAL_INFO.fullName}</span>
                  </div>
                </div>

                {/* Degree */}
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-4 h-4 text-[#F5A623] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs text-[#A6ABB5] block">Degree</span>
                    <span className="font-semibold text-[#F5F5F2]">{PERSONAL_INFO.degree}</span>
                  </div>
                </div>

                {/* Institution */}
                <div className="flex items-start gap-3">
                  <Award className="w-4 h-4 text-[#F5A623] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs text-[#A6ABB5] block">Institution</span>
                    <span className="font-semibold text-[#F5F5F2]">{PERSONAL_INFO.institution}</span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#F5A623] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs text-[#A6ABB5] block">Location</span>
                    <span className="font-medium text-[#F5F5F2]">{PERSONAL_INFO.location}</span>
                  </div>
                </div>

                {/* Period */}
                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-[#F5A623] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs text-[#A6ABB5] block">Study Period</span>
                    <span className="font-mono text-[#F5F5F2]">{PERSONAL_INFO.studyPeriod}</span>
                  </div>
                </div>

              </div>

              {/* CGPA Score Box */}
              <div className="pt-4 border-t border-[#2A2F38]">
                <div className="p-3.5 rounded-xl bg-[#14171E] border border-[#2A2F38] flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#A6ABB5] block">
                      Cumulative GPA
                    </span>
                    <span className="text-xl font-bold font-mono text-[#F5A623]">
                      {PERSONAL_INFO.cgpa}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#A6ABB5] text-right">
                    {PERSONAL_INFO.cgpaNote}
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* ================================================================= */}
        {/* 2. SECTION TWO: A Few Things About Me                             */}
        {/* ================================================================= */}
        <div>
          <div className="max-w-2xl mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-[1px] w-4 bg-[#F5A623]" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F5A623]">
                APPROACH &amp; MINDSET
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F2] tracking-tight">
              A Few Things About Me
            </h3>
            <p className="mt-2 text-sm sm:text-base text-[#A6ABB5]">
              How I like to learn, design, and work on things.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            
            {/* Card 1: Curious by Nature */}
            <div className="p-6 rounded-2xl bg-[#171A20] border border-[#2A2F38] hover:border-[#F5A623]/50 transition-all duration-300 hover:-translate-y-1 shadow-md group">
              <div className="w-10 h-10 rounded-xl bg-[#F5A623]/10 border border-[#F5A623]/20 flex items-center justify-center text-[#F5A623] mb-4 group-hover:scale-105 transition-transform">
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-[#F5F5F2] group-hover:text-[#F5A623] transition-colors">
                Curious by Nature
              </h4>
              <p className="mt-2.5 text-sm text-[#A6ABB5] leading-relaxed">
                I enjoy exploring how things work and learning something new every day.
              </p>
            </div>

            {/* Card 2: Design with Purpose */}
            <div className="p-6 rounded-2xl bg-[#171A20] border border-[#2A2F38] hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 shadow-md group">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-105 transition-transform">
                <Layout className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-[#F5F5F2] group-hover:text-cyan-400 transition-colors">
                Design with Purpose
              </h4>
              <p className="mt-2.5 text-sm text-[#A6ABB5] leading-relaxed">
                I like clean layouts, readable text, and interfaces that feel simple to use.
              </p>
            </div>

            {/* Card 3: Learn by Building */}
            <div className="p-6 rounded-2xl bg-[#171A20] border border-[#2A2F38] hover:border-[#F5A623]/50 transition-all duration-300 hover:-translate-y-1 shadow-md group">
              <div className="w-10 h-10 rounded-xl bg-[#F5A623]/10 border border-[#F5A623]/20 flex items-center justify-center text-[#F5A623] mb-4 group-hover:scale-105 transition-transform">
                <Code2 className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-[#F5F5F2] group-hover:text-[#F5A623] transition-colors">
                Learn by Building
              </h4>
              <p className="mt-2.5 text-sm text-[#A6ABB5] leading-relaxed">
                I enjoy practising my skills through coding, experiments, and projects.
              </p>
            </div>

            {/* Card 4: Solve Step by Step */}
            <div className="p-6 rounded-2xl bg-[#171A20] border border-[#2A2F38] hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1 shadow-md group">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-105 transition-transform">
                <Layers className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-[#F5F5F2] group-hover:text-emerald-400 transition-colors">
                Solve Step by Step
              </h4>
              <p className="mt-2.5 text-sm text-[#A6ABB5] leading-relaxed">
                I like breaking problems into smaller parts and finding practical solutions.
              </p>
            </div>

          </div>
        </div>

        {/* ================================================================= */}
        {/* 3. SECTION THREE: Things I'm Exploring                            */}
        {/* ================================================================= */}
        <div>
          <div className="max-w-2xl mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-[1px] w-4 bg-[#F5A623]" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F5A623]">
                AREAS OF INTEREST
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F2] tracking-tight">
              Things I'm Exploring
            </h3>
            <p className="mt-2 text-sm sm:text-base text-[#A6ABB5]">
              Here are some areas I'm interested in learning more about and practising through projects.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            
            {/* 1. UI/UX Design */}
            <div className="p-5 rounded-2xl bg-[#171A20] border border-[#2A2F38] hover:border-[#F5A623]/40 transition-all duration-200 text-center flex flex-col items-center justify-center group shadow-sm">
              <div className="w-11 h-11 rounded-xl bg-[#1F242D] border border-[#2A2F38] flex items-center justify-center text-[#F5A623] mb-3 group-hover:border-[#F5A623]/40 group-hover:bg-[#F5A623]/10 transition-colors">
                <Palette className="w-5 h-5" />
              </div>
              <span className="text-sm font-semibold text-[#F5F5F2] group-hover:text-[#F5A623] transition-colors">
                UI/UX Design
              </span>
              <span className="text-[11px] font-mono text-[#A6ABB5] mt-1">
                Interfaces &amp; Flow
              </span>
            </div>

            {/* 2. Programming */}
            <div className="p-5 rounded-2xl bg-[#171A20] border border-[#2A2F38] hover:border-[#F5A623]/40 transition-all duration-200 text-center flex flex-col items-center justify-center group shadow-sm">
              <div className="w-11 h-11 rounded-xl bg-[#1F242D] border border-[#2A2F38] flex items-center justify-center text-[#F5A623] mb-3 group-hover:border-[#F5A623]/40 group-hover:bg-[#F5A623]/10 transition-colors">
                <Terminal className="w-5 h-5" />
              </div>
              <span className="text-sm font-semibold text-[#F5F5F2] group-hover:text-[#F5A623] transition-colors">
                Programming
              </span>
              <span className="text-[11px] font-mono text-[#A6ABB5] mt-1">
                C, Python &amp; Java
              </span>
            </div>

            {/* 3. Software Development */}
            <div className="p-5 rounded-2xl bg-[#171A20] border border-[#2A2F38] hover:border-[#F5A623]/40 transition-all duration-200 text-center flex flex-col items-center justify-center group shadow-sm">
              <div className="w-11 h-11 rounded-xl bg-[#1F242D] border border-[#2A2F38] flex items-center justify-center text-[#F5A623] mb-3 group-hover:border-[#F5A623]/40 group-hover:bg-[#F5A623]/10 transition-colors">
                <Laptop className="w-5 h-5" />
              </div>
              <span className="text-sm font-semibold text-[#F5F5F2] group-hover:text-[#F5A623] transition-colors">
                Software Development
              </span>
              <span className="text-[11px] font-mono text-[#A6ABB5] mt-1">
                Web &amp; Applications
              </span>
            </div>

            {/* 4. Electronics and IoT */}
            <div className="p-5 rounded-2xl bg-[#171A20] border border-[#2A2F38] hover:border-[#F5A623]/40 transition-all duration-200 text-center flex flex-col items-center justify-center group shadow-sm">
              <div className="w-11 h-11 rounded-xl bg-[#1F242D] border border-[#2A2F38] flex items-center justify-center text-[#F5A623] mb-3 group-hover:border-[#F5A623]/40 group-hover:bg-[#F5A623]/10 transition-colors">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="text-sm font-semibold text-[#F5F5F2] group-hover:text-[#F5A623] transition-colors">
                Electronics and IoT
              </span>
              <span className="text-[11px] font-mono text-[#A6ABB5] mt-1">
                Sensors &amp; Circuits
              </span>
            </div>

            {/* 5. Practical Technology Projects */}
            <div className="p-5 rounded-2xl bg-[#171A20] border border-[#2A2F38] hover:border-[#F5A623]/40 transition-all duration-200 text-center flex flex-col items-center justify-center group shadow-sm col-span-2 sm:col-span-1">
              <div className="w-11 h-11 rounded-xl bg-[#1F242D] border border-[#2A2F38] flex items-center justify-center text-[#F5A623] mb-3 group-hover:border-[#F5A623]/40 group-hover:bg-[#F5A623]/10 transition-colors">
                <Rocket className="w-5 h-5" />
              </div>
              <span className="text-sm font-semibold text-[#F5F5F2] group-hover:text-[#F5A623] transition-colors">
                Practical Projects
              </span>
              <span className="text-[11px] font-mono text-[#A6ABB5] mt-1">
                Hands-on Builds
              </span>
            </div>

          </div>
        </div>


        {/* ================================================================= */}
        {/* 5. SECTION FIVE: Beyond the Classroom                             */}
        {/* ================================================================= */}
        <div>
          <div className="max-w-2xl mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-[1px] w-4 bg-[#F5A623]" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F5A623]">
                PERSONAL PERSPECTIVE
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F2] tracking-tight">
              Beyond the Classroom
            </h3>
            <p className="mt-2 text-sm sm:text-base text-[#A6ABB5]">
              Learning doesn't stop with textbooks. I enjoy exploring ideas, trying things out, and finding new ways to understand the world around me.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            
            {/* Card 1: Exploring New Ideas */}
            <div className="p-6 rounded-2xl bg-[#171A20] border border-[#2A2F38] hover:border-[#F5A623]/40 transition-all duration-300 shadow-md">
              <div className="w-10 h-10 rounded-xl bg-[#F5A623]/10 border border-[#F5A623]/20 flex items-center justify-center text-[#F5A623] mb-4">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-[#F5F5F2]">
                Exploring New Ideas
              </h4>
              <p className="mt-2.5 text-sm text-[#A6ABB5] leading-relaxed">
                I enjoy discovering how everyday technology works and learning something new along the way.
              </p>
            </div>

            {/* Card 2: Hands-On Experiments */}
            <div className="p-6 rounded-2xl bg-[#171A20] border border-[#2A2F38] hover:border-[#F5A623]/40 transition-all duration-300 shadow-md">
              <div className="w-10 h-10 rounded-xl bg-[#F5A623]/10 border border-[#F5A623]/20 flex items-center justify-center text-[#F5A623] mb-4">
                <FlaskConical className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-[#F5F5F2]">
                Hands-On Experiments
              </h4>
              <p className="mt-2.5 text-sm text-[#A6ABB5] leading-relaxed">
                I like exploring practical ideas through small experiments, coding practice, and project work.
              </p>
            </div>

            {/* Card 3: Growing Through Challenges */}
            <div className="p-6 rounded-2xl bg-[#171A20] border border-[#2A2F38] hover:border-[#F5A623]/40 transition-all duration-300 shadow-md">
              <div className="w-10 h-10 rounded-xl bg-[#F5A623]/10 border border-[#F5A623]/20 flex items-center justify-center text-[#F5A623] mb-4">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-[#F5F5F2]">
                Growing Through Challenges
              </h4>
              <p className="mt-2.5 text-sm text-[#A6ABB5] leading-relaxed">
                I believe mistakes are part of learning, and every challenge is a chance to improve.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
