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
      description:
        "Our most popular package for serious exam preparation.",
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
      description:
        "Bespoke tutoring tailored to your specific needs and pace.",
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
    <section id="packages" className="py-24 bg-cream-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-gold tracking-[0.2em] uppercase text-sm mb-3">
            Pricing
          </p>
          <h2 className="font-serif text-green-primary text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Course Packages
          </h2>
          <p className="text-text-dark/70 text-lg leading-relaxed">
            Flexible packages for O Level, A Level, and IELTS preparation.
            All packages include access to our curated resource library.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl ${
                pkg.highlight
                  ? "bg-green-primary text-cream shadow-lg scale-[1.02] border-2 border-gold"
                  : "bg-white border border-cream-dark/30 shadow-sm"
              }`}
            >
              {pkg.highlight && (
                <div className="absolute top-0 right-0 bg-gold text-green-dark text-xs font-bold px-4 py-1.5 rounded-bl-lg tracking-wider uppercase">
                  Most Popular
                </div>
              )}

              <div className="p-8">
                <h3
                  className={`font-serif text-xl font-semibold mb-1 ${
                    pkg.highlight ? "text-cream" : "text-green-dark"
                  }`}
                >
                  {pkg.name}
                </h3>
                <p
                  className={`text-sm mb-6 ${
                    pkg.highlight ? "text-cream/60" : "text-text-dark/50"
                  }`}
                >
                  {pkg.sessions} &middot; {pkg.description}
                </p>

                <div className="flex items-baseline gap-1 mb-8">
                  <span
                    className={`font-serif text-4xl font-bold ${
                      pkg.highlight ? "text-gold" : "text-green-primary"
                    }`}
                  >
                    {pkg.price}
                  </span>
                  <span
                    className={`text-sm ${
                      pkg.highlight ? "text-cream/50" : "text-text-dark/40"
                    }`}
                  >
                    {pkg.period}
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <svg
                        className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                          pkg.highlight ? "text-gold" : "text-green-primary"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span
                        className={
                          pkg.highlight ? "text-cream/80" : "text-text-dark/70"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/6589677685"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center font-semibold py-3.5 rounded transition-all duration-200 ${
                    pkg.highlight
                      ? "bg-gold hover:bg-gold-light text-green-dark"
                      : "bg-green-primary hover:bg-green-light text-cream"
                  }`}
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-text-dark/50 text-sm mt-10">
          All prices in SGD. Trial lesson available at $50 (waived upon
          sign-up). Contact us for sibling & group discounts.
        </p>
      </div>
    </section>
  );
}
