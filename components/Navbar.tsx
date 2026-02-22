"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const navLinks = [
		{ name: "Home", href: "#home" },
		{ name: "About", href: "#about" },
		{ name: "Services", href: "#services" },
		{ name: "Why Us", href: "#why-us" },
		{ name: "Contact", href: "#contact" },
	];

	return (
		<header className="fixed top-0 w-full z-50 border-b border-white/10 bg-background-dark/80 backdrop-blur-md">
			<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
				{/* Logo Section */}
				<div className="flex bg-white rounded-2xl p-1 items-center gap-3">
					<Image src="/logo.png" alt="Logo" width={150} height={150} />
				</div>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex items-center gap-10">
					{navLinks.map((link) => (
						<Link
							key={link.name}
							href={link.href}
							className="text-sm font-semibold text-white/90 hover:text-primary transition-colors">
							{link.name}
						</Link>
					))}
				</nav>

				{/* Desktop CTA Button */}
				<div className="hidden md:flex items-center gap-4">
					<button className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all transform active:scale-95">
						Repair Quote
					</button>
				</div>

				{/* Mobile Hamburger Button */}
				<div className="md:hidden flex items-center">
					<button
						onClick={toggleMenu}
						className="text-white hover:text-primary transition-colors focus:outline-none p-2"
						aria-label="Toggle Menu">
						<span className="material-symbols-outlined text-3xl">
							{isOpen ? <X /> : <Menu />}
						</span>
					</button>
				</div>
			</div>

			{/* Mobile Menu Dropdown */}
			<div
				className={`md:hidden absolute top-20 left-0 w-full bg-[#111111]/95 backdrop-blur-xl border-b border-white/10 overflow-hidden transition-all duration-300 ease-in-out ${
					isOpen ? "max-h-[500px] opacity-100 py-4" : "max-h-0 opacity-0 py-0"
				}`}>
				<div className="flex flex-col px-6 gap-4">
					{navLinks.map((link) => (
						<Link
							key={link.name}
							href={link.href}
							onClick={() => setIsOpen(false)}
							className="block text-base font-medium text-white/90 hover:text-primary transition-colors py-2">
							{link.name}
						</Link>
					))}
					<div className="pt-4 pb-2 border-t border-white/10">
						<button className="w-full bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg text-sm font-bold transition-all transform active:scale-95">
							Repair Quote
						</button>
					</div>
				</div>
			</div>
		</header>
	);
}
