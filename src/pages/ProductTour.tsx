import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { 
  ArrowRight, 
  Play, 
  CheckCircle2, 
  Zap, 
  Shield, 
  BarChart3,
  Users,
  Workflow,
  Globe
} from "lucide-react";

const features = [
  { icon: Zap, label: "Lightning fast" },
  { icon: Shield, label: "Enterprise security" },
  { icon: BarChart3, label: "Advanced analytics" },
  { icon: Users, label: "Team collaboration" },
  { icon: Workflow, label: "Workflow automation" },
  { icon: Globe, label: "Global scale" },
];

const steps = [
  {
    number: "01",
    title: "Create your workspace",
    description: "Set up your workspace in seconds. Invite your team and get started right away.",
  },
  {
    number: "02",
    title: "Connect your tools",
    description: "Integrate with 100+ tools you already use. Everything syncs automatically.",
  },
  {
    number: "03",
    title: "Build your workflows",
    description: "Create powerful automations with our visual workflow builder. No coding required.",
  },
  {
    number: "04",
    title: "Scale with confidence",
    description: "As your team grows, builderz grows with you. Enterprise-ready from day one.",
  },
];

export default function ProductTour() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success("Welcome! Check your email to get started.");
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding" style={{ background: 'var(--gradient-hero)' }}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              See builderz in action
            </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Start your free 14-day trial today. No credit card required. Cancel anytime.
              </p>
              
              <form onSubmit={handleSubmit} className="flex gap-3 mb-6">
                <Input
                  type="email"
                  placeholder="Enter your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12"
                  required
                />
                <Button type="submit" variant="hero" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Starting..." : "Start Trial"}
                </Button>
              </form>

              <div className="flex flex-wrap gap-4">
                {features.slice(0, 3).map((feature) => (
                  <div key={feature.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <feature.icon className="w-4 h-4 text-accent" />
                    {feature.label}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl border border-border bg-card shadow-xl overflow-hidden">
                <div className="bg-muted/50 px-4 py-3 border-b border-border flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-destructive/50" />
                    <div className="w-3 h-3 rounded-full bg-accent/50" />
                    <div className="w-3 h-3 rounded-full bg-primary/50" />
                  </div>
                </div>
                <div className="aspect-video bg-muted/30 flex items-center justify-center">
                  <button className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Get started in minutes
            </h2>
            <p className="text-lg text-muted-foreground">
              Four simple steps to transform how your team works.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-border -translate-x-1/2" />
                )}
                <div className="text-5xl font-display font-bold text-primary/20 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-2xl bg-card border border-border aspect-video flex items-center justify-center">
              <button className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors">
                <Play className="w-6 h-6 text-primary-foreground ml-1" />
              </button>
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Watch the full demo
              </h2>
              <p className="text-muted-foreground mb-6">
                See how builderz can transform your team's productivity in this 5-minute walkthrough.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span className="text-foreground">Dashboard overview</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span className="text-foreground">Workflow automation</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span className="text-foreground">Team collaboration</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span className="text-foreground">Analytics & reporting</span>
                </li>
              </ul>
              <Button variant="outline" size="lg" asChild>
                <Link to="/features">
                  Explore All Features
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-muted mx-auto mb-6 flex items-center justify-center">
              <span className="text-2xl font-display font-bold text-muted-foreground">SC</span>
            </div>
            <blockquote className="text-2xl font-display text-foreground mb-6">
              "builderz reduced our deployment time by 80%. It's been a game-changer for our engineering team."
            </blockquote>
            <div className="text-muted-foreground">
              <span className="font-semibold text-foreground">Sarah Chen</span>
              <span className="mx-2">•</span>
              VP of Engineering at TechCorp
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
            Ready to get started?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join 10,000+ companies already using builderz. Start your free trial today.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              required
            />
            <Button type="submit" size="lg" variant="secondary" disabled={isSubmitting}>
              {isSubmitting ? "Starting..." : "Start Free Trial"}
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
