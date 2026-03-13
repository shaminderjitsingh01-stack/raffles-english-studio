export default function Packages() {
  const packages = [
    {
      name: "Starter",
      price: "$280",
      period: "/month",
      sessions: "4 sessions",
      description: "Perfect for students who need weekly guided practice.",
      features: [
        "4 group sessions per month (1.5h each)",
        "Class size max 8 students",
        "Printed course materials",
        "Homework review & feedback",
        "WhatsApp support (office hours)",
      ],
      highlight: false,
    },
    {
      name: "Intensive",
      price: "$480",
      period: "/month",
      sessions: "8 sessions",
      description: "Our most popular package for serious exam preparation.",
      features: [
        "8 group sessions per month (1.5h each)",
        "Class size max 8 students",
        "Full course material set",
        "Essay marking with detailed feedback",
        "Mock exams & timed practice",
        "WhatsApp support (priority)",
        "Progress reports for parents",
      ],
      highlight: true,
    },
    {
      name: "Private",
      price: "$120",
      period: "/session",
      sessions: "1-on-1",
      description: "Bespoke tutoring tailored to your specific needs and pace.",
      features: [
        "1-on-1 private sessions (1.5h each)",
        "Fully customised curriculum",
        "Flexible scheduling",
        "Personalised study plan",
        "Essay marking (unlimited)",
        "24/7 WhatsApp support",
        "Parent-teacher conferences",
      ],
      highlight: false,
    },
  ];

  return (
    <section id="packages" className="relative py-28 bg-cream-light overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-green-primary/[0.02] rounded-full blur-[80px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-gold/[0.03] rounded-full blur-[60px] -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center max-w-3xl mx-auto mb-20">
          <p className="text-gold tracking-[0.3em] uppercase text-xs font-medium mb-4">
            Pricing
          </p>
          <h2 className="font-serif text-green-primary text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Course Packages
          </h2>
          <div className="premium-divider mx-auto mb-6" />
          <p className="text-text-dark/60 text-base leading-relaxed font-light">
            Flexible packages for O Level, A Level, and IELTS preparation.
            All packages include access to our curated resource library.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 items-start">
          {packages.map((pkg, i) => (
            <div
              key={pkg.name}
              className={`reveal relative rounded-sm overflow-hidden transition-all duration-500 ${
                pkg.highlight
                  ? "bg-green-darker text-cream shadow-2xl shadow-green-dark/20 lg:scale-105 z-10"
                  : "bg-white shadow-sm hover:shadow-lg border border-cream-dark/20"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Highlight accent */}
              {pkg.highlight && (
                <>
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-gold text-green-darker text-[10px] font-bold px-3 py-1.5 rounded-sm tracking-wider uppercase">
                      Most Popular
                    </span>
                  </div>
                  <div className="absolute inset-0 noise-overlay" />
                </>
              )}

              <div className="relative p-8 lg:p-10">
                <h3 className={`font-serif text-xl font-semibold mb-1 tracking-tight ${pkg.highlight ? "text-cream" : "text-green-dark"}`}>
                  {pkg.name}
                </h3>
                <p className={`text-xs mb-8 font-light ${pkg.highlight ? "text-cream/40" : "text-text-dark/40"}`}>
                  {pkg.sessions} &middot; {pkg.description}
                </p>

                <div className="flex items-baseline gap-1 mb-10">
                  <span className={`font-serif text-5xl font-bold tracking-tight ${pkg.highlight ? "text-gold" : "text-green-primary"}`}>
                    {pkg.price}
                  </span>
                  <span className={`text-sm font-light ${pkg.highlight ? "text-cream/40" : "text-text-dark/40"}`}>
                    {pkg.period}
                  </span>
                </div>

                <ul className="space-y-4 mb-10">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <svg className={`w-4 h-4 mt-0.5 flex-shrink-0 ${pkg.highlight ? "text-gold" : "text-green-primary"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={`font-light ${pkg.highlight ? "text-cream/70" : "text-text-dark/60"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/6589677685"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center font-medium py-4 rounded-sm transition-all duration-300 text-sm tracking-wide ${
                    pkg.highlight
                      ? "bg-gold hover:bg-gold-light text-green-darker hover:shadow-[0_0_30px_rgba(196,169,98,0.2)]"
                      : "bg-green-primary hover:bg-green-light text-cream"
                  }`}
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="reveal text-center text-text-dark/40 text-xs mt-12 font-light">
          All prices in SGD. Trial lesson available at $50 (waived upon
          sign-up). Contact us for sibling & group discounts.
        </p>
      </div>
    </section>
  );
}
