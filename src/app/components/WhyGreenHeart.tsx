import { Check } from "lucide-react";

const highlights = [
  "Guyana-based regulatory knowledge",
  "Structured compliance processes",
  "Risk-focused methodology",
  "Industry-aligned reporting",
  "Commitment to environmental stewardship"
];

export function WhyGreenHeart() {
  return (
    <section 
      className="py-24 px-6"
      style={{
        backgroundColor: '#0B3D2E',
        backgroundImage: 'linear-gradient(135deg, #0B3D2E 0%, #134E3A 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="mb-6"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: '40px',
              lineHeight: '1.2',
              color: '#FFFFFF'
            }}
          >
            Professional. Compliant. Sustainable.
          </h2>
          <div className="w-20 h-1 bg-[#C8A951] mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-5">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-4">
                <div 
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1"
                  style={{ backgroundColor: '#C8A951' }}
                >
                  <Check className="w-5 h-5" style={{ color: '#0B3D2E' }} strokeWidth={3} />
                </div>
                <p 
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '18px',
                    lineHeight: '1.6',
                    color: '#FFFFFF'
                  }}
                >
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
