import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact" className="bg-green-darker text-cream relative noise-overlay">
      <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Image src="/logo.png" alt="The Raffles English Studio" width={56} height={56} />
              <div>
                <p className="text-cream/40 text-[9px] tracking-[0.3em] uppercase font-light leading-none">The</p>
                <p className="text-cream font-serif text-xl font-bold leading-tight tracking-tight">Raffles</p>
                <p className="text-cream/50 text-[9px] tracking-[0.18em] uppercase font-light leading-none mt-0.5">English Studio</p>
              </div>
            </div>
            <p className="text-cream/30 text-base leading-relaxed font-light">
              Singapore&apos;s premier English tuition studio. Expert coaching for O Levels, A Levels, and IELTS examinations.
            </p>

            <div className="flex gap-3 mt-8">
              {[
                { label: "TikTok", href: "https://www.tiktok.com/@rafflesenglishstudio", icon: <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.74a8.18 8.18 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.17z" /> },
                { label: "Instagram", href: "https://www.instagram.com/rafflesenglishstudio", icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /> },
                { label: "Facebook", href: "https://www.facebook.com/rafflesenglishstudio", icon: <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /> },
                { label: "YouTube", href: "https://www.youtube.com/@rafflesenglishstudio", icon: <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /> },
              ].map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-sm bg-cream/[0.05] hover:bg-gold hover:text-green-darker text-cream/30 flex items-center justify-center transition-all duration-300" aria-label={social.label}>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">{social.icon}</svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-cream font-semibold mb-5 text-base tracking-tight">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: "#about", label: "About Us" },
                { href: "#courses", label: "Our Courses" },
                { href: "#packages", label: "Pricing" },
                { href: "#testimonials", label: "Testimonials" },
                { href: "#blog", label: "Blog" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-cream/30 hover:text-gold text-sm transition-colors duration-200 font-light">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-serif text-cream font-semibold mb-5 text-base tracking-tight">Our Courses</h4>
            <ul className="space-y-3">
              {["O Level English (1184)", "A Level General Paper (8881)", "IELTS Academic", "IELTS General Training", "Private Tutoring"].map((course) => (
                <li key={course}><span className="text-cream/30 text-sm font-light">{course}</span></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-cream font-semibold mb-5 text-base tracking-tight">Contact Us</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-sm bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <a href="https://wa.me/6589677685" target="_blank" rel="noopener noreferrer" className="text-cream/50 hover:text-gold text-sm transition-colors font-light">+65 8967 7685</a>
                  <p className="text-cream/20 text-xs font-light">WhatsApp available</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-sm bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <a href="mailto:hello@rafflesenglishstudio.com" className="text-cream/50 hover:text-gold text-sm transition-colors font-light">hello@rafflesenglishstudio.com</a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-sm bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <span className="text-cream/50 text-sm font-light">Singapore</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/[0.06] py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream/20 text-xs font-light">&copy; {new Date().getFullYear()} The Raffles English Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-cream/20 hover:text-cream/40 text-xs transition-colors font-light">Privacy Policy</a>
            <a href="#" className="text-cream/20 hover:text-cream/40 text-xs transition-colors font-light">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
