import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const formSection = document.getElementById('contact-form');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-[#0B3D2E] to-[#134E3A]"
        style={{
          backgroundImage: `linear-gradient(135deg, #0B3D2E 0%, #134E3A 100%)`
        }}
      />
      
      {/* Rainforest Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1647551226093-2f015910d3ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndXlhbmElMjB0cm9waWNhbCUyMHJhaW5mb3Jlc3QlMjBhZXJpYWx8ZW58MXx8fHwxNzcxMzMxNTE0fDA&ixlib=rb-4.1.0&q=80&w=1080')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="mb-6">
          <h1 
            className="text-white mb-2"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: '56px',
              lineHeight: '1.1',
              letterSpacing: '-0.02em'
            }}
          >
            🌿 GREEN HEART
          </h1>
          <p className="text-[#C8A951] text-xl" style={{ fontFamily: "'Inter', sans-serif" }}>
            Corporate Environmental & HSE Consultancy
          </p>
          <p className="text-white/70 text-sm mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>
            Guyana LTD
          </p>
        </div>

        {/* Gold Accent Line */}
        <div className="w-24 h-1 bg-[#C8A951] mx-auto mb-8"></div>

        <h2 
          className="text-white mb-6 max-w-4xl mx-auto"
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: '48px',
            lineHeight: '1.2'
          }}
        >
          Environmental & HSE Solutions You Can Trust.
        </h2>

        <p 
          className="text-white/90 mb-12 max-w-3xl mx-auto"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '18px',
            lineHeight: '1.7'
          }}
        >
          Professional environmental and health & safety consulting services supporting compliance, 
          sustainability, and operational excellence across Guyana.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToForm}
            className="bg-[#C8A951] text-[#0B3D2E] px-7 py-4 rounded-lg transition-all hover:bg-[#D4B562] hover:shadow-lg"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '16px',
              fontWeight: '600'
            }}
          >
            Request Consultation
          </button>
          <button
            onClick={scrollToContact}
            className="border-2 border-white text-white px-7 py-4 rounded-lg transition-all hover:bg-white/10"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '16px',
              fontWeight: '600'
            }}
          >
            Speak With Our Team
          </button>
        </div>
      </div>
    </section>
  );
}
