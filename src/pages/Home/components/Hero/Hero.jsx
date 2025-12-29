"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaYoutube, FaEnvelope, FaDownload, FaArrowRight, FaCode, FaPlay } from "react-icons/fa"
import { SiPython, SiDjango, SiReact, SiTensorflow } from "react-icons/si"
import { HiSparkles, HiLightningBolt } from "react-icons/hi"

// --- DATA ---
const heroData = {
  name: "Ramim Ahmed",
  role: "Software Engineer & Aspiring ML Engineer",
  experience_badge: "Python Developer + ML Engineer",
  description:
    "Merging the strict logic of Algorithms with the intelligence of AI. I build scalable web applications using Django & React while turning raw data into actionable decisions.",
  buttons: {
    primary: { text: "View Projects", link: "#projects" },
    secondary: { text: "Download CV (Soon)", link: "/resume.pdf" },
  },
  socials: {
    github: "https://github.com/ramim141",
    linkedin: "https://linkedin.com/in/ramim-ahmed",
    youtube: "https://youtube.com/@codewithramuu",
    email: "mailto:ahramu584@gmail.com",
  },
}

// --- TYPING ANIMATION HOOK ---
const useTypingEffect = (text, speed = 80) => {
  const [displayedText, setDisplayedText] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.slice(0, i + 1))
        i++
      } else {
        setIsComplete(true)
        clearInterval(timer)
      }
    }, speed)
    return () => clearInterval(timer)
  }, [text, speed])

  return { displayedText, isComplete }
}

// --- SUB-COMPONENTS ---

const TechIcon = ({ name }) => {
  const icons = {
    Python: <SiPython className="w-6 h-6 md:w-7 md:h-7 text-[#3776AB]" />,
    Django: <SiDjango className="w-6 h-6 md:w-7 md:h-7 text-[#44B78B]" />,
    React: <SiReact className="w-6 h-6 md:w-7 md:h-7 text-[#61DAFB]" />,
    TensorFlow: <SiTensorflow className="w-6 h-6 md:w-7 md:h-7 text-[#FF6F00]" />,
  }
  return icons[name] || null
}

const SocialButton = ({ type, url, index }) => {
  const iconConfig = {
    github: { 
      icon: <FaGithub className="w-5 h-5" />, 
      hoverBg: "hover:bg-[#333]", 
      shadow: "hover:shadow-[#333]/40" 
    },
    linkedin: {
      icon: <FaLinkedin className="w-5 h-5" />,
      hoverBg: "hover:bg-[#0A66C2]",
      shadow: "hover:shadow-[#0A66C2]/40",
    },
    youtube: {
      icon: <FaYoutube className="w-5 h-5" />,
      hoverBg: "hover:bg-[#FF0000]",
      shadow: "hover:shadow-[#FF0000]/40",
    },
    email: {
      icon: <FaEnvelope className="w-5 h-5" />,
      hoverBg: "hover:bg-cyan-600",
      shadow: "hover:shadow-cyan-600/40",
    },
  }

  const config = iconConfig[type]

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8 + index * 0.1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1, y: -4 }}
      whileTap={{ scale: 0.9 }}
      className={`w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-900/50 backdrop-blur-md border border-slate-700/50 text-slate-400 hover:text-white hover:border-slate-500 transition-all duration-300 shadow-lg ${config.hoverBg} ${config.shadow}`}
    >
      {config.icon}
    </motion.a>
  )
}

