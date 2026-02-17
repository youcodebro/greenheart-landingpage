import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative h-screen overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-[120vh]"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1608985037525-3f93ef7cfe49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWluZm9yZXN0JTIwY2Fub3B5JTIwc3VucmlzZSUyMG1pc3QlMjBhZXJpYWx8ZW58MXx8fHwxNzcxMzMyODA2fDA&ixlib=rb-4.1.0&q=80&w=1080')`,
            filter: "saturate(0.85)",
          }}
        />
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(11, 61, 46, 0.65), rgba(11, 61, 46, 0.85))",
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6"
      >
        <div className="text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white mb-4 sm:mb-6"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(32px, 6vw, 56px)",
              lineHeight: "1.2",
              fontWeight: "600",
              letterSpacing: "-0.02em",
            }}
          >
            Environmental & HSE Solutions Rooted in Responsibility.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-white/90 mb-8 sm:mb-10 px-4"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(16px, 3vw, 18px)",
              lineHeight: "1.8",
              fontWeight: "400",
            }}
          >
            Supporting sustainable development across Guyana with structured
            compliance and safety expertise.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            onClick={scrollToContact}
            className="bg-[#C8A951] text-[#0B3D2E] px-6 sm:px-8 py-3 sm:py-4 rounded hover:bg-[#D4B562] transition-all"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(15px, 2.5vw, 16px)",
              fontWeight: "500",
            }}
          >
            Request Consultation
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}