import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ParallaxImageSection } from "./components/ParallaxImageSection";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { IndustriesSection } from "./components/IndustriesSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <HeroSection />
      
      <ParallaxImageSection
        imageUrl="https://images.unsplash.com/photo-1760530616123-ea7aef147888?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMHJhaW5mb3Jlc3QlMjBkZXRhaWwlMjBncmVlbiUyMGxlYXZlc3xlbnwxfHx8fDE3NzEzMzI4MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
        title="Preserving Natural Resources Through Responsible Compliance"
      />
      
      <AboutSection />
      
      <ParallaxImageSection
        imageUrl="https://images.unsplash.com/photo-1760947578595-24b740c82e6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmZhbGwlMjB0cm9waWNhbCUyMGp1bmdsZSUyMHNlcmVuZXxlbnwxfHx8fDE3NzEzMzI4MDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
        title="Environmental Assessments & Risk Management"
        subtitle="Ensuring operational integrity while protecting ecosystems."
      />
      
      <ServicesSection />
      
      <ParallaxImageSection
        imageUrl="https://images.unsplash.com/photo-1738735781778-662a7d0e306f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMGhvcml6b24lMjBtb3JuaW5nJTIwY2FsbSUyMGNvYXN0bGluZXxlbnwxfHx8fDE3NzEzMzI4MDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
        title="Supporting Sustainable Development"
      />
      
      <IndustriesSection />
      
      <ParallaxImageSection
        imageUrl="https://images.unsplash.com/photo-1746427052276-a29463e8c777?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXJweSUyMGVhZ2xlJTIwcGVyY2hlZCUyMHRyZWV8ZW58MXx8fHwxNzcxMzMyODA3fDA&ixlib=rb-4.1.0&q=80&w=1080"
        title="Protecting What Matters Most."
      />
      
      <ContactSection />
      
      <Footer />
    </div>
  );
}
