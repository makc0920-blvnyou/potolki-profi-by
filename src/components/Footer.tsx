"use client";

import { motion } from "framer-motion";
import { COMPANY } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-premium-dark text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <div>
            <h4 className="text-white text-lg font-bold font-heading mb-4">
              {COMPANY.fullName}
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              {COMPANY.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-white text-lg font-bold font-heading mb-4">
              Контакты
            </h4>
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="text-premium-accent hover:text-premium-accent-dark transition-colors text-sm block"
            >
              {COMPANY.phone}
            </a>
            <p className="text-gray-400 text-sm mt-2">{COMPANY.legalAddress}</p>
          </div>

          <div>
            <h4 className="text-white text-lg font-bold font-heading mb-4">
              Реквизиты
            </h4>
            <p className="text-gray-400 text-sm">УНП: {COMPANY.unp}</p>
            <p className="text-gray-400 text-sm mt-1">{COMPANY.fullName}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-gray-700/50 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} {COMPANY.fullName}
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-premium-accent transition-colors"
            >
              Политика конфиденциальности
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-premium-accent transition-colors"
            >
              Instagram
            </a>
          </div>
        </motion.div>

        <p className="text-xs text-gray-600 text-center mt-8">
          Не является публичной офертой
        </p>
      </div>
    </footer>
  );
}
