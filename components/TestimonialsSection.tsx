"use client";

import React, { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
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
			{ threshold: 0.1 }, // Trigger when 10% visible
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => {
			observer.disconnect();
		};
	}, []);

	const testimonials = [
		{
			text: '"Pengalaman luar biasa! Mereka memperbaiki layar iPhone 14 Pro yang rusak dalam kurun waktu kurang dari 45 menit. Kualitasnya sama dengan asli. Sangat direkomendasikan!"',
			initials: "JD",
			name: "Joko Widodo",
			role: "Customer Perbaikan",
			delay: "delay-100",
		},
		{
			text: '"Saya menukar ponsel saya yang lama dan mendapatkan harga yang bagus. Prosesnya jauh lebih transparan dan lebih cepat daripada menjualnya secara online. Saya cinta ponsel iPhone 15 saya baru!"',
			initials: "SM",
			name: "Megawati",
			role: "Customer Tukar Tambah",
			delay: "delay-200",
		},
		{
			text: '"Profesional dan jujur. Mereka memperbaiki motherboard yang tidak mungkin untuk perbaikan oleh toko lain. iBone Gadget adalah true tech wizards."',
			initials: "RL",
			name: "Bahlil Lahadalia",
			role: "Teknisi",
			delay: "delay-300",
		},
	];

	return (
		<section ref={sectionRef} className="py-24 px-6 relative overflow-hidden">
			<div className="max-w-7xl mx-auto relative z-10">
				{/* Header Content */}
				<div
					className={`text-center mb-16 space-y-4 transition-all duration-1000 transform ${
						isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
					}`}>
					<h3 className="text-4xl font-extrabold text-white">
						Apa yang pelanggan kami katakan
					</h3>
					<div className="flex justify-center gap-1">
						{[1, 2, 3, 4, 5].map((star) => (
							<Star
								key={star}
								className="text-yellow-500 fill-yellow-500 animate-[pulse_3s_ease-in-out_infinite]"
								size={24}
								style={{ animationDelay: `${star * 200}ms` }}
							/>
						))}
					</div>
				</div>

				{/* Testimonials Grid */}
				<div className="grid md:grid-cols-3 gap-8">
					{testimonials.map((testimonial, index) => (
						<div
							key={index}
							className={`bg-white/2 border border-white/5 p-8 rounded-2xl relative overflow-hidden group hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_-15px_rgba(19,127,236,0.3)] transform ${
								isVisible
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-12"
							} ${testimonial.delay}`}>
							{/* Quote Icon Background */}
							<span className="absolute -top-4 -right-2 text-8xl text-white/5 font-serif leading-none group-hover:text-primary/5 transition-colors duration-500 select-none">
								"
							</span>

							<div className="space-y-6 relative z-10 h-full flex flex-col justify-between">
								<p className="text-slate-400 font-light italic leading-relaxed">
									{testimonial.text}
								</p>

								<div className="flex items-center gap-4 pt-4 border-t border-white/10 group-hover:border-primary/20 transition-colors">
									<div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center font-bold text-white group-hover:bg-primary group-hover:scale-110 transition-all duration-300 shadow-inner">
										{testimonial.initials}
									</div>
									<div>
										<p className="text-white font-bold">{testimonial.name}</p>
										<p className="text-primary text-xs uppercase font-bold tracking-tighter">
											{testimonial.role}
										</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
