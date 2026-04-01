import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { EnhancedNavigation } from "@/components/traceflow/EnhancedNavigation";
import { Footer } from "@/components/traceflow/Footer";
import { ScrollReveal } from "@/components/traceflow/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import {
  Send, Building2, User, Mail, Phone, MapPin, Clock, Globe,
  MessageSquare, Loader2, CheckCircle, Headphones, Presentation, Briefcase
} from "lucide-react";

const contactSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters").max(50),
  lastName: z.string().min(2, "Last name must be at least 2 characters").max(50),
  email: z.string().email("Please enter a valid email address").max(255),
  phone: z.string().optional(),
  company: z.string().min(2, "Company name must be at least 2 characters").max(100),
  jobTitle: z.string().optional(),
  inquiryType: z.enum(["demo", "sales", "support", "partnership", "other"]),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactCards = [
  {
    icon: Presentation,
    title: "Request a Demo",
    description: "See TRACEFLOW in action with a personalized walkthrough tailored to your industry.",
    color: "from-azure to-aqua",
  },
  {
    icon: Briefcase,
    title: "Sales Inquiries",
    description: "Discuss enterprise licensing, custom deployments, and volume pricing.",
    color: "from-aqua to-accent",
  },
  {
    icon: Headphones,
    title: "Technical Support",
    description: "Get help from our engineering team for integration, troubleshooting, and optimization.",
    color: "from-accent to-azure",
  },
];

