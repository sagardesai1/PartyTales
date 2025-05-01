import LandingHero from "./components/LandingHero";
import Features from "./components/Features";
import TrustMessage from "./components/TrustMessage";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import GetStartedSteps from "./components/GetStartedSteps";
import AITransformationDemo from "./components/AITransformationDemo";
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pastel-pink/10">
      <main className="max-w-[1400px] mx-auto px-8 py-24">
        {/* Hero Section */}
        <LandingHero />

        {/* Trust Message Section */}
        <TrustMessage />

        {/* Features Section */}
        <Features />

        {/* AITransformationDemo Section */}
        <AITransformationDemo />

        {/* Get Started Steps Section */}
        <GetStartedSteps />

        {/* CTA Section */}
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
