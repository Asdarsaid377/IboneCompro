import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<main>
				<Navbar />
				<HeroSection />
				<AboutSection />
				<ServicesSection />
				<WhyUsSection />
				<TestimonialsSection />
				<CTA />
				<Footer />
			</main>
		</>
	);
}
