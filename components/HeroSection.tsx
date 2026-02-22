"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCheck } from "lucide-react";

export default function HeroSection() {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	return (
		<section
			className="relative pt-32 pb-20 px-6 overflow-hidden min-h-screen flex items-center bg-background-dark"
			id="home">
			{/* Background Orbs */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 opacity-20 pointer-events-none">
				<div
					className={`absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-[120px] transition-all duration-[2000ms] ${
						isMounted ? "opacity-100 scale-100" : "opacity-0 scale-50"
					}`}></div>
				<div
					className={`absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/40 rounded-full blur-[120px] transition-all duration-[2000ms] delay-500 ${
						isMounted ? "opacity-100 scale-100" : "opacity-0 scale-50"
					}`}></div>
			</div>

			<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
				{/* Text Content */}
				<div className="space-y-8">
					<div
						className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase transition-all duration-1000 transform ${
							isMounted
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-8"
						}`}>
						<span className="relative flex h-2 w-2">
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
							<span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
						</span>
						Certified Apple Specialist
					</div>

					<h2
						className={`text-5xl md:text-7xl font-black leading-tight text-white transition-all duration-1000 delay-150 transform ${
							isMounted
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-8"
						}`}>
						iBone Gadget: Your Trusted{" "}
						<span className="text-primary relative inline-block">
							iPhone
							{/* Subtle underline decoration */}
							<span
								className={`absolute -bottom-1 left-0 h-2 bg-primary/30 rounded-full transition-all duration-1000 delay-700 ${isMounted ? "w-full" : "w-0"}`}></span>
						</span>{" "}
						Partner
					</h2>

					<p
						className={`text-lg text-slate-400 max-w-lg leading-relaxed transition-all duration-1000 delay-300 transform ${
							isMounted
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-8"
						}`}>
						Rasakan layanan perbaikan ritel dan ahli premium yang dirancang
						khusus iPhone Anda. Perawatan perangkat yang cepat, andal, dan
						profesional untuk perangkat yang kamu cinta.
					</p>

					<div
						className={`flex flex-wrap gap-4 pt-4 transition-all duration-1000 delay-500 transform ${
							isMounted
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-8"
						}`}>
						<button className="bg-primary text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:shadow-[0_0_20px_rgba(188,33,51,0.6)] hover:-translate-y-1 transition-all active:scale-95">
							Explore Our Services
							<span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
								<ArrowRight />
							</span>
						</button>
						<button className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 hover:-translate-y-1 transition-all active:scale-95">
							View Inventory
						</button>
					</div>
				</div>

				{/* Image Content */}
				<div
					className={`relative group transition-all duration-1000 delay-300 transform ${
						isMounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
					}`}>
					<div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/40 transition-all duration-700"></div>

					<div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 transform rotate-2 group-hover:rotate-0 transition-transform duration-700 hover:scale-[1.02]">
						<Image
							alt="Modern iPhone 15 Pro on a desk"
							className="w-full h-full object-cover aspect-[4/5] hover:scale-105 transition-transform duration-1000"
							src="/heroimage.png"
							width={600}
							height={750}
							priority
						/>
					</div>

					{/* Floating Element Demo */}
					<div
						className={`absolute -bottom-6 -left-6 bg-[#111] border border-white/10 rounded-2xl p-4 flex items-center gap-4 shadow-xl transition-all duration-[1500ms] delay-1000 transform ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} animate-[bounce_4s_infinite_ease-in-out_2s]`}>
						<div className="bg-green-500/20 p-2 rounded-full">
							<span className="material-symbols-outlined text-green-500">
								<CheckCheck />
							</span>
						</div>
						<div>
							<p className="text-white text-sm font-bold">100% Garansi</p>
							<p className="text-slate-400 text-xs">Apple Parts</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
