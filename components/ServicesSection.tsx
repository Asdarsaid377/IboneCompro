"use client";

import React, { useEffect, useRef, useState } from "react";

import { ShoppingBag, Wrench, CheckCircle2, ArrowRight } from "lucide-react";

export default function ServicesSection() {
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
			{ threshold: 0.1 }, // Trigger slightly earlier
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<section
			ref={sectionRef}
			className="py-24 px-6 overflow-hidden"
			id="services">
			<div className="max-w-7xl mx-auto">
				{/* Header Section */}
				<div
					className={`text-center mb-16 space-y-4 transition-all duration-1000 transform ${
						isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
					}`}>
					<h3 className="text-4xl font-extrabold text-white">
						Layanan Premium Kami
					</h3>
					<p className="text-slate-400 max-w-2xl mx-auto">
						Semua yang Anda butuhkan untuk perjalanan iPhone Anda, dari membeli
						model terbaru hingga perbaikan micro-soldering ahli.
					</p>
				</div>

				{/* Services Grid */}
				<div className="grid md:grid-cols-2 gap-8">
					{/* Service 1: Buy & Sell */}
					<div
						className={`group relative bg-white/3 border border-white/10 rounded-3xl p-10 hover:border-primary/50 transition-all duration-700 overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_40px_-20px_rgba(19,127,236,0.2)] transform ${
							isVisible
								? "opacity-100 translate-x-0"
								: "opacity-0 -translate-x-12"
						}`}>
						{/* Background Accent */}
						<div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -z-10 group-hover:bg-primary/20 group-hover:scale-110 transition-transform duration-500"></div>

						<div className="flex flex-col h-full gap-6">
							<div className="text-primary group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 origin-left">
								<ShoppingBag size={48} strokeWidth={1.5} />
							</div>

							<h4 className="text-3xl font-bold text-white group-hover:text-primary transition-colors">
								Beli &amp; Jual
							</h4>
							<p className="text-slate-400 leading-relaxed">
								Mau naik level? Kami menawarkan berbagai pilihan iPhone baru
								pilihan iPhone baru dan pre-owned. Dapatkan nilai pasar terbaik
								dengan opsi tukar tambah instan kami.
							</p>

							<ul className="space-y-4 pt-4 grow">
								<li className="flex items-center gap-3 text-slate-300 group/item">
									<CheckCircle2
										size={20}
										className="text-primary group-hover/item:scale-125 transition-transform"
									/>
									<span className="group-hover/item:text-white transition-colors">
										Baru &amp; Pre-owned Inventory
									</span>
								</li>
								<li className="flex items-center gap-3 text-slate-300 group/item">
									<CheckCircle2
										size={20}
										className="text-primary group-hover/item:scale-125 transition-transform"
									/>
									<span className="group-hover/item:text-white transition-colors">
										Tukar Tambah Cash
									</span>
								</li>
								<li className="flex items-center gap-3 text-slate-300 group/item">
									<CheckCircle2
										size={20}
										className="text-primary group-hover/item:scale-125 transition-transform"
									/>
									<span className="group-hover/item:text-white transition-colors">
										Garansi Komprehensif
									</span>
								</li>
							</ul>

							<button className="mt-6 flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all w-fit">
								<span>Browse Inventory</span>
								<ArrowRight
									size={20}
									className="group-hover:translate-x-1 transition-transform"
								/>
							</button>
						</div>
					</div>

					{/* Service 2: Professional Repair */}
					<div
						className={`group relative bg-white/3 border border-white/10 rounded-3xl p-10 hover:border-primary/50 transition-all duration-700 delay-200 overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_40px_-20px_rgba(19,127,236,0.2)] transform ${
							isVisible
								? "opacity-100 translate-x-0"
								: "opacity-0 translate-x-12"
						}`}>
						{/* Background Accent */}
						<div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -z-10 group-hover:bg-primary/20 group-hover:scale-110 transition-transform duration-500"></div>

						<div className="flex flex-col h-full gap-6">
							<div className="text-primary group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500 origin-left">
								<Wrench size={48} strokeWidth={1.5} />
							</div>

							<h4 className="text-3xl font-bold text-white group-hover:text-primary transition-colors">
								Perbaikan Profesional
							</h4>
							<p className="text-slate-400 leading-relaxed">
								Teknisi ahli yang berspesialisasi dalam perangkat keras iPhone.
								Dari retak layar sampai masalah motherboard yang rumit, kami
								dapat memulihkan perangkat Anda seperti baru.
							</p>

							<ul className="space-y-4 pt-4 grow">
								<li className="flex items-center gap-3 text-slate-300 group/item">
									<CheckCircle2
										size={20}
										className="text-primary group-hover/item:scale-125 transition-transform"
									/>
									<span className="group-hover/item:text-white transition-colors">
										Ganti Layar &amp; Baterai
									</span>
								</li>
								<li className="flex items-center gap-3 text-slate-300 group/item">
									<CheckCircle2
										size={20}
										className="text-primary group-hover/item:scale-125 transition-transform"
									/>
									<span className="group-hover/item:text-white transition-colors">
										Motherboard Micro-soldering
									</span>
								</li>
								<li className="flex items-center gap-3 text-slate-300 group/item">
									<CheckCircle2
										size={20}
										className="text-primary group-hover/item:scale-125 transition-transform"
									/>
									<span className="group-hover/item:text-white transition-colors">
										Pulihkan Kerusakan Air
									</span>
								</li>
							</ul>

							<button className="mt-6 flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all w-fit">
								<span>Get Repair Quote</span>
								<ArrowRight
									size={20}
									className="group-hover:translate-x-1 transition-transform"
								/>
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
