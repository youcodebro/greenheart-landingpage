import { motion } from "motion/react";

const industries = [
  "Oil & Gas",
  "Construction",
  "Mining",
  "Manufacturing",
  "Energy",
  "Government",
];

export function IndustriesSection() {
  return (
    <section id="industries" className="py-14 sm:py-18 lg:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2
            className="text-[#0B3D2E] mb-4 px-4 main-heading"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(32px, 5vw, 44px)",
              lineHeight: "1.2",
              fontWeight: "600",
            }}
          >
            Supporting Sustainable Development Across All Industries
          </h2>
          <div className="w-20 h-1 bg-[#C8A951] mx-auto"></div>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-0">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 border-r border-[#E5E7EB] last:border-r-0 border-b sm:border-b-0 btn-list"
            >
              <span
                className="text-[#0B3D2E]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(14px, 2.5vw, 16px)",
                  fontWeight: "500",
                }}
              >
                {industry}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}