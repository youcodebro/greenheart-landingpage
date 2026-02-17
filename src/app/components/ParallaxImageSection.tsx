import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface ParallaxImageSectionProps {
  imageUrl: string;
  title: string;
  subtitle?: string;
}

export function ParallaxImageSection({
  imageUrl,
  title,
  subtitle,
}: ParallaxImageSectionProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={ref}
      className="relative h-[80vh] overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-[120%]"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${imageUrl}')`,
            filter: "saturate(0.8) blur(2px)",
          }}
        />
        {/* Dark Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "rgba(11, 61, 46, 0.75)",
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6">
        <div className="text-center max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-white mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(32px, 5vw, 48px)",
              lineHeight: "1.2",
              fontWeight: "500",
            }}
          >
            {title}
          </motion.h2>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="text-white/85 px-4"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(16px, 2.5vw, 18px)",
                lineHeight: "1.6",
                fontWeight: "300",
              }}
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}