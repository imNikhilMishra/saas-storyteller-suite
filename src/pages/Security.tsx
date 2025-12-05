import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Lock, 
  Key, 
  Eye, 
  Server, 
  FileCheck, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "All data is encrypted in transit (TLS 1.3) and at rest (AES-256). Your information is secure at every step.",
  },
  {
    icon: Key,
    title: "SSO & SAML",
    description: "Enterprise-grade single sign-on with support for SAML 2.0, OIDC, and all major identity providers.",
  },
  {
    icon: Eye,
    title: "Audit Logs",
    description: "Comprehensive audit trail of all actions. Know who did what and when with detailed logging.",
  },
  {
    icon: Server,
    title: "Data Residency",
    description: "Choose where your data lives. Multi-region deployment with data residency controls.",
  },
  {
    icon: FileCheck,
    title: "Compliance Ready",
    description: "SOC 2 Type II, GDPR, HIPAA, and ISO 27001 compliant. Built for regulated industries.",
  },
  {
    icon: Shield,
    title: "Penetration Testing",
    description: "Regular third-party penetration testing and vulnerability assessments.",
  },
];

const certifications = [
  { name: "SOC 2 Type II", description: "Annual audits by independent third parties" },
  { name: "GDPR Compliant", description: "Full compliance with EU data protection" },
  { name: "HIPAA Ready", description: "BAA available for healthcare customers" },
  { name: "ISO 27001", description: "International security standard certification" },
];

const practices = [
  "Secure development lifecycle (SDLC)",
  "Regular security training for all employees",
  "Background checks for all team members",
  "Incident response plan and 24/7 monitoring",
  "Bug bounty program with responsible disclosure",
  "Regular backup and disaster recovery testing",
  "Vendor security assessments",
  "Physical security at all facilities",
];

export default function Security() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding" style={{ background: 'var(--gradient-hero)' }}>
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Security & Trust
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Your security is our top priority. Learn about the measures we take to protect your data and maintain your trust.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Request Security Report
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Enterprise-Grade Security
            </h2>
            <p className="text-lg text-muted-foreground">
              Built from the ground up with security in mind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature) => (
              <div key={feature.title} className="card-elevated p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Compliance & Certifications
            </h2>
            <p className="text-lg text-muted-foreground">
              Third-party verified security and compliance standards.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert) => (
              <div key={cert.name} className="card-elevated p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{cert.name}</h3>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Practices */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Our Security Practices
              </h2>
              <p className="text-muted-foreground mb-8">
                Security isn't just about technology—it's about culture. We implement comprehensive practices across our entire organization.
              </p>
              <ul className="space-y-3">
                {practices.map((practice) => (
                  <li key={practice} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{practice}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-muted/50 border border-border aspect-square flex items-center justify-center">
              <Shield className="w-24 h-24 text-primary/20" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
            Have security questions?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Our security team is happy to answer any questions and provide additional documentation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Contact Security Team</Link>
            </Button>
            <Button size="lg" variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link to="/documentation">View Documentation</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
