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
  Code,
  Database,
  Lock,
  Smartphone,
  Cloud,
  GitBranch,
  CheckCircle2,
} from "lucide-react";

const mainFeatures = [
  {
    icon: Zap,
    title: "Lightning Fast Performance",
    description: "Built on edge infrastructure for sub-100ms response times globally. Your users experience instant interactions no matter where they are.",
    benefits: ["Edge deployment", "CDN integration", "Auto-scaling"],
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "SOC 2 Type II certified with comprehensive security features. Your data is protected with industry-leading encryption and access controls.",
    benefits: ["SSO/SAML", "Role-based access", "Audit logs"],
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Real-time insights with customizable dashboards. Track every metric that matters and make data-driven decisions.",
    benefits: ["Custom dashboards", "Real-time data", "Export tools"],
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Built for teams of all sizes with real-time editing, comments, and notifications. Everyone stays in sync.",
    benefits: ["Real-time editing", "Comments", "Notifications"],
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Automate repetitive tasks with our powerful workflow engine. Connect triggers, conditions, and actions visually.",
    benefits: ["Visual builder", "100+ integrations", "Custom logic"],
  },
  {
    icon: Globe,
    title: "Global Infrastructure",
    description: "Multi-region deployment with automatic failover. 99.99% uptime SLA backed by our commitment to reliability.",
    benefits: ["Multi-region", "Auto-failover", "99.99% SLA"],
  },
];

const additionalFeatures = [
  { icon: Code, name: "API First", description: "RESTful API for all features" },
  { icon: Database, name: "Data Sync", description: "Real-time data synchronization" },
  { icon: Lock, name: "Encryption", description: "End-to-end encryption" },
  { icon: Smartphone, name: "Mobile Ready", description: "Native mobile apps" },
  { icon: Cloud, name: "Cloud Native", description: "Built for the cloud" },
  { icon: GitBranch, name: "Version Control", description: "Full history tracking" },
];

export default function Features() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding" style={{ background: 'var(--gradient-hero)' }}>
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Powerful features for{" "}
              <span className="text-gradient">modern teams</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Everything you need to build, ship, and scale your products. Designed for teams who demand the best.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/product-tour">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-24">
            {mainFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                    {feature.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent" />
                        <span className="text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="rounded-2xl bg-muted/50 border border-border p-8 aspect-[4/3] flex items-center justify-center">
                    <feature.icon className="w-24 h-24 text-primary/20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              And so much more
            </h2>
            <p className="text-lg text-muted-foreground">
              Every feature is designed to help your team succeed.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature) => (
              <div
                key={feature.name}
                className="card-elevated p-6 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{feature.name}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Ready to get started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of teams already using Nexus to power their workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/product-tour">Start Free Trial</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
