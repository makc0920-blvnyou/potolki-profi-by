"use client";

import { motion } from "framer-motion";
import { STEPS } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const stepVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function Steps() {
  return (
    <section className="py-20 sm:py-28 bg-premium-light">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-premium-accent font-semibold text-sm tracking-widest uppercase">
            Процесс
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-premium-dark">
            Как мы работаем
          </h2>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute left-12 top-0 bottom-0 w-0.5 bg-gray-200" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {STEPS.map((step) => (
              <motion.div
                key={step.step}
                variants={stepVariants}
                className="relative flex items-start gap-6 bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-accent text-white flex items-center justify-center font-bold font-heading text-lg shadow-lg shadow-premium-accent/25">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-premium-dark">
                    {step.title}
                  </h3>
                  <p className="text-premium-muted mt-1 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
