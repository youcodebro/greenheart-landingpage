import { useState } from "react";
import { motion } from "motion/react";

const industries = [
  "Oil & Gas",
  "Construction",
  "Mining",
  "Manufacturing",
  "Energy",
  "Government & Public Sector",
  "Other",
];

const services = [
  "Environmental Assessments",
  "HSE Audits & Inspections",
  "Risk Assessments",
  "Regulatory Compliance Support",
  "Safety Management Systems",
  "Environmental Monitoring",
  "General Inquiry",
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    industry: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
        message: "",
      });
    }, 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6"
      style={{ backgroundColor: "#F4F8F5" }}
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white rounded-lg p-6 sm:p-8 lg:p-10"
          style={{
            boxShadow: "0 10px 40px rgba(0,0,0,0.06)",
          }}
        >
          <h2
            className="text-[#0B3D2E] mb-6 sm:mb-8 text-center"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(32px, 5vw, 40px)",
              lineHeight: "1.2",
              fontWeight: "600",
            }}
          >
            Submit an Inquiry
          </h2>

          {submitted ? (
            <div className="text-center py-12">
              <p
                className="text-[#0B3D2E] mb-4"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(16px, 2.5vw, 18px)",
                  lineHeight: "1.7",
                }}
              >
                Thank you for contacting Green Heart.
              </p>
              <p
                className="text-[#374151]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(15px, 2vw, 16px)",
                  lineHeight: "1.7",
                }}
              >
                A representative will respond within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block mb-2 text-[#0B3D2E]"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  Full Name <span className="text-[#C8A951]">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded border border-gray-300 transition-all duration-300"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "16px",
                    boxShadow: "0 0 0 0px rgba(31, 111, 80, 0)",
                  }}
                  onFocus={(e) => {
                    e.target.style.outline = "none";
                    e.target.style.borderColor = "#1F6F50";
                    e.target.style.boxShadow = "0 0 0 4px rgba(31, 111, 80, 0.15), 0 0 20px 2px rgba(31, 111, 80, 0.2)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#D1D5DB";
                    e.target.style.boxShadow = "0 0 0 0px rgba(31, 111, 80, 0)";
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="companyName"
                  className="block mb-2 text-[#0B3D2E]"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  Company Name <span className="text-[#C8A951]">*</span>
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  required
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded border border-gray-300 transition-all duration-300"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "16px",
                  }}
                  onFocus={(e) => {
                    e.target.style.outline = "none";
                    e.target.style.borderColor = "#1F6F50";
                    e.target.style.boxShadow = "0 0 0 4px rgba(31, 111, 80, 0.15), 0 0 20px 2px rgba(31, 111, 80, 0.2)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#D1D5DB";
                    e.target.style.boxShadow = "0 0 0 0px rgba(31, 111, 80, 0)";
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-[#0B3D2E]"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  Email Address <span className="text-[#C8A951]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded border border-gray-300 transition-all duration-300"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "16px",
                  }}
                  onFocus={(e) => {
                    e.target.style.outline = "none";
                    e.target.style.borderColor = "#1F6F50";
                    e.target.style.boxShadow = "0 0 0 4px rgba(31, 111, 80, 0.15), 0 0 20px 2px rgba(31, 111, 80, 0.2)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#D1D5DB";
                    e.target.style.boxShadow = "0 0 0 0px rgba(31, 111, 80, 0)";
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-[#0B3D2E]"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "15px",
                    fontWeight: "500",
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
                  className="w-full px-4 py-3 rounded border border-gray-300 transition-all duration-300"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "16px",
                  }}
                  onFocus={(e) => {
                    e.target.style.outline = "none";
                    e.target.style.borderColor = "#1F6F50";
                    e.target.style.boxShadow = "0 0 0 4px rgba(31, 111, 80, 0.15), 0 0 20px 2px rgba(31, 111, 80, 0.2)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#D1D5DB";
                    e.target.style.boxShadow = "0 0 0 0px rgba(31, 111, 80, 0)";
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="industry"
                  className="block mb-2 text-[#0B3D2E]"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  Industry
                </label>
                <select
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded border border-gray-300 transition-all duration-300"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "16px",
                  }}
                  onFocus={(e) => {
                    e.target.style.outline = "none";
                    e.target.style.borderColor = "#1F6F50";
                    e.target.style.boxShadow = "0 0 0 4px rgba(31, 111, 80, 0.15), 0 0 20px 2px rgba(31, 111, 80, 0.2)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#D1D5DB";
                    e.target.style.boxShadow = "0 0 0 0px rgba(31, 111, 80, 0)";
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

              <div>
                <label
                  htmlFor="service"
                  className="block mb-2 text-[#0B3D2E]"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  Service of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded border border-gray-300 transition-all duration-300"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "16px",
                  }}
                  onFocus={(e) => {
                    e.target.style.outline = "none";
                    e.target.style.borderColor = "#1F6F50";
                    e.target.style.boxShadow = "0 0 0 4px rgba(31, 111, 80, 0.15), 0 0 20px 2px rgba(31, 111, 80, 0.2)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#D1D5DB";
                    e.target.style.boxShadow = "0 0 0 0px rgba(31, 111, 80, 0)";
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

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-[#0B3D2E]"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  Message <span className="text-[#C8A951]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded border border-gray-300 resize-none transition-all duration-300"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "16px",
                  }}
                  onFocus={(e) => {
                    e.target.style.outline = "none";
                    e.target.style.borderColor = "#1F6F50";
                    e.target.style.boxShadow = "0 0 0 4px rgba(31, 111, 80, 0.15), 0 0 20px 2px rgba(31, 111, 80, 0.2)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#D1D5DB";
                    e.target.style.boxShadow = "0 0 0 0px rgba(31, 111, 80, 0)";
                  }}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#C8A951] text-[#0B3D2E] px-8 py-3 sm:py-4 rounded hover:bg-[#D4B562] transition-colors"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(16px, 2.5vw, 18px)",
                  fontWeight: "500",
                }}
              >
                Submit Inquiry
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}