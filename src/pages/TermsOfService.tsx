import { useEffect } from "react";
import { EnhancedNavigation } from "@/components/traceflow/EnhancedNavigation";
import { Footer } from "@/components/traceflow/Footer";
import { ScrollReveal } from "@/components/traceflow/ScrollReveal";
import { FileText } from "lucide-react";

const sections = [
  { title: "1. Acceptance of Terms", content: "By accessing or using TRACEFLOW services provided by OriginX Labs Pvt. Ltd., you agree to be bound by these Terms of Service. If you are using the services on behalf of an organization, you represent that you have the authority to bind that organization." },
  { title: "2. Service Description", content: "TRACEFLOW is a Digital Cognition Infrastructure platform that provides session replay, behavioral analytics, AI-powered insights, and enterprise observability tools. Services are provided on a subscription basis with various tiers (Starter, Professional, Enterprise)." },
  { title: "3. Account Responsibilities", content: "You are responsible for maintaining the security of your account credentials, all activities under your account, and ensuring your use complies with applicable laws. You must notify us immediately of any unauthorized access." },
  { title: "4. Acceptable Use", content: "You agree not to: reverse-engineer the platform, use it for illegal surveillance, attempt to bypass security controls, exceed rate limits, or redistribute captured data without proper authorization and consent." },
  { title: "5. Data Ownership", content: "You retain full ownership of all data captured through TRACEFLOW. We process your data solely to provide the services. Upon termination, you may export your data within 30 days. We do not claim any intellectual property rights over your data." },
  { title: "6. Service Level Agreement", content: "TRACEFLOW commits to 99.95% uptime for Professional and Enterprise tiers. Scheduled maintenance windows are communicated 72 hours in advance. Credits are provided for SLA violations as detailed in your service agreement." },
  { title: "7. Limitation of Liability", content: "To the maximum extent permitted by law, OriginX Labs' total liability shall not exceed the fees paid in the 12 months preceding the claim. We are not liable for indirect, incidental, or consequential damages." },
  { title: "8. Governing Law", content: "These terms are governed by the laws of India. Any disputes shall be resolved through arbitration in Bangalore, India, under the rules of the Indian Arbitration and Conciliation Act." },
];

const TermsOfService = () => {
  useEffect(() => {
    document.title = "Terms of Service — TRACEFLOW by OriginX Labs";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <EnhancedNavigation />
      <main className="pt-32 pb-20">
        <section className="container-wide px-4 lg:px-8 max-w-4xl mx-auto">
          <ScrollReveal direction="up" duration={600}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted/50 text-sm text-muted-foreground mb-6">
              <FileText className="w-4 h-4 text-accent" />
              Legal
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
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

export default TermsOfService;