const officeInfo = [
  { icon: MapPin, label: "Headquarters", value: "India" },
  { icon: Mail, label: "Email", value: "hello@traceflow.io" },
  { icon: Clock, label: "Response Time", value: "Within 24 hours" },
  { icon: Globe, label: "Global Support", value: "24/7 Available" },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { inquiryType: "demo" },
  });

  const inquiryType = watch("inquiryType");

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Contact form submitted:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
    toast({ title: "Request Submitted!", description: "We'll get back to you within 24 hours." });
    setTimeout(() => {
      setIsSuccess(false);
      reset();
    }, 3000);
  };

  const inputClass = "bg-muted/30 border-border/50 focus:border-aqua/50 transition-all duration-300 hover:border-border focus:ring-2 focus:ring-aqua/20";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <EnhancedNavigation />

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-azure/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-aqua/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
        <div className="container-wide px-4 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-azure/10 border border-azure/20 text-azure text-sm font-medium mb-6">
                <MessageSquare className="w-4 h-4" />
                Get in Touch
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Let's Build the Future of{" "}
                <span className="gradient-text">Digital Intelligence</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Whether you're exploring TRACEFLOW for the first time or need enterprise support,
                our team is ready to help you transform your digital experience strategy.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="pb-16">
        <div className="container-wide px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {contactCards.map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 0.1}>
                <div className="group p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-azure/30 transition-all duration-500 hover:shadow-lg hover:shadow-azure/5">
                  <div className={cn("w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center mb-4 group-hover:scale-110 transition-transform", card.color)}>
                    <card.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                  <p className="text-sm text-muted-foreground">{card.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="pb-24">
        <div className="container-wide px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="p-8 rounded-2xl bg-card/50 border border-border/50">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

                  {isSuccess ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center animate-scale-in">
                      <div className="w-20 h-20 rounded-full bg-aqua/20 flex items-center justify-center mb-6">
                        <CheckCircle className="w-10 h-10 text-aqua" />
                      </div>
                      <h3 className="text-2xl font-semibold mb-2">Thank You!</h3>
                      <p className="text-muted-foreground">Your request has been submitted. We'll respond within 24 hours.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName" className="flex items-center gap-2 text-sm">
                            <User className="w-3.5 h-3.5 text-muted-foreground" /> First Name *
                          </Label>
                          <Input id="firstName" placeholder="John" {...register("firstName")} className={cn(inputClass, errors.firstName && "border-destructive")} />
                          {errors.firstName && <p className="text-xs text-destructive">{errors.firstName.message}</p>}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName" className="text-sm">Last Name *</Label>
                          <Input id="lastName" placeholder="Doe" {...register("lastName")} className={cn(inputClass, errors.lastName && "border-destructive")} />
                          {errors.lastName && <p className="text-xs text-destructive">{errors.lastName.message}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email" className="flex items-center gap-2 text-sm">
                            <Mail className="w-3.5 h-3.5 text-muted-foreground" /> Email *
                          </Label>
                          <Input id="email" type="email" placeholder="john@company.com" {...register("email")} className={cn(inputClass, errors.email && "border-destructive")} />
                          {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="flex items-center gap-2 text-sm">
                            <Phone className="w-3.5 h-3.5 text-muted-foreground" /> Phone
                          </Label>
                          <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" {...register("phone")} className={inputClass} />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="company" className="flex items-center gap-2 text-sm">
                            <Building2 className="w-3.5 h-3.5 text-muted-foreground" /> Company *
                          </Label>
                          <Input id="company" placeholder="Acme Inc." {...register("company")} className={cn(inputClass, errors.company && "border-destructive")} />
                          {errors.company && <p className="text-xs text-destructive">{errors.company.message}</p>}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="jobTitle" className="text-sm">Job Title</Label>
                          <Input id="jobTitle" placeholder="Product Manager" {...register("jobTitle")} className={inputClass} />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-sm">Inquiry Type *</Label>
                        <Select value={inquiryType} onValueChange={(v) => setValue("inquiryType", v as ContactFormData["inquiryType"])}>
                          <SelectTrigger className={inputClass}>
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent className="bg-card border-border/50">
                            <SelectItem value="demo">Request Demo</SelectItem>
                            <SelectItem value="sales">Sales Inquiry</SelectItem>
                            <SelectItem value="support">Technical Support</SelectItem>
                            <SelectItem value="partnership">Partnership</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-sm">Message *</Label>
                        <Textarea id="message" placeholder="Tell us about your needs..." rows={5} {...register("message")} className={cn(inputClass, "resize-none", errors.message && "border-destructive")} />
                        {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
                      </div>

                      <Button type="submit" variant="hero" size="lg" className="w-full group" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Submitting...</>
                        ) : (
                          <><Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" /> Submit Request</>
                        )}
                      </Button>

                      <p className="text-xs text-center text-muted-foreground">
                        By submitting, you agree to our{" "}
                        <a href="/privacy" className="text-aqua hover:underline">Privacy Policy</a>
                        {" "}and{" "}
                        <a href="/terms" className="text-aqua hover:underline">Terms of Service</a>.
                      </p>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>

            {/* Info Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <ScrollReveal delay={0.2}>
                <div className="p-6 rounded-2xl bg-card/50 border border-border/50">
                  <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    {officeInfo.map((info) => (
                      <div key={info.label} className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-azure/10 flex items-center justify-center shrink-0">
                          <info.icon className="w-5 h-5 text-azure" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{info.label}</p>
                          <p className="font-medium">{info.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-azure/10 to-aqua/10 border border-azure/20">
                  <h3 className="text-lg font-semibold mb-3">Enterprise Ready</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Need a custom deployment? TRACEFLOW supports SaaS, Hybrid, On-Premise, and Air-Gapped environments.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["SaaS", "Hybrid", "On-Prem", "Air-Gapped"].map((mode) => (
                      <span key={mode} className="px-3 py-1 text-xs font-medium rounded-full bg-azure/20 text-azure border border-azure/30">
                        {mode}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div className="p-6 rounded-2xl bg-card/50 border border-border/50">
                  <h3 className="text-lg font-semibold mb-3">SLA Guarantee</h3>
                  <div className="space-y-3">
                    {[
                      { label: "Uptime", value: "99.99%" },
                      { label: "Response Time", value: "< 24hrs" },
                      { label: "Critical Issues", value: "< 1hr" },
                    ].map((sla) => (
                      <div key={sla.label} className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">{sla.label}</span>
                        <span className="text-sm font-semibold text-aqua">{sla.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}