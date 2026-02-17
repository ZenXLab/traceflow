import { useEffect } from "react";
import { EnhancedNavigation } from "@/components/traceflow/EnhancedNavigation";
import { Footer } from "@/components/traceflow/Footer";
import { ScrollReveal } from "@/components/traceflow/ScrollReveal";
import { ShieldCheck } from "lucide-react";

const sections = [
  { title: "1. Scope", content: "This Data Processing Agreement (\"DPA\") applies to the processing of personal data by OriginX Labs Pvt. Ltd. (\"Processor\") on behalf of the Customer (\"Controller\") in connection with TRACEFLOW services. This DPA supplements and forms part of the Terms of Service." },
  { title: "2. Definitions", content: "\"Personal Data\" means any data relating to an identified or identifiable natural person captured through TRACEFLOW. \"Processing\" includes collection, storage, analysis, and deletion of Personal Data. \"Sub-processor\" means any third party engaged by OriginX Labs to process Personal Data." },
  { title: "3. Processing Instructions", content: "OriginX Labs processes Personal Data solely according to the Controller's documented instructions and the service agreement. We will not process data for any other purpose without prior written consent. TRACEFLOW's Zero-Trust pipeline ensures PII tokenization at the point of capture." },
  { title: "4. Security Measures", content: "We implement technical and organizational measures including: AES-256 encryption at rest, TLS 1.3 in transit, role-based access control (RBAC), SOC 2 Type II certified infrastructure, regular penetration testing, and incident response procedures with 24-hour notification." },
  { title: "5. Sub-processors", content: "We maintain a list of approved sub-processors. The Controller will be notified 30 days before engaging new sub-processors. For on-premise and air-gapped deployments, no sub-processors are involved as all processing occurs within the Controller's infrastructure." },
  { title: "6. Data Subject Rights", content: "We assist the Controller in fulfilling data subject requests (access, rectification, erasure, portability) through our administrative APIs and dashboard. Requests are processed within 72 hours." },
  { title: "7. Data Breach Notification", content: "In the event of a personal data breach, OriginX Labs will notify the Controller without undue delay and within 24 hours of becoming aware. The notification will include the nature of the breach, affected data categories, and remediation measures taken." },
  { title: "8. Data Return & Deletion", content: "Upon termination of services, OriginX Labs will return all Personal Data in a standard format and securely delete all copies within 90 days, unless retention is required by law. Certificates of deletion are available upon request." },
];

const DPA = () => {
  useEffect(() => {
    document.title = "Data Processing Agreement — TRACEFLOW by OriginX Labs";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <EnhancedNavigation />
      <main className="pt-32 pb-20">
        <section className="container-wide px-4 lg:px-8 max-w-4xl mx-auto">
          <ScrollReveal direction="up" duration={600}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted/50 text-sm text-muted-foreground mb-6">
              <ShieldCheck className="w-4 h-4 text-accent" />
              Legal
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Data Processing Agreement</h1>
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

export default DPA;
