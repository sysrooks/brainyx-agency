"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { siteConfig } from "@/config/site";

export function CTA() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#050508]" />
      
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px]"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Card */}
          <div className="relative p-10 sm:p-16 rounded-[2.5rem] bg-gradient-to-br from-white/[0.05] to-white/[0.01] border border-white/10 backdrop-blur-xl overflow-hidden">
            {/* Gradient Orbs */}
            <div className="absolute -top-32 -left-32 w-64 h-64 bg-cyan-500/20 rounded-full blur-[100px]" />
            <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-violet-500/20 rounded-full blur-[100px]" />

            {/* Content */}
            <div className="relative z-10 text-center">
              {/* Icon */}
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-cyan-500/30 mb-8"
              >
                <Zap className="w-8 h-8 text-cyan-400" />
              </motion.div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                {siteConfig.cta.title}
              </h2>

              {/* Subtitle */}
              <p className="max-w-xl mx-auto text-lg text-gray-400 mb-10">
                {siteConfig.cta.subtitle}
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#"
                  className="group relative w-full sm:w-auto px-8 py-4 rounded-full bg-cyan-500 text-black font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_60px_rgba(0,212,255,0.4)]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {siteConfig.cta.primaryCta}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
                <a
                  href="#case-studies"
                  className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 text-white font-medium text-lg hover:bg-white/5 hover:border-white/40 transition-all duration-300"
                >
                  {siteConfig.cta.secondaryCta}
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-sm text-gray-500 mb-4">Trusted by innovative teams</p>
                <div className="flex items-center justify-center gap-8 opacity-50">
                  {["Acme Corp", "TechFlow", "DataSync", "CloudNine"].map((company) => (
                    <span
                      key={company}
                      className="text-sm font-medium text-gray-400"
                    >
                      {company}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
