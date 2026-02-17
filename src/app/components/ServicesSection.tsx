import { motion } from "motion/react";
import {
  ClipboardCheck,
  ShieldCheck,
  AlertTriangle,
  FileCheck,
  Settings,
  BarChart3,
} from "lucide-react";

const services = [
  {
    icon: ClipboardCheck,
    title: "Environmental Assessments",
    description:
      "Comprehensive evaluations to ensure environmental compliance and sustainable project execution.",
  },
  {
    icon: ShieldCheck,
    title: "HSE Audits & Inspections",
    description:
      "Structured safety audits to identify risks and strengthen workplace compliance.",
  },
  {
    icon: AlertTriangle,
    title: "Risk Assessments",
    description:
      "Proactive identification and mitigation of operational, environmental, and safety risks.",
  },
  {
    icon: FileCheck,
    title: "Regulatory Compliance Support",
    description:
      "Guidance to ensure alignment with local and international environmental and HSE standards.",
  },
  {
    icon: Settings,
    title: "Safety Management Systems",
    description:
      "Development and implementation of structured HSE frameworks.",
  },
  {
    icon: BarChart3,
    title: "Environmental Monitoring",
    description:
      "Ongoing evaluation and reporting to maintain regulatory and operational standards.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6"
      style={{ backgroundColor: "#F4F8F5" }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2
            className="text-[#0B3D2E] mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(32px, 5vw, 44px)",
              lineHeight: "1.2",
              fontWeight: "600",
            }}
          >
            Core Services
          </h2>
          <div className="w-20 h-1 bg-[#C8A951] mx-auto"></div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
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
                className="bg-white rounded-lg p-6 sm:p-8 transition-all hover:-translate-y-1"
                style={{
                  boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
                }}
              >
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-4 sm:mb-5"
                  style={{ backgroundColor: "#0B3D2E" }}
                >
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#C8A951]" strokeWidth={2} />
                </div>

                <h3
                  className="text-[#0B3D2E] mb-3"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(20px, 3vw, 22px)",
                    fontWeight: "600",
                  }}
                >
                  {service.title}
                </h3>

                <p
                  className="text-[#374151]"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "clamp(14px, 2vw, 15px)",
                    lineHeight: "1.7",
                    fontWeight: "400",
                  }}
                >
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}