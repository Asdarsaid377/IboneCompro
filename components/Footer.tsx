"use client";

import React, { useEffect, useRef, useState } from "react";
import { Globe, AtSign, PlaySquare, MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
	const footerRef = useRef<HTMLElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.1 },
		);

		if (footerRef.current) {
			observer.observe(footerRef.current);
		}

		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<footer
			ref={footerRef}
			className={`bg-background-dark border-t border-white/5 pt-20 pb-10 px-6 transition-opacity duration-1000 ${
				isVisible ? "opacity-100" : "opacity-0"
			}`}
			id="contact">
			<div className="max-w-7xl mx-auto">
				<div className="grid md:grid-cols-3 gap-12 mb-20">
					{/* Brand Info */}
					<div
						className={`space-y-6 transition-all duration-700 transform ${
							isVisible
								? "translate-y-0 opacity-100"
								: "translate-y-8 opacity-0"
						} delay-100`}>
						<div className="flex bg-white rounded-2xl p-1 w-fit items-center gap-3">
							<Image src="/logo.png" alt="Logo" width={150} height={150} />
						</div>
						<p className="text-slate-500 text-sm leading-relaxed">
							iBone Gadget adalah toko resmi yang menyediakan penjualan dan
							perbaikan smartphone premium. Spesialis dalam pemasangan dan
							penjualan iPhone sistem.
						</p>
						<div className="flex gap-4">
							<a
								className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:border-primary hover:text-primary hover:scale-110 transition-all shadow-sm hover:shadow-[0_0_15px_rgba(19,127,236,0.3)]"
								href="#"
								aria-label="Website">
								<Globe size={18} />
							</a>
							<a
								className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:border-primary hover:text-primary hover:scale-110 transition-all shadow-sm hover:shadow-[0_0_15px_rgba(19,127,236,0.3)]"
								href="#"
								aria-label="Email">
								<AtSign size={18} />
							</a>
							<a
								className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:border-primary hover:text-primary hover:scale-110 transition-all shadow-sm hover:shadow-[0_0_15px_rgba(19,127,236,0.3)]"
								href="#"
								aria-label="Video">
								<PlaySquare size={18} />
							</a>
						</div>
					</div>

					{/* Store Hours */}
					<div
						className={`transition-all duration-700 transform ${
							isVisible
								? "translate-y-0 opacity-100"
								: "translate-y-8 opacity-0"
						} delay-300`}>
						<h6 className="text-white font-bold mb-6 flex items-center gap-2">
							<span className="w-8 h-1 bg-primary rounded-full inline-block"></span>
							Jam Buka
						</h6>
						<ul className="space-y-4 text-slate-500 text-sm">
							<li className="flex justify-between items-center group cursor-default">
								<span className="group-hover:text-white transition-colors">
									Setiap Hari
								</span>
								<span className="text-slate-300 font-medium group-hover:text-primary transition-colors">
									09:00 - 20:00
								</span>
							</li>

							<li className="flex justify-between items-center group cursor-default">
								<span className="group-hover:text-white transition-colors">
									Hari Raya
								</span>
								<span className="bg-red-500/10 text-red-500 px-2 py-0.5 rounded text-xs font-bold border border-red-500/20">
									Closed
								</span>
							</li>
						</ul>
					</div>

					{/* Contact Us */}
					<div
						className={`transition-all duration-700 transform ${
							isVisible
								? "translate-y-0 opacity-100"
								: "translate-y-8 opacity-0"
						} delay-400`}>
						<h6 className="text-white font-bold mb-6 flex items-center gap-2">
							<span className="w-8 h-1 bg-primary rounded-full inline-block"></span>
							Contact Us
						</h6>
						<ul className="space-y-4 text-slate-500 text-sm">
							<li className="flex items-start gap-3 group">
								<MapPin
									size={18}
									className="text-primary mt-0.5 group-hover:scale-125 transition-transform"
								/>
								<span className="group-hover:text-white transition-colors">
									Jl Jokowi  No. 123,
									<br />
									Bone,Sulawesi Selatan
								</span>
							</li>
							<li className="flex items-center gap-3 group">
								<Phone
									size={18}
									className="text-primary group-hover:scale-125 transition-transform"
								/>
								<span className="group-hover:text-white transition-colors">
									+62 812-3456-7890
								</span>
							</li>
							<li className="flex items-center gap-3 group">
								<Mail
									size={18}
									className="text-primary group-hover:scale-125 transition-transform"
								/>
								<span className="group-hover:text-white transition-colors">
									mail@ibonegadget.com
								</span>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom Bar */}
				<div
					className={`border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 transition-all duration-1000 transform ${
						isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
					} delay-500`}>
					<p className="text-slate-500 text-xs">
						© {new Date().getFullYear()} iBone Gadget. All rights reserved.
						iPhone is a trademark of Apple Inc.
					</p>
					<div className="flex gap-8 text-slate-500 text-xs uppercase tracking-widest font-bold">
						<a className="hover:text-white transition-all" href="#">
							Privacy Policy
						</a>
						<a className="hover:text-white transition-all" href="#">
							Terms of Service
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
