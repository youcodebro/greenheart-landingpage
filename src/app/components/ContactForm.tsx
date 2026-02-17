import { useState } from "react";
import { Send } from "lucide-react";

const industries = [
  "Oil & Gas",
  "Construction",
  "Mining",
  "Manufacturing",
  "Energy",
  "Government & Public Sector",
  "Other"
];

const services = [
  "Environmental Assessments",
  "HSE Audits & Inspections",
  "Risk Assessments",
  "Regulatory Compliance Support",
  "Safety Management Systems",
  "Environmental Monitoring",
  "General Inquiry"
];

export function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    industry: "",
    service: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        industry: "",
        service: "",
        message: ""
      });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact-form" className="py-24 px-6" style={{ backgroundColor: '#F4F8F5' }}>
      <div className="max-w-3xl mx-auto">
        <div 
          className="bg-white rounded-lg p-10"
          style={{
            boxShadow: '0 8px 30px rgba(0,0,0,0.06)'
          }}
        >
          <h2 
            className="mb-8 text-center"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: '40px',
              lineHeight: '1.2',
              color: '#0B3D2E'
            }}
          >
            Submit an Inquiry
          </h2>

          {submitted ? (
            <div 
              className="text-center py-12 px-6 rounded-lg"
              style={{ backgroundColor: '#F4F8F5' }}
            >
              <div className="mb-4">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                  style={{ backgroundColor: '#C8A951' }}
                >
                  <Send className="w-8 h-8" style={{ color: '#0B3D2E' }} />
                </div>
              </div>
              <p 
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '18px',
                  lineHeight: '1.7',
                  color: '#0B3D2E'
                }}
              >
                Thank you for contacting Green Heart. A representative will respond within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label 
                  htmlFor="fullName"
                  className="block mb-2"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '15px',
                    fontWeight: '600',
                    color: '#0B3D2E'
                  }}
                >
                  Full Name <span style={{ color: '#C8A951' }}>*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1F6F50] focus:border-transparent"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '16px'
                  }}
                />
              </div>

              {/* Company Name */}
              <div>
                <label 
                  htmlFor="companyName"
                  className="block mb-2"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '15px',
                    fontWeight: '600',
                    color: '#0B3D2E'
                  }}
                >
                  Company Name <span style={{ color: '#C8A951' }}>*</span>
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  required
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1F6F50] focus:border-transparent"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '16px'
                  }}
                />
              </div>

              {/* Email */}
              <div>
                <label 
                  htmlFor="email"
                  className="block mb-2"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '15px',
                    fontWeight: '600',
                    color: '#0B3D2E'
                  }}
                >
                  Email Address <span style={{ color: '#C8A951' }}>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1F6F50] focus:border-transparent"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '16px'
                  }}
                />
              </div>

              {/* Phone Number */}
              <div>
                <label 
                  htmlFor="phone"
                  className="block mb-2"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '15px',
                    fontWeight: '600',
                    color: '#0B3D2E'
                  }}
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1F6F50] focus:border-transparent"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '16px'
                  }}
                />
              </div>

              {/* Industry */}
              <div>
                <label 
                  htmlFor="industry"
                  className="block mb-2"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '15px',
                    fontWeight: '600',
                    color: '#0B3D2E'
                  }}
                >
                  Industry
                </label>
                <select
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1F6F50] focus:border-transparent"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '16px'
                  }}
                >
                  <option value="">Select an industry</option>
                  {industries.map((industry) => (
                    <option key={industry} value={industry}>
                      {industry}
                    </option>
                  ))}
                </select>
              </div>

              {/* Service of Interest */}
              <div>
                <label 
                  htmlFor="service"
                  className="block mb-2"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '15px',
                    fontWeight: '600',
                    color: '#0B3D2E'
                  }}
                >
                  Service of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1F6F50] focus:border-transparent"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '16px'
                  }}
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label 
                  htmlFor="message"
                  className="block mb-2"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '15px',
                    fontWeight: '600',
                    color: '#0B3D2E'
                  }}
                >
                  Message <span style={{ color: '#C8A951' }}>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1F6F50] focus:border-transparent resize-none"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '16px'
                  }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#C8A951] text-[#0B3D2E] px-8 py-4 rounded-lg transition-all hover:bg-[#D4B562] hover:shadow-lg"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '18px',
                  fontWeight: '600'
                }}
              >
                Submit Inquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
