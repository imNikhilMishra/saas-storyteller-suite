import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  Globe, 
  Workflow,
  CheckCircle2,
  Star
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Deploy in seconds with our optimized infrastructure built for speed.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 Type II certified with end-to-end encryption and SSO.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Real-time insights and custom dashboards to drive decisions.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Built for teams with real-time editing and role-based access.",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Multi-region deployment with 99.99% uptime guarantee.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Automate repetitive tasks and integrate with 100+ tools.",
  },
];

const testimonials = [
  {
    quote: "builderz transformed how our team works. We've cut deployment time by 80% and improved collaboration across all departments.",
    author: "Sarah Chen",
    role: "VP of Engineering",
    company: "TechCorp",
  },
  {
    quote: "The best investment we've made this year. The ROI was visible within the first month of implementation.",
    author: "Michael Roberts",
    role: "CTO",
    company: "ScaleUp Inc",
  },
  {
    quote: "Finally, a platform that understands enterprise needs. Security, scalability, and simplicity all in one.",
    author: "Emily Watson",
    role: "Director of IT",
    company: "Enterprise Co",
  },
];

const stats = [
  { value: "10K+", label: "Companies" },
  { value: "50M+", label: "Users" },
  { value: "99.99%", label: "Uptime" },
  { value: "150+", label: "Countries" },
];

const logos = ["Acme", "TechCorp", "Innovate", "GlobalSoft", "NextGen", "FutureAI"];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
        <div className="container-custom section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-up">
              <Zap className="w-4 h-4" />
              <span>New: AI-powered workflows are here</span>
              <ArrowRight className="w-4 h-4" />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 animate-fade-up delay-100">
              The platform that powers{" "}
              <span className="text-gradient">modern teams</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-up delay-200">
              builderz brings together everything your team needs to build, ship, and scale products faster than ever before.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
              <Button variant="hero" size="xl" asChild>
                <Link to="/product-tour">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/product-tour">Watch Demo</Link>
              </Button>
            </div>

            <p className="mt-6 text-sm text-muted-foreground animate-fade-up delay-400">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>

          {/* Hero Visual */}
          <div className="mt-16 relative animate-fade-up delay-500">
            <div className="relative mx-auto max-w-5xl">
              <div className="rounded-2xl border border-border bg-card shadow-xl overflow-hidden">
                <div className="bg-muted/50 px-4 py-3 border-b border-border flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-destructive/50" />
                    <div className="w-3 h-3 rounded-full bg-accent/50" />
                    <div className="w-3 h-3 rounded-full bg-primary/50" />
                  </div>
                </div>
                <div className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 min-h-[300px] flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-4 w-full max-w-lg">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div
                        key={i}
                        className="h-24 rounded-lg bg-card border border-border shadow-sm animate-pulse-soft"
                        style={{ animationDelay: `${i * 200}ms` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-foreground/5 blur-xl rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="py-12 border-b border-border">
        <div className="container-custom">
          <p className="text-center text-sm text-muted-foreground mb-8">
            Trusted by leading companies worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {logos.map((logo) => (
              <div
                key={logo}
                className="text-xl font-display font-semibold text-muted-foreground/50"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Everything you need to succeed
            </h2>
            <p className="text-lg text-muted-foreground">
              Powerful features designed to help your team work smarter, not harder.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="card-elevated card-hover p-6"
              >
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

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/features">
                View All Features
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Loved by teams everywhere
            </h2>
            <p className="text-lg text-muted-foreground">
              See why thousands of companies choose builderz to power their workflows.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.author}
                className="card-elevated p-6"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-6">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/case-studies">
                Read Case Studies
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="relative overflow-hidden rounded-3xl bg-primary p-8 md:p-16">
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
                Ready to transform your workflow?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Join 10,000+ companies already using builderz to build better products, faster.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/product-tour">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10" asChild>
                  <Link to="/contact">Talk to Sales</Link>
                </Button>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
              <div className="absolute inset-0 bg-gradient-to-l from-primary-foreground to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
