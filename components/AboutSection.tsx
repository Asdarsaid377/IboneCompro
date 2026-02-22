"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function AboutSection() {
	const sectionRef = useRef<HTMLElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					setIsVisible(true);
					observer.disconnect(); // Only animate once
				}
			},
			{ threshold: 0.2 }, // Trigger when 20% of section is visible
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<section ref={sectionRef} className="py-24 px-6 bg-white/[0.02]" id="about">
			<div className="max-w-7xl mx-auto">
				<div className="grid lg:grid-cols-2 gap-20 items-center">
					{/* Images Grid (Left Side) */}
					<div className="grid grid-cols-2 gap-4">
						{/* Column 1 */}
						<div className="space-y-4">
							<div
								className={`aspect-square rounded-2xl overflow-hidden shadow-xl border border-white/5 transition-all duration-1000 transform ${
									isVisible
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-12"
								}`}>
								<Image
									alt="iPhone Technician at work"
									className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
									src="/heroimage.png" // Placeholder or mapped image
									width={400}
									height={400}
								/>
							</div>
							<div
								className={`aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-white/5 translate-x-4 transition-all duration-1000 delay-200 transform ${
									isVisible
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-12"
								}`}>
								<Image
									alt="iPhone Technician at work"
									className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
									src="/heroimage.png" // Placeholder or mapped image
									width={400}
									height={400}
								/>
							</div>
						</div>

						{/* Column 2 */}
						<div className="space-y-4 pt-12">
							<div
								className={`aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-white/5 transition-all duration-1000 delay-100 transform ${
									isVisible
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-12"
								}`}>
								<Image
									alt="iPhone Technician at work"
									className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
									src="/heroimage.png" // Placeholder or mapped image
									width={400}
									height={400}
								/>
							</div>
							<div
								className={`aspect-square rounded-2xl overflow-hidden shadow-xl border border-white/5 translate-x-4 transition-all duration-1000 delay-300 transform ${
									isVisible
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-12"
								}`}>
								<Image
									alt="iPhone Technician at work"
									className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
									src="/heroimage.png" // Placeholder or mapped image
									width={400}
									height={400}
								/>
							</div>
						</div>
					</div>

					{/* Text Content Grid (Right Side) */}
					<div className="space-y-8">
						<h3
							className={`text-4xl font-extrabold text-white transition-all duration-1000 delay-300 transform ${
								isVisible
									? "opacity-100 translate-x-0"
									: "opacity-0 translate-x-12"
							}`}>
							Tentang iBone Gadget
						</h3>

						<div
							className={`h-1.5 bg-primary rounded-full transition-all duration-1000 delay-500 ${
								isVisible ? "w-20" : "w-0"
							}`}></div>

						<p
							className={`text-lg text-slate-400 leading-relaxed transition-all duration-1000 delay-400 transform ${
								isVisible
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-8"
							}`}>
							Kami adalah spesialis dalam ekosistem iPhone, memberikan
							pengalaman yang lancar untuk pembelian, penjualan, dan perbaikan
							profesional. Misi kami adalah menggabungkan suku cadang asli
							berkualitas tinggi dengan keahlian teknis untuk memastikan
							perangkat Anda berkinerja terbaik.
						</p>

						<p
							className={`text-lg text-slate-400 leading-relaxed transition-all duration-1000 delay-500 transform ${
								isVisible
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-8"
							}`}>
							Dibangun berdasarkan kepercayaan pelanggan dan keunggulan teknis,
							kami telah memperbaiki lebih dari 10.000 perangkat dan membantu
							ribuan orang menemukan peningkatan ponsel cerdas baru yang
							sempurna.
						</p>

						<div
							className={`grid grid-cols-2 gap-8 pt-6 transition-all duration-1000 delay-600 transform ${
								isVisible
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-8"
							}`}>
							<div className="group border-l-2 border-primary/20 pl-4 hover:border-primary transition-colors">
								<h4 className="text-4xl font-black text-white group-hover:text-primary transition-colors">
									10<span className="text-primary">+</span>
								</h4>
								<p className="text-slate-500 font-medium group-hover:text-slate-300 transition-colors">
									Tahun Pengalaman
								</p>
							</div>
							<div className="group border-l-2 border-primary/20 pl-4 hover:border-primary transition-colors">
								<h4 className="text-4xl font-black text-white group-hover:text-primary transition-colors">
									100<span className="text-primary">%</span>
								</h4>
								<p className="text-slate-500 font-medium group-hover:text-slate-300 transition-colors">
									Garansi
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
