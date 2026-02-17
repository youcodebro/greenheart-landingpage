import { motion } from "motion/react";

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-lg overflow-hidden shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1587128090681-f411098e0473?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBlbnZpcm9ubWVudGFsJTIwcHJvZmVzc2lvbmFscyUyMHRlYW18ZW58MXx8fHwxNzcxMzMyODA4fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Professional HSE Team"
              className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
              style={{ filter: "saturate(0.9)" }}
            />
          </motion.div>

          {/* Right - Content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-[#0B3D2E] mb-4 sm:mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(32px, 5vw, 42px)",
                lineHeight: "1.2",
                fontWeight: "600",
              }}
            >
              A Trusted Environmental & HSE Partner
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="space-y-4"
            >
              <p
                className="text-[#374151]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(16px, 2.5vw, 17px)",
                  lineHeight: "1.8",
                  fontWeight: "400",
                }}
              >
                Green Heart is a Guyana-registered consultancy delivering
                structured environmental and HSE services across industries. We
                assist organizations in maintaining regulatory compliance,
                minimizing risk, and implementing sustainable operational
                practices.
              </p>

              <p
                className="text-[#374151]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(16px, 2.5vw, 17px)",
                  lineHeight: "1.8",
                  fontWeight: "400",
                }}
              >
                Our approach is structured, compliant, and results-driven.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}