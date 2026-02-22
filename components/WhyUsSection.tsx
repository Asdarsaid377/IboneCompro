"use client";

import React, { useEffect, useRef, useState } from "react";
import { Zap, ShieldCheck, Banknote, CheckCircle } from "lucide-react";

export default function WhyUsSection() {
	const sectionRef = useRef<HTMLElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.2 }, // Trigger when 20% visible
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => {
			observer.disconnect();
		};
	}, []);

	const features = [
		{
			icon: <Zap size={32} strokeWidth={1.5} />,
			title: "Layanan Cepat",
			description:
				"Sebagian besar perbaikan selesai dalam waktu 60 menit sambil menunggu.",
			delay: "delay-100",
		},
		{
			icon: <ShieldCheck size={32} strokeWidth={1.5} />,
			title: "Original Part",
			description:
				"Kami hanya menggunakan komponen asli atau grade-A yang berkualitas tinggi.",
			delay: "delay-200",
		},
		{
			icon: <Banknote size={32} strokeWidth={1.5} />,
			title: "Harga yang kompetitif",
			description:
				"Nilai pasar terbaik untuk penjualan dan perbaikan yang terjangkau.",
			delay: "delay-300",
		},
		{
			icon: <CheckCircle size={32} strokeWidth={1.5} />,
			title: "Garansi Komprehensif",
			description:
				"Garansi hingga 6 bulan untuk semua suku cadang dan layanan tenaga kerja.",
			delay: "delay-400",
		},
	];

	return (
		<section ref={sectionRef} className="py-24 px-6 bg-primary/5" id="why-us">
			<div className="max-w-7xl mx-auto">
				<div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-8">
					{features.map((feature, index) => (
						<div
							key={index}
							className={`text-center space-y-4 group transition-all duration-700 transform ${
								isVisible
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-8"
							} ${feature.delay}`}>
							<div className="mx-auto w-20 h-20 rounded-full bg-white/5 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(19,127,236,0.3)] transition-all duration-500">
								<div className="text-primary group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
									{feature.icon}
								</div>
							</div>

							<h5 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
								{feature.title}
							</h5>

							<p className="text-slate-500 text-sm group-hover:text-slate-400 transition-colors">
								{feature.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
