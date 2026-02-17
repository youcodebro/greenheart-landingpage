import { MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 sm:py-16 px-4 sm:px-6 bg-[#0B3D2E]">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
          <div>
            <h3
              className="text-white mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(20px, 3vw, 24px)",
                fontWeight: "600",
              }}
            >
              🌿 Green Heart
            </h3>
            <p
              className="text-white/80 mb-4"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(14px, 2vw, 15px)",
                lineHeight: "1.7",
              }}
            >
              Professional Environmental & HSE consultancy serving all
              industries across Guyana.
            </p>
            <div className="inline-block px-4 py-2 rounded border-2 border-[#C8A951]">
              <span
                className="text-[#C8A951]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "13px",
                  fontWeight: "600",
                }}
              >
                Registered Guyana LTD
              </span>
            </div>
          </div>

          <div>
            <h4
              className="text-white mb-4"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(16px, 2.5vw, 18px)",
                fontWeight: "600",
              }}
            >
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-[#C8A951] flex-shrink-0" />
                <div
                  className="text-white/80"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "clamp(14px, 2vw, 15px)",
                    lineHeight: "1.6",
                  }}
                >
                  <div>Georgetown, Guyana</div>
                  <div>Washington, DC</div>
                  <div>Houston, Texas</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#C8A951] flex-shrink-0" />
                <a
                  href="mailto:victoria@greenheart.group"
                  className="text-white/80 hover:text-white transition-colors break-all"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "clamp(14px, 2vw, 15px)",
                    textDecoration: "none",
                  }}
                >
                  victoria@greenheart.group
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4
              className="text-white mb-4"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(16px, 2.5vw, 18px)",
                fontWeight: "600",
              }}
            >
              Standards & Compliance
            </h4>
            <p
              className="text-white/80"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(14px, 2vw, 15px)",
                lineHeight: "1.7",
              }}
            >
              Aligned with international HSE standards including ISO 14001, ISO
              45001, and local regulatory requirements.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 text-center">
          <p
            className="text-white/70"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(13px, 2vw, 14px)",
            }}
          >
            © {new Date().getFullYear()} Green Heart Environmental & HSE
            Consultancy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}