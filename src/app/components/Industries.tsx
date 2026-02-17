const industries = [
  "Oil & Gas",
  "Construction",
  "Mining",
  "Manufacturing",
  "Energy",
  "Government & Public Sector"
];

export function Industries() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: '#F4F8F5' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 
            className="mb-4"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: '40px',
              lineHeight: '1.2',
              color: '#0B3D2E'
            }}
          >
            Industries Served
          </h2>
          <div className="w-20 h-1 bg-[#C8A951] mx-auto"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white px-8 py-4 rounded-lg shadow-sm border border-gray-200 transition-all hover:shadow-md hover:border-[#1F6F50]"
            >
              <span 
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#0B3D2E'
                }}
              >
                {industry}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
