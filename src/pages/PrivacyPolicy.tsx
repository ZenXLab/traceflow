import { useEffect } from "react";
import { EnhancedNavigation } from "@/components/traceflow/EnhancedNavigation";
import { Footer } from "@/components/traceflow/Footer";
import { ScrollReveal } from "@/components/traceflow/ScrollReveal";
import { Shield } from "lucide-react";

const sections = [
  { title: "1. Information We Collect", content: "We collect information you provide directly (name, email, company), usage data (session telemetry, feature usage), and technical data (IP address, browser type, device info). All data collection is governed by our Zero-Trust architecture ensuring PII tokenization at the edge." },
  { title: "2. How We Use Your Information", content: "We use collected information to provide, maintain, and improve TRACEFLOW services; to process transactions; to send service-related communications; to detect and prevent fraud; and to comply with legal obligations. We never sell personal data to third parties." },
  { title: "3. Data Security", content: "TRACEFLOW employs enterprise-grade security including AES-256 encryption at rest, TLS 1.3 in transit, Zero-Trust PII tokenization, SOC 2 Type II compliance, and regular penetration testing. Our infrastructure supports air-gapped deployments for maximum security." },
  { title: "4. Data Retention", content: "We retain personal data only as long as necessary for the purposes outlined in this policy. Session data retention is configurable per client (30-365 days). Upon account termination, all data is securely deleted within 90 days." },
  { title: "5. Your Rights", content: "You have the right to access, correct, delete, or port your personal data. You may also object to processing or request restriction. For GDPR, CCPA, and other regional privacy rights, contact our Data Protection Officer at privacy@traceflow.io." },
  { title: "6. International Transfers", content: "TRACEFLOW supports data residency in multiple regions (US, EU, APAC, India). Enterprise customers can configure data to remain within specific geographic boundaries. All cross-border transfers comply with applicable data protection frameworks." },
  { title: "7. Contact", content: "For privacy-related inquiries, contact OriginX Labs Pvt. Ltd. at privacy@traceflow.io. Our Data Protection Officer can be reached at dpo@traceflow.io." },
];

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy — TRACEFLOW by OriginX Labs";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <EnhancedNavigation />
      <main className="pt-32 pb-20">
        <section className="container-wide px-4 lg:px-8 max-w-4xl mx-auto">
          <ScrollReveal direction="up" duration={600}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted/50 text-sm text-muted-foreground mb-6">
              <Shield className="w-4 h-4 text-accent" />
              Legal
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground mb-2">Effective Date: January 1, 2026</p>
            <p className="text-muted-foreground mb-12">OriginX Labs Pvt. Ltd. ("we", "us", "TRACEFLOW")</p>
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

export default PrivacyPolicy;
