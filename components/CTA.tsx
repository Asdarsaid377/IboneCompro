export default function CTA() {
	return (
		<>
			<section className="py-20 px-6">
				<div className="max-w-7xl mx-auto">
					<div className="relative rounded-3xl overflow-hidden bg-primary px-8 py-16 text-center text-white">
						<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
						<div className="relative z-10 max-w-2xl mx-auto space-y-8">
							<h2 className="text-4xl md:text-5xl font-black">
								Ready to upgrade or repair your device?
							</h2>
							<p className="text-lg opacity-90">
								Visit us today or get an instant quote online. Your iPhone
								deserves the best care.
							</p>
							<div className="flex flex-wrap justify-center gap-4">
								<button className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-all shadow-xl">
									Get a Free Quote
								</button>
								<button className="bg-background-dark text-white px-8 py-4 rounded-xl font-bold hover:bg-black transition-all">
									Find Our Store
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
