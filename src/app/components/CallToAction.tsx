export function CallToAction() {
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-32 px-6" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 
          className="mb-8"
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: '44px',
            lineHeight: '1.3',
            color: '#0B3D2E'
          }}
        >
          Protect Your Operations. Strengthen Compliance. Support Sustainability.
        </h2>

        <button
          onClick={scrollToForm}
          className="bg-[#C8A951] text-[#0B3D2E] px-8 py-5 rounded-lg transition-all hover:bg-[#D4B562] hover:shadow-lg"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '18px',
            fontWeight: '600'
          }}
        >
          Schedule a Consultation
        </button>
      </div>
    </section>
  );
}
