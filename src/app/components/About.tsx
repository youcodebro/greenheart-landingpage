import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1691500395756-dc6f7f24f7cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXNoJTIwZ3JlZW4lMjByYWluZm9yZXN0JTIwY2Fub3B5JTIwc3VubGlnaHR8ZW58MXx8fHwxNzcxMzMxOTc4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Beautiful Guyana Rainforest"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div 
              className="absolute -bottom-6 -right-6 w-32 h-32 border-4 rounded-lg -z-10"
              style={{ borderColor: '#C8A951' }}
            />
          </div>

          {/* Right Column - Content */}
          <div>
            <h2 
              className="mb-6"
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: '40px',
                lineHeight: '1.2',
                color: '#0B3D2E'
              }}
            >
              A Reliable Partner in Environmental & HSE Compliance
            </h2>
            
            <div className="space-y-4">
              <p 
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '17px',
                  lineHeight: '1.8',
                  color: '#1A1A1A'
                }}
              >
                Green Heart is a Guyana-registered Environmental and Health, Safety & Environmental 
                (HSE) consultancy providing professional compliance, risk management, and sustainability 
                services across multiple industries.
              </p>
              
              <p 
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '17px',
                  lineHeight: '1.8',
                  color: '#1A1A1A'
                }}
              >
                We support organizations in meeting regulatory standards, improving operational safety, 
                and implementing environmentally responsible practices.
              </p>
              
              <p 
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '17px',
                  lineHeight: '1.8',
                  color: '#1A1A1A'
                }}
              >
                Our approach is structured, compliant, and results-driven.
              </p>
            </div>

            {/* Gold accent line */}
            <div className="mt-8 w-20 h-1 bg-[#C8A951]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}