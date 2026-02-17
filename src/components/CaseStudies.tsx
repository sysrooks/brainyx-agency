"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export function CaseStudies() {
  return (
    <section id="case-studies" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050508] via-[#0a0a0f] to-[#050508]" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
            What's Possible
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
            Results You Can{" "}
            <span className="gradient-text">Expect</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-400">
            Example scenarios showing typical outcomes from AI implementations. Your results may vary based on scope and requirements.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="space-y-8">
          {siteConfig.caseStudies.map((study, index) => (
            <motion.div
              key={study.company}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group"
            >
              <div className="relative p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-sm overflow-hidden hover:border-cyan-500/30 transition-all duration-500">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
                  {/* Content */}
                  <div>
                    {/* Company Info */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400">
                        {study.industry}
                      </span>
                      <span className="text-sm text-cyan-400 font-medium">
                        {study.company}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {study.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {study.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    {study.metrics.map((metric, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-2xl bg-white/5 border border-white/5 text-center group-hover:bg-white/[0.08] transition-all duration-300"
                      >
                        <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">
                          {metric.value}
                        </div>
                        <div className="text-xs text-gray-400">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow Icon */}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/30">
                  <ArrowUpRight className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
