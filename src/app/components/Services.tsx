import { ClipboardCheck, ShieldCheck, AlertTriangle, FileCheck, Settings, BarChart3 } from "lucide-react";

const services = [
  {
    icon: ClipboardCheck,
    title: "Environmental Assessments",
    description: "Comprehensive evaluations to ensure environmental compliance and sustainable project execution."
  },
  {
    icon: ShieldCheck,
    title: "HSE Audits & Inspections",
    description: "Structured safety audits to identify risks and strengthen workplace compliance."
  },
  {
    icon: AlertTriangle,
    title: "Risk Assessments",
    description: "Proactive identification and mitigation of operational, environmental, and safety risks."
  },
  {
    icon: FileCheck,
    title: "Regulatory Compliance Support",
    description: "Guidance to ensure alignment with local and international environmental and HSE standards."
  },
  {
    icon: Settings,
    title: "Safety Management Systems",
    description: "Development and implementation of structured HSE frameworks."
  },
  {
    icon: BarChart3,
    title: "Environmental Monitoring",
    description: "Ongoing evaluation and reporting to maintain regulatory and operational standards."
  }
];

export function Services() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="mb-4"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: '40px',
              lineHeight: '1.2',
              color: '#0B3D2E'
            }}
          >
            Core Services
          </h2>
          <div className="w-20 h-1 bg-[#C8A951] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-8 transition-all hover:shadow-xl border border-gray-100"
                style={{
                  boxShadow: '0 8px 30px rgba(0,0,0,0.06)'
                }}
              >
                <div 
                  className="w-14 h-14 rounded-lg flex items-center justify-center mb-5"
                  style={{ backgroundColor: '#F4F8F5' }}
                >
                  <Icon className="w-7 h-7" style={{ color: '#1F6F50' }} />
                </div>
                
                <h3 
                  className="mb-3"
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: '24px',
                    color: '#0B3D2E'
                  }}
                >
                  {service.title}
                </h3>
                
                <p 
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '16px',
                    lineHeight: '1.7',
                    color: '#1A1A1A'
                  }}
                >
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
