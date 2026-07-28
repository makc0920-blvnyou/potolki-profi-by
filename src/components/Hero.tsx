"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { HERO } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0 animate-ken-burns">
        <Image
          src={HERO.bgImage}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-premium-dark/80 via-premium-dark/60 to-transparent" />

      <motion.div
        initial="hidden"
        animate="visible"
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full"
      >
        <motion.span
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
          className="inline-block text-premium-accent font-semibold text-sm tracking-widest uppercase mb-4"
        >
          Натяжные потолки под ключ
        </motion.span>

        <motion.h1
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } } }}
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold font-heading text-white leading-tight max-w-4xl"
        >
          {HERO.title.split("с установкой")[0]}
          <span className="text-gradient-accent"> с установкой</span> за 1 день
        </motion.h1>

        <motion.p
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } } }}
          className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed"
        >
          {HERO.subtitle}
        </motion.p>

        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.6 } } }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#calculator"
            className="inline-flex items-center justify-center gap-2 bg-gradient-accent text-white px-8 py-4 rounded-full text-base font-semibold shadow-xl shadow-premium-accent/30 hover:shadow-2xl hover:shadow-premium-accent/40 hover:scale-105 transition-all duration-300"
          >
            Рассчитать стоимость
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full text-base font-semibold hover:bg-white/20 hover:scale-105 transition-all duration-300"
          >
            Смотреть работы
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="h-8 w-8 text-white/60" />
      </motion.div>
    </section>
  );
}
