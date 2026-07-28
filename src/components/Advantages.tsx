"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Droplets, Sparkles, FileText } from "lucide-react";
import { ADVANTAGES, ADVANTAGE_STATS } from "@/lib/data";
import { useCounter } from "@/lib/hooks";

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="h-7 w-7" />,
  Droplets: <Droplets className="h-7 w-7" />,
  Sparkles: <Sparkles className="h-7 w-7" />,
  FileText: <FileText className="h-7 w-7" />,
};

function StatCounter({ value, suffix }: { value: number; suffix: string }) {
  const count = useCounter(value);
  return (
    <span className="text-3xl sm:text-4xl font-extrabold font-heading text-gradient-accent">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Advantages() {
  return (
    <section className="py-20 sm:py-28 bg-premium-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-premium-accent font-semibold text-sm tracking-widest uppercase">
            Преимущества
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-premium-dark">
            Почему выбирают нас
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {ADVANTAGES.map((adv, i) => (
            <motion.div
              key={adv.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <motion.div
                initial={{ rotate: 0 }}
                whileInView={{ rotate: 360 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-accent text-white mb-4 shadow-lg shadow-premium-accent/25"
              >
                {iconMap[adv.icon]}
              </motion.div>
              <h3 className="text-lg font-bold font-heading text-premium-dark mb-2">
                {adv.title}
              </h3>
              <p className="text-premium-muted text-sm leading-relaxed">
                {adv.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sm:p-12"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {ADVANTAGE_STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <StatCounter value={stat.value} suffix={stat.suffix} />
                <p className="text-premium-muted text-sm mt-2 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
