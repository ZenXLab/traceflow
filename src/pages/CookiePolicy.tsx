import { useEffect } from "react";
import { EnhancedNavigation } from "@/components/traceflow/EnhancedNavigation";
import { Footer } from "@/components/traceflow/Footer";
import { ScrollReveal } from "@/components/traceflow/ScrollReveal";
import { Cookie } from "lucide-react";

const sections = [
  { title: "1. What Are Cookies", content: "Cookies are small text files stored on your device when you visit our website. They help us provide a better experience by remembering preferences, analyzing usage patterns, and enabling core functionality." },
  { title: "2. Essential Cookies", content: "These cookies are necessary for the website to function. They enable core features like authentication, security, and session management. You cannot opt out of essential cookies as they are required for the service to operate." },
  { title: "3. Analytics Cookies", content: "We use analytics cookies to understand how visitors interact with our website. This helps us improve our content and user experience. All analytics data is processed in aggregate and anonymized. We use TRACEFLOW's own analytics platform — no third-party trackers are involved." },
  { title: "4. Preference Cookies", content: "These cookies remember your settings and preferences, such as theme (light/dark mode), language, and dashboard configurations, so you don't have to set them each time you visit." },
  { title: "5. Managing Cookies", content: "You can control cookies through your browser settings. Most browsers allow you to block or delete cookies. Note that disabling essential cookies may prevent certain features from functioning properly." },
  { title: "6. Updates", content: "We may update this Cookie Policy periodically. Changes will be posted on this page with an updated effective date. Continued use of the website constitutes acceptance of the updated policy." },
];

const CookiePolicy = () => {
  useEffect(() => {
    document.title = "Cookie Policy — TRACEFLOW by OriginX Labs";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <EnhancedNavigation />
      <main className="pt-32 pb-20">
        <section className="container-wide px-4 lg:px-8 max-w-4xl mx-auto">
          <ScrollReveal direction="up" duration={600}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted/50 text-sm text-muted-foreground mb-6">
              <Cookie className="w-4 h-4 text-accent" />
              Legal
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Cookie Policy</h1>
            <p className="text-muted-foreground mb-2">Effective Date: January 1, 2026</p>
            <p className="text-muted-foreground mb-12">OriginX Labs Pvt. Ltd.</p>
          </ScrollReveal>

          <div className="space-y-10">
            {sections.map((s, i) => (
              <ScrollReveal key={s.title} direction="up" duration={500} delay={i * 60}>
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-3">{s.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{s.content}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
