"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Home() {
  const [isOpen, setIsopen] = useState(false);

  const toggle = () => {
    setIsopen((prev) => !prev);
  };

  const Projects = [
    {
      id: 1,
      Name: "Portal EG",
      Desc: "Education Reimagined",
      Framework: "React Native",
      Server: "Vercel",
      Year: 2026,
      Picture: "Portal.png",
      URL: "https://portaleg.com",
    },
    {
      id: 2,
      Name: "OUDÈ",
      Desc: "Playful Objects for Joyful Homes.",
      Framework: "Next.js",
      Server: "Vercel",
      Year: 2026,
      Picture: "OUDÈ.png",
      URL: "https://oude-eg.vercel.app",
    },
  ];

  const Experiences = [
    {
      id: 1,
      Place: "TrendLix",
      PlaceLink: "https://trendlix.com",
      Role: "Frontend Developer",
      Start: "Aug 2026",
      End: "Dec 2026",
      Desc: "Worked on many internal projects such as responsive ecommerce and informational apps in a collaborative team.",
      One: "",
      Two: "",
      Three: "",
    },
  ];

  return (
    <>
      <div className="flex justify-center items-center flex-col px-4 sm:px-6 pb-20">
        <div className="w-full max-w-4xl space-y-16 mt-16">
          {/* Personal */}
          <div className="space-y-12">
            <div className="flex flex-col-reverse sm:flex-row items-center justify-center md:justify-between gap-8 sm:gap-0">
              <div className="flex flex-col justify-between space-y-4">
                <div>
                  <h1 className="font-black text-4xl sm:text-5xl tracking-tight text-zinc-900 dark:text-zinc-100">
                    Karim Shady
                  </h1>
                  <h2 className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-400 font-medium mt-1">
                    Frontend Web Developer
                  </h2>
                  <p className="text-base text-zinc-500 mt-2 flex items-center gap-2">
                    <span className="text-2xl">
                      <Link href="https://google.com/search?q=Egypt">🇪🇬</Link>
                    </span>
                    Cairo, Egypt
                  </p>
                </div>
                <p className="text-sm font-medium text-zinc-700 dark:text-zinc-400/80 bg-zinc-200/60 dark:bg-zinc-900/50 w-fit px-3 py-1.5 rounded-full border border-zinc-300 dark:border-zinc-800">
                  I like to make stuff!
                </p>
              </div>
              <div className="shrink-0">
                <Image
                  src="/Photos/Karim.jpeg"
                  alt="Kimo"
                  width={160}
                  height={160}
                  className="rounded-2xl object-cover border border-zinc-300 dark:border-zinc-800 shadow-xl dark:shadow-2xl hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Currently Card */}
            <div className="bg-white/60 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/50 p-6 sm:p-8 rounded-3xl shadow-lg dark:shadow-xl backdrop-blur-md relative overflow-hidden group hover:border-zinc-300 dark:hover:border-zinc-700/50 transition-colors">
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 dark:bg-green-500/5 rounded-full blur-3xl -z-10 group-hover:bg-green-500/15 dark:group-hover:bg-green-500/10 transition-colors" />

              {/* Indicator */}
              <div className="flex gap-2 items-center text-green-500 dark:text-green-400 font-bold text-xs tracking-wider uppercase mb-5">
                <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.6)] dark:shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
                Currently Building
              </div>

              {/* Job Title */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-x-2 gap-y-1 items-baseline">
                  {/* <h1 className="text-3xl font-black text-zinc-900 dark:text-zinc-100">
                    Founder
                  </h1>
                  <span className="text-xl font-bold text-zinc-400 dark:text-zinc-600">
                    @
                  </span> */}
                  <h1 className="text-3xl font-black text-transparent bg-clip-text bg-linear-to-r from-zinc-900 to-zinc-500 dark:from-zinc-100 dark:to-zinc-400">
                    Portal EG
                  </h1>
                </div>
                <h2 className="text-xs font-mono text-zinc-500 mt-2 tracking-widest uppercase">
                  2026 - Present
                </h2>
              </div>

              {/* Job Desc & Tech Stack */}
              <div className="max-w-2xl space-y-6">
                <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Portal is a new enterprise-grade Learning Management System
                  for educational institutes aimed at the Egyptian education
                  market to revolutionize academics.
                </p>

                {/* Tech Stack Icons */}
                {/* <div className="flex flex-row items-center gap-4 pt-2">
                  {[
                    {
                      src: "/Icons/TypeScript.svg",
                      name: "TypeScript",
                      link: "https://www.typescriptlang.org/",
                    },
                    {
                      src: "/Icons/Reactnative.svg",
                      name: "React Native",
                      link: "https://reactnative.dev/",
                    },
                    {
                      src: "/Icons/Supabase.svg",
                      name: "Supabase",
                      link: "https://supabase.com/",
                    },
                    {
                      src: "/Icons/Vercel.svg",
                      name: "Vercel",
                      link: "https://vercel.com/",
                    },
                    {
                      src: "/Icons/GSAP.jpg",
                      name: "GSAP",
                      link: "https://gsap.com/",
                      round: true,
                    },
                    {
                      src: "/Icons/Tailwind.svg",
                      name: "Tailwind CSS",
                      link: "https://tailwindcss.com/",
                    },
                  ].map((tech) => (
                    <Link
                      key={tech.name}
                      href={tech.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={tech.src}
                        alt={tech.name}
                        width={24}
                        height={24}
                        className={`h-6 w-auto object-contain cursor-pointer grayscale opacity-60 dark:opacity-50 hover:grayscale-0 hover:opacity-100 hover:scale-110 active:scale-95 transition-all duration-200 ${tech.round ? "rounded-full h-5 w-5 object-cover" : ""}`}
                        title={tech.name}
                      />
                    </Link>
                  ))}
                </div> */}
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="pt-4">
            <button
              onClick={toggle}
              className="flex flex-row items-center gap-2 cursor-pointer bg-zinc-200/50 dark:bg-zinc-900/50 hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-zinc-300 dark:border-zinc-800 px-5 py-2.5 rounded-full text-sm font-semibold text-zinc-700 dark:text-zinc-300 transition-all active:scale-95"
            >
              Experience
              <ChevronDown
                className={`w-4 h-4 text-zinc-500 dark:text-zinc-400 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {isOpen && (
              <div className="mt-8 ml-2 space-y-6">
                {Experiences.map((ex, index) => (
                  <div
                    key={index}
                    className="flex flex-row items-start gap-6 group"
                  >
                    {/* Polished Timeline Node */}
                    <div className="flex flex-col items-center mt-1.5">
                      <div className="w-0.5 h-4 bg-linear-to-b from-transparent to-zinc-300 dark:to-zinc-800" />
                      <div className="w-2.5 h-2.5 bg-zinc-400 rounded-full ring-4 ring-zinc-100 dark:ring-zinc-950 group-hover:bg-blue-500 dark:group-hover:bg-blue-400 group-hover:ring-blue-500/20 dark:group-hover:ring-blue-400/20 transition-all" />
                      <div className="w-0.5 h-full min-h-20 bg-zinc-300 dark:bg-zinc-800" />
                    </div>

                    {/* Timeline Content */}
                    <div className="flex flex-col gap-1.5 pb-8">
                      <Link href={ex.PlaceLink}>
                        <span className="text-xl font-bold text-zinc-900 dark:text-zinc-100 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                          {ex.Place}
                        </span>
                      </Link>
                      <div className="text-base font-medium text-zinc-700 dark:text-zinc-300">
                        {ex.Role}
                      </div>

                      <div className="flex flex-row items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
                        <span>{ex.Start}</span>
                        <span>—</span>
                        <span>{ex.End}</span>
                      </div>

                      <div className="text-sm text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed mb-3">
                        {ex.Desc}
                      </div>

                      <div className="flex flex-row gap-3 pt-1">
                        {[ex.One, ex.Two, ex.Three].map(
                          (icon, i) =>
                            icon && (
                              <Image
                                key={i}
                                src={`/Icons/${icon}.svg`}
                                alt={icon}
                                width={20}
                                height={20}
                                className="h-5 w-auto object-contain cursor-pointer grayscale opacity-60 dark:opacity-40 hover:grayscale-0 hover:opacity-100 hover:-translate-y-0.5 transition-all duration-200"
                                title={icon}
                              />
                            ),
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Projects */}
          <div>
            <div className="flex flex-row justify-between items-center min-w-2/3 mb-2">
              <h1 className="text-2xl font-bold">My Work</h1>
              {/* <div className="flex flex-row items-center gap-1 cursor-pointer select-none text-sm font-semibold hover:opacity-80">
                View More <ArrowRight className="w-4 h-4" />
              </div> */}
            </div>

            <div className="flex flex-row gap-4 flex-wrap justify-center md:justify-start">
              {Projects.map((project) => (
                <Link
                  href={project.URL}
                  key={project.id}
                  className="w-72 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all group"
                >
                  <div className="m-4">
                    <h1 className="text-xl font-bold group-hover:text-blue-400 transition-colors">
                      {project.Name}
                    </h1>

                    <div className="w-full h-40 rounded-lg my-2 overflow-hidden relative">
                      <Image
                        src={`/Photos/${project.Picture}`}
                        alt="PortalOG"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-400 truncate mb-3">
                        {project.Desc}
                      </p>
                      <div className="flex flex-row justify-between items-center gap-2">
                        <p className="bg-white/10 text-gray-800 border border-gray-950 px-2 py-0.5 rounded-md text-xs font-mono">
                          {project.Framework}
                        </p>
                        <p className="bg-white/10 text-gray-800 border border-gray-950 px-2 py-0.5 rounded-md text-xs font-mono">
                          {project.Server}
                        </p>
                        <p className="bg-white/10 text-gray-800 border border-gray-950 px-2 py-0.5 rounded-md text-xs font-mono">
                          {project.Year}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
