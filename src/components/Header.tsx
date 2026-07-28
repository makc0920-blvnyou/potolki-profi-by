"use client";

import { motion } from "framer-motion";
import { COMPANY } from "@/lib/data";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-bold font-heading text-premium-dark tracking-tight"
          >
            {COMPANY.name}
          </motion.span>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="text-sm font-medium text-premium-text hover:text-premium-accent transition-colors"
            >
              {COMPANY.phone}
            </a>
            <a
              href="#calculator"
              className="inline-flex items-center gap-2 bg-gradient-accent text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-premium-accent/25 hover:shadow-xl hover:shadow-premium-accent/30 hover:scale-105 transition-all duration-300"
            >
              Бесплатный замер
            </a>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}