const StatCard = ({ value, label, icon: Icon, gradient, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ y: -5, scale: 1.02 }}
    className="flex items-center gap-3 p-3 transition-colors border sm:gap-4 sm:p-4 group bg-slate-900/40 backdrop-blur-md border-slate-800/50 rounded-2xl hover:border-slate-600/50"
  >
    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shrink-0 shadow-lg group-hover:shadow-xl transition-shadow`}>
      <Icon className="w-5 h-5 text-white sm:w-6 sm:h-6" />
    </div>
    <div className="min-w-0">
      <p className="text-lg font-bold leading-tight text-white sm:text-xl tabular-nums">{value}</p>
      <p className="text-[10px] sm:text-xs font-medium tracking-widest uppercase text-slate-500">{label}</p>
    </div>
  </motion.div>
)

const FloatingBadge = ({ name, className, animateProps, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, type: "spring", stiffness: 200 }}
    className={`absolute z-20 ${className}`}
  >
    <motion.div
      animate={animateProps}
      transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      className="p-3 border shadow-xl bg-slate-800/90 backdrop-blur-xl rounded-xl border-slate-700/50"
    >
      <TechIcon name={name} />
    </motion.div>
  </motion.div>
)

const CodeLine = ({ lineNum, children, indent = 0 }) => (
  <div className="flex items-start">
    <span className="w-8 text-right text-slate-600 text-xs select-none flex-shrink-0 pt-0.5">{lineNum}</span>
    <pre className="ml-4 text-sm leading-relaxed" style={{ paddingLeft: `${indent * 16}px` }}>
      {children}
    </pre>
  </div>
)

const GlowEffect = ({ className }) => (
  <div className={`absolute pointer-events-none select-none ${className}`}>
    <div className="absolute inset-0 bg-cyan-500/20 blur-[100px] rounded-full animate-pulse" />
    <div className="absolute inset-0 bg-blue-600/10 blur-[60px] rounded-full animate-pulse delay-700" />
  </div>
)

const Hero = () => {
  const { displayedText, isComplete } = useTypingEffect("Model training complete! ✓", 60)
  const [activeStatCard, setActiveStatCard] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStatCard((prev) => (prev + 1) % 3)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full min-h-screen flex items-center bg-[#020617] overflow-hidden selection:bg-cyan-500/30">
      {/* --- BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)`,
            backgroundSize: "4rem 4rem",
            maskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)",
          }}
        />

        <GlowEffect className="-top-[10%] -right-[10%] w-[60%] aspect-square" />
        <GlowEffect className="-bottom-[10%] -left-[10%] w-[50%] aspect-square" />

        {/* Animated Noise Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150" />
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 w-full px-4 py-16 mx-auto max-w-7xl sm:px-6 md:px-8 lg:px-12">
        <div className="grid items-center grid-cols-1 gap-12 sm:gap-16 lg:grid-cols-2 lg:gap-32">
          {/* --- LEFT: TEXT CONTENT --- */}
          <div className="flex flex-col items-center order-2 text-center lg:items-start lg:text-left lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-800/50 backdrop-blur-md shadow-2xl">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-cyan-400"></span>
                  <span className="relative inline-flex w-2 h-2 rounded-full bg-cyan-500"></span>
                </span>
                <span className="lg:text-[14px] sm: text-[10px] font-bold tracking-widest uppercase text-slate-400">
                  {heroData.experience_badge}
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
              className="mb-6 space-y-2"
            >
              <p className="font-mono text-xs tracking-widest uppercase sm:text-sm text-cyan-400/80">Hello, World. I am</p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9]">
                <span className="text-transparent bg-gradient-to-b from-white via-white to-slate-500 bg-clip-text">
                  {heroData.name.split(" ")[0]}
                </span>
                <br />
                <span className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text">
                  {heroData.name.split(" ")[1]}
                </span>
              </h1>
            </motion.div>

            {/* Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative mb-8"
            >
              <h2 className="flex items-center gap-2 text-base font-medium sm:gap-3 sm:text-xl md:text-2xl text-slate-300">
                <div className="h-[1px] w-8 bg-slate-700 hidden sm:block" />
                <HiLightningBolt className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 animate-pulse" />
                <span className="text-balance">{heroData.role}</span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="max-w-xl mb-8 text-sm leading-relaxed sm:mb-10 sm:text-base md:text-lg text-slate-400 text-pretty"
            >
              {heroData.description}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-wrap items-center justify-center w-full gap-3 mb-8 sm:gap-5 sm:mb-12 lg:justify-start"
            >
              <motion.a
                href={heroData.buttons.primary.link}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative flex items-center h-12 gap-2 px-5 overflow-hidden text-sm font-bold transition-all bg-white shadow-xl sm:gap-3 sm:px-8 sm:text-base group sm:h-14 rounded-2xl text-slate-950 shadow-white/10"
              >
                <div className="absolute inset-0 transition-opacity opacity-0 bg-gradient-to-r from-cyan-100 to-white group-hover:opacity-100" />
                <span className="relative">{heroData.buttons.primary.text}</span>
                <FaArrowRight className="relative w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.a>

              <motion.a
                href={heroData.buttons.secondary.link}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center h-12 gap-2 px-5 text-sm font-bold text-white transition-all border sm:gap-3 sm:px-8 sm:text-base group sm:h-14 rounded-2xl bg-slate-900/50 backdrop-blur-md border-slate-800 hover:border-slate-600"
              >
                <FaDownload className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                <span>{heroData.buttons.secondary.text}</span>
              </motion.a>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col items-center gap-6 sm:flex-row"
            >
              <span className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em]">Orbiting on:</span>
              <div className="flex gap-4">
                {Object.entries(heroData.socials).map(([key, url], i) => (
                  <SocialButton key={key} type={key} url={url} index={i} />
                ))}
              </div>
            </motion.div>
          </div>

          {/* --- RIGHT: VISUAL CONTENT --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="relative order-1 lg:order-2 perspective-1000"
          >
            {/* Main Visual Container */}
            <div className="relative group">
              {/* Outer Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

              {/* IDE Card */}
              <motion.div
                whileHover={{ rotateY: -5, rotateX: 5, y: -10 }}
                transition={{ type: "spring", stiffness: 150, damping: 25 }}
                className="relative bg-[#0d1117] border border-slate-800/80 rounded-2xl sm:rounded-[2rem] shadow-[0_30px_60px_-12px_rgba(0,0,0,0.5)] overflow-hidden mx-auto w-full max-w-sm sm:max-w-md lg:max-w-lg"
              >
                {/* IDE Header */}
                <div className="flex items-center justify-between px-3 sm:px-6 py-3 sm:py-4 bg-[#161b22] border-b border-slate-800/80">
                  <div className="flex gap-1.5 sm:gap-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#27c93f]" />
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-4 py-1 sm:py-1.5 bg-[#0d1117] rounded-full border border-slate-800/50">
                    <SiPython className="text-[#3776AB] w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    <span className="font-mono text-[9px] sm:text-[11px] font-bold text-slate-400 tracking-wider">main.py</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center justify-center w-6 h-6 transition-colors rounded-lg sm:w-8 sm:h-8 sm:rounded-xl bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20"
                  >
                    <FaPlay className="w-2.5 h-2.5 sm:w-3 sm:h-3 ml-0.5" />
                  </motion.button>
                </div>

                {/* Code Content */}
                <div className="p-4 sm:p-6 md:p-8 font-mono space-y-1.5 sm:space-y-2 text-[10px] sm:text-[13px] leading-relaxed">
                  <CodeLine lineNum={1}>
                    <span className="text-[#ff7b72]">import</span> <span className="text-[#d2a8ff]">torch</span>
                  </CodeLine>
                  <CodeLine lineNum={2}>
                    <span className="text-[#ff7b72]">from</span> <span className="text-[#d2a8ff]">portfolio</span>{" "}
                    <span className="text-[#ff7b72]">import</span> <span className="text-[#79c0ff]">Human</span>
                  </CodeLine>
                  <CodeLine lineNum={3}>
                    <span className="text-[#8b949e]"># Initialize career trajectory</span>
                  </CodeLine>
                  <CodeLine lineNum={4}>
                    <span className="text-[#ff7b72]">class</span> <span className="text-[#ffa657]">Engineer</span>
                    <span className="text-[#c9d1d9]">(Human):</span>
                  </CodeLine>
                  <CodeLine lineNum={5} indent={1}>
                    <span className="text-[#ff7b72]">def</span> <span className="text-[#d2a8ff]">optimize</span>
                    <span className="text-[#c9d1d9]">(self):</span>
                  </CodeLine>
                  <CodeLine lineNum={6} indent={2}>
                    <span className="text-[#ff7b72]">return</span> <span className="text-[#79c0ff]">torch</span>
                    <span className="text-[#c9d1d9]">.compile(</span>
                  </CodeLine>
                  <CodeLine lineNum={7} indent={3}>
                    <span className="text-[#c9d1d9]">passion=</span>
                    <span className="text-[#79c0ff]">float</span>
                    <span className="text-[#c9d1d9]">(</span>
                    <span className="text-[#a5d6ff]">"inf"</span>
                    <span className="text-[#c9d1d9]">),</span>
                  </CodeLine>
                  <CodeLine lineNum={8} indent={3}>
                    <span className="text-[#c9d1d9]">skills=[</span>
                    <span className="text-[#a5d6ff]">"ML"</span>
                    <span className="text-[#c9d1d9]">, </span>
                    <span className="text-[#a5d6ff]">"Web"</span>
                    <span className="text-[#c9d1d9]">, </span>
                    <span className="text-[#a5d6ff]">"DSA"</span>
                    <span className="text-[#c9d1d9]">]</span>
                  </CodeLine>
                  <CodeLine lineNum={9} indent={2}>
                    <span className="text-[#c9d1d9]">)</span>
                  </CodeLine>

                  {/* Terminal Output */}
                  <div className="mt-4 sm:mt-6 md:mt-8 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-[#010409] border border-slate-800/50">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 text-[9px] sm:text-xs">
                      <span className="text-[#3fb950] font-bold">❯</span>
                      <span className="hidden font-bold tracking-widest uppercase text-slate-500 sm:inline">Execution Terminal</span>
                      <span className="font-bold tracking-widest uppercase text-slate-500 sm:hidden">Terminal</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="flex-shrink-0 w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                      <span className="text-cyan-400/90 text-[10px] sm:text-[13px] font-medium tracking-wide">
                        {displayedText}
                        {!isComplete && (
                          <span className="inline-block w-1.5 h-4 ml-1 bg-cyan-400 animate-[blink_1s_infinite]" />
                        )}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Progress Bar Container */}
                <div className="px-4 pb-4 sm:px-6 sm:pb-6 md:px-8 md:pb-8 group/progress">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest group-hover/progress:text-cyan-400 transition-colors">
                      System Readiness
                    </span>
                    <span className="text-[10px] font-bold text-cyan-400 uppercase tabular-nums group-hover/progress:text-green-400 transition-colors">85%</span>
                  </div>
                  <div className="h-2 overflow-hidden transition-colors border rounded-full bg-slate-800/50 border-slate-800 group-hover/progress:border-cyan-500/50">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "85%" }}
                      whileHover={{ width: "100%" }}
                      transition={{ delay: 1.5, duration: 2.5, ease: [0.65, 0, 0.35, 1] }}
                      className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.5)] group-hover/progress:from-green-400 group-hover/progress:via-emerald-500 group-hover/progress:to-teal-600 group-hover/progress:shadow-[0_0_30px_rgba(34,197,94,0.7)] transition-all duration-500"
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            <FloatingBadge
              name="Python"
              className="hidden sm:block -top-8 left-8 lg:-left-4"
              animateProps={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
              delay={0.8}
            />
           

            {/* Stats Row */}
            <div className="relative mt-12">
              {/* Desktop View - Show all cards */}
              <div className="justify-center hidden gap-4 sm:flex">
                <StatCard 
                  value="1.0k+" 
                  label="Problems" 
                  icon={FaCode} 
                  gradient="from-cyan-500 to-blue-600" 
                  delay={1.2} 
                />
                <StatCard
                  value="5+"
                  label="Projects"
                  icon={HiLightningBolt}
                  gradient="from-indigo-600 to-purple-600"
                  delay={1.4}
                />
                <StatCard
                  value="Coder"
                  label="DSA|Algo"
                  icon={HiSparkles}
                  gradient="from-amber-500 to-orange-600"
                  delay={1.6}
                />
              </div>

              {/* Mobile View - Carousel */}
              <div className="relative px-2 overflow-hidden sm:hidden">
                <div className="flex justify-center items-center min-h-[90px]">
                  <motion.div
                    key={activeStatCard}
                    initial={{ opacity: 0, scale: 0.8, x: 100 }}
                    animate={{ opacity: 1, scale: 1.05, x: 0 }}
                    exit={{ opacity: 0, scale: 0.8, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-[200px] justify-items-center"
                  >
                    {activeStatCard === 0 && (
                      <StatCard 
                        value="1.0k+" 
                        label="Problems" 
                        icon={FaCode} 
                        gradient="from-cyan-500 to-blue-600" 
                        delay={0} 
                      />
                    )}
                    {activeStatCard === 1 && (
                      <StatCard
                        value="5+"
                        label="Projects"
                        icon={HiLightningBolt}
                        gradient="from-indigo-600 to-purple-600"
                        delay={0}
                      />
                    )}
                    {activeStatCard === 2 && (
                      <StatCard
                        value="Coder"
                        label="DSA|Algo"
                        icon={HiSparkles}
                        gradient="from-amber-500 to-orange-600"
                        delay={0}
                      />
                    )}
                  </motion.div>
                </div>

                {/* Carousel Indicators */}
                <div className="flex justify-center gap-2 mt-3">
                  {[0, 1, 2].map((index) => (
                    <button
                      key={index}
                      onClick={() => setActiveStatCard(index)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        activeStatCard === index ? 'w-6 bg-cyan-400' : 'w-1.5 bg-slate-600'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute -translate-x-1/2 cursor-pointer -bottom-8 left-1/2 group"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 group-hover:text-cyan-400 transition-colors">
            Discover
          </span>
          <div className="relative w-px h-12 overflow-hidden bg-gradient-to-b from-slate-700 to-transparent">
            <motion.div
              animate={{ y: [0, 48] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-transparent via-cyan-400 to-transparent"
            />
          </div>
        </div>
      </motion.div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  )
}

export default Hero
