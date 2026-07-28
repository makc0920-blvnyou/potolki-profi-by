"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { ChevronRight, ChevronLeft, Check } from "lucide-react";
import { CEILING_TYPES, CITIES, PHONE_REGEX } from "@/lib/data";
import { calculatePrice } from "@/lib/calculator";

const formSchema = z.object({
  name: z.string().min(2, "Введите имя"),
  phone: z.string().regex(PHONE_REGEX, "Формат: +375 (29) 123-45-67"),
});

type FormData = z.infer<typeof formSchema>;

const steps = [
  { id: 1, label: "Тип потолка" },
  { id: 2, label: "Параметры" },
  { id: 3, label: "Результат" },
];

const slideVariants = {
  enter: (direction: number) => ({ x: direction > 0 ? 300 : -300, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction > 0 ? -300 : 300, opacity: 0 }),
};

export default function Calculator() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [ceilingType, setCeilingType] = useState<string>(CEILING_TYPES[0].id);
  const [area, setArea] = useState(20);
  const [lights, setLights] = useState(4);
  const [city, setCity] = useState<string>(CITIES[0].id);

  const price = calculatePrice({ ceilingTypeId: ceilingType, area, lightsCount: lights, cityId: city });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = useCallback(async () => {
    await new Promise((r) => setTimeout(r, 1000));
    toast.success("Спасибо! Мы перезвоним вам в течение 15 минут.");
    reset();
    setStep(1);
  }, [reset]);

  const goNext = () => {
    setDirection(1);
    if (step < 3) setStep(step + 1);
  };

  const goPrev = () => {
    setDirection(-1);
    if (step > 1) setStep(step - 1);
  };

  const progress = ((step - 1) / (steps.length - 1)) * 100;

  return (
    <section id="calculator" className="scroll-mt-20 py-20 sm:py-28 bg-premium-light">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-premium-accent font-semibold text-sm tracking-widest uppercase">
            Калькулятор
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-premium-dark">
            Рассчитайте стоимость за 1 минуту
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-10"
        >
          <div className="flex items-center justify-between mb-8">
            {steps.map((s) => (
              <div key={s.id} className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                    s.id <= step
                      ? "bg-gradient-accent text-white"
                      : "bg-gray-100 text-gray-400"
                  }`}
                >
                  {s.id < step ? <Check className="h-4 w-4" /> : s.id}
                </div>
                <span className="hidden sm:block text-sm font-medium text-premium-text">
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          <div className="w-full h-1.5 bg-gray-100 rounded-full mb-8">
            <motion.div
              className="h-full bg-gradient-accent rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={step}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {step === 1 && (
                <div className="space-y-4">
                  <label className="block text-sm font-semibold text-premium-dark mb-2">
                    Выберите тип потолка
                  </label>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {CEILING_TYPES.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => setCeilingType(t.id)}
                        className={`text-left p-4 rounded-xl border-2 transition-all ${
                          ceilingType === t.id
                            ? "border-premium-accent bg-premium-accent/5"
                            : "border-gray-200 hover:border-premium-accent/50"
                        }`}
                      >
                        <span className="block font-semibold text-premium-dark">
                          {t.label}
                        </span>
                        <span className="text-sm text-premium-accent font-bold">
                          {t.pricePerM2} BYN/м²
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-premium-dark mb-2">
                        Площадь (м²)
                      </label>
                      <input
                        type="number"
                        min={1}
                        max={200}
                        value={area}
                        onChange={(e) => setArea(Number(e.target.value))}
                        className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-premium-dark focus:border-premium-accent focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-premium-dark mb-2">
                        Светильники
                      </label>
                      <input
                        type="number"
                        min={0}
                        max={50}
                        value={lights}
                        onChange={(e) => setLights(Number(e.target.value))}
                        className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-premium-dark focus:border-premium-accent focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-premium-dark mb-2">
                        Город
                      </label>
                      <select
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-premium-dark focus:border-premium-accent focus:outline-none transition-colors"
                      >
                        {CITIES.map((c) => (
                          <option key={c.id} value={c.id}>
                            {c.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="text-center space-y-6">
                  <div>
                    <p className="text-sm text-premium-muted mb-2">
                      Предварительная стоимость
                    </p>
                    <motion.p
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="text-5xl sm:text-6xl font-extrabold font-heading text-gradient-accent"
                    >
                      {price.toLocaleString()} BYN
                    </motion.p>
                  </div>

                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="max-w-md mx-auto space-y-4"
                  >
                    <input
                      {...register("name")}
                      placeholder="Ваше имя"
                      className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-premium-dark placeholder:text-gray-400 focus:border-premium-accent focus:outline-none transition-colors"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm text-left">
                        {errors.name.message}
                      </p>
                    )}
                    <input
                      {...register("phone")}
                      placeholder="+375 (29) 123-45-67"
                      className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-premium-dark placeholder:text-gray-400 focus:border-premium-accent focus:outline-none transition-colors"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm text-left">
                        {errors.phone.message}
                      </p>
                    )}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-accent text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-premium-accent/25 hover:shadow-xl hover:shadow-premium-accent/30 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50"
                    >
                      {isSubmitting ? "Отправка..." : "Зафиксировать цену"}
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between mt-8">
            <button
              onClick={goPrev}
              disabled={step === 1}
              className="flex items-center gap-2 text-sm font-medium text-premium-muted hover:text-premium-dark disabled:opacity-30 transition-colors"
            >
              <ChevronLeft className="h-4 w-4" /> Назад
            </button>
            {step < 3 && (
              <button
                onClick={goNext}
                className="flex items-center gap-2 text-sm font-semibold text-premium-accent hover:text-premium-accent-dark transition-colors"
              >
                Далее <ChevronRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
