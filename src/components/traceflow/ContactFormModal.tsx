import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { X, Send, Building2, User, Mail, Phone, MessageSquare, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  jobTitle: z.string().optional(),
  inquiryType: z.enum(["demo", "enterprise", "partnership", "support", "other"]),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormModalProps {
  trigger?: React.ReactNode;
  defaultInquiryType?: "demo" | "enterprise" | "partnership" | "support" | "other";
}

export function ContactFormModal({ trigger, defaultInquiryType = "demo" }: ContactFormModalProps) {
  const [open, setOpen] = useState(false);
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
    defaultValues: {
      inquiryType: defaultInquiryType,
    },
  });

  const inquiryType = watch("inquiryType");

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log("Form submitted:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
    
    toast({
      title: "Request Submitted!",
      description: "We'll get back to you within 24 hours.",
    });

    setTimeout(() => {
      setIsSuccess(false);
      setOpen(false);
      reset();
    }, 2000);
  };

  const inquiryTypes = [
    { value: "demo", label: "Request Demo" },
    { value: "enterprise", label: "Enterprise Inquiry" },
    { value: "partnership", label: "Partnership" },
    { value: "support", label: "Technical Support" },
    { value: "other", label: "Other" },
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="hero" size="lg" className="group">
            Request Demo
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] glass-strong border-border/50 p-0 overflow-hidden">
        {/* Header with gradient */}
        <div className="relative p-6 pb-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--azure)/0.15),transparent_50%)]" />
          <DialogHeader className="relative">
            <DialogTitle className="text-2xl font-bold flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/20">
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
              Get in Touch
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Fill out the form below and our team will reach out within 24 hours.
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="p-6 pt-4 space-y-5">
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center py-12 text-center animate-scale-in">
              <div className="w-16 h-16 rounded-full bg-aqua/20 flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-aqua" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
              <p className="text-muted-foreground">Your request has been submitted successfully.</p>
            </div>
          ) : (
            <>
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="flex items-center gap-2 text-sm">
                    <User className="w-3.5 h-3.5 text-muted-foreground" />
                    First Name *
                  </Label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    {...register("firstName")}
                    className={cn(
                      "bg-muted/30 border-border/50 focus:border-aqua/50 transition-all duration-300",
                      "hover:border-border focus:ring-2 focus:ring-aqua/20",
                      errors.firstName && "border-destructive focus:border-destructive"
                    )}
                  />
                  {errors.firstName && (
                    <p className="text-xs text-destructive animate-fade-in">{errors.firstName.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-sm">Last Name *</Label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    {...register("lastName")}
                    className={cn(
                      "bg-muted/30 border-border/50 focus:border-aqua/50 transition-all duration-300",
                      "hover:border-border focus:ring-2 focus:ring-aqua/20",
                      errors.lastName && "border-destructive focus:border-destructive"
                    )}
                  />
                  {errors.lastName && (
                    <p className="text-xs text-destructive animate-fade-in">{errors.lastName.message}</p>
                  )}
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2 text-sm">
                    <Mail className="w-3.5 h-3.5 text-muted-foreground" />
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    {...register("email")}
                    className={cn(
                      "bg-muted/30 border-border/50 focus:border-aqua/50 transition-all duration-300",
                      "hover:border-border focus:ring-2 focus:ring-aqua/20",
                      errors.email && "border-destructive focus:border-destructive"
                    )}
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive animate-fade-in">{errors.email.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2 text-sm">
                    <Phone className="w-3.5 h-3.5 text-muted-foreground" />
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    {...register("phone")}
                    className="bg-muted/30 border-border/50 focus:border-aqua/50 transition-all duration-300 hover:border-border focus:ring-2 focus:ring-aqua/20"
                  />
                </div>
              </div>

              {/* Company & Job Title */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company" className="flex items-center gap-2 text-sm">
                    <Building2 className="w-3.5 h-3.5 text-muted-foreground" />
                    Company *
                  </Label>
                  <Input
                    id="company"
                    placeholder="Acme Inc."
                    {...register("company")}
                    className={cn(
                      "bg-muted/30 border-border/50 focus:border-aqua/50 transition-all duration-300",
                      "hover:border-border focus:ring-2 focus:ring-aqua/20",
                      errors.company && "border-destructive focus:border-destructive"
                    )}
                  />
                  {errors.company && (
                    <p className="text-xs text-destructive animate-fade-in">{errors.company.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="jobTitle" className="text-sm">Job Title</Label>
                  <Input
                    id="jobTitle"
                    placeholder="Product Manager"
                    {...register("jobTitle")}
                    className="bg-muted/30 border-border/50 focus:border-aqua/50 transition-all duration-300 hover:border-border focus:ring-2 focus:ring-aqua/20"
                  />
                </div>
              </div>

              {/* Inquiry Type */}
              <div className="space-y-2">
                <Label className="text-sm">Inquiry Type *</Label>
                <Select
                  value={inquiryType}
                  onValueChange={(value) => setValue("inquiryType", value as ContactFormData["inquiryType"])}
                >
                  <SelectTrigger className="bg-muted/30 border-border/50 focus:border-aqua/50 hover:border-border transition-all duration-300">
                    <SelectValue placeholder="Select inquiry type" />
                  </SelectTrigger>
                  <SelectContent className="glass-strong border-border/50">
                    {inquiryTypes.map((type) => (
                      <SelectItem
                        key={type.value}
                        value={type.value}
                        className="cursor-pointer hover:bg-muted/50 focus:bg-muted/50"
                      >
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm">Message *</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your needs..."
                  rows={4}
                  {...register("message")}
                  className={cn(
                    "bg-muted/30 border-border/50 focus:border-aqua/50 transition-all duration-300",
                    "hover:border-border focus:ring-2 focus:ring-aqua/20 resize-none",
                    errors.message && "border-destructive focus:border-destructive"
                  )}
                />
                {errors.message && (
                  <p className="text-xs text-destructive animate-fade-in">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full group"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Submit Request
                  </>
                )}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                By submitting, you agree to our{" "}
                <a href="#" className="text-aqua hover:underline">Privacy Policy</a>
                {" "}and{" "}
                <a href="#" className="text-aqua hover:underline">Terms of Service</a>.
              </p>
            </>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
}
