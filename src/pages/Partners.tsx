import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building, Globe, Award, Users, Handshake, TrendingUp } from "lucide-react";

const partnerTypes = [
  {
    icon: Building,
    title: "Solution Partners",
    description: "Help customers implement and customize builderz for their specific needs.",
    benefits: ["Co-marketing opportunities", "Technical training", "Deal registration", "Partner portal access"],
  },
  {
    icon: Globe,
    title: "Technology Partners",
    description: "Build integrations that extend builderz capabilities for mutual customers.",
    benefits: ["API access & support", "Joint go-to-market", "Integration listing", "Technical resources"],
  },
  {
    icon: Award,
    title: "Referral Partners",
    description: "Earn commissions by referring customers to builderz.",
    benefits: ["Competitive commissions", "Sales enablement", "Dedicated support", "Marketing materials"],
  },
];

const stats = [
  { value: "500+", label: "Active Partners" },
  { value: "50+", label: "Countries" },
  { value: "$10M+", label: "Partner Revenue" },
  { value: "95%", label: "Partner Satisfaction" },
];

const featuredPartners = [
  { name: "Accenture", type: "Solution Partner" },
  { name: "Deloitte", type: "Solution Partner" },
  { name: "AWS", type: "Technology Partner" },
  { name: "Google Cloud", type: "Technology Partner" },
  { name: "Salesforce", type: "Technology Partner" },
  { name: "Slack", type: "Technology Partner" },
];

export default function Partners() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding" style={{ background: 'var(--gradient-hero)' }}>
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Partner with builderz
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Join our partner ecosystem and grow your business while helping customers succeed with builderz.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Become a Partner
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-b border-border">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Partner Programs
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the partnership model that best fits your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {partnerTypes.map((type) => (
              <div key={type.title} className="card-elevated p-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <type.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {type.title}
                </h3>
                <p className="text-muted-foreground mb-6">{type.description}</p>
                <ul className="space-y-2">
                  {type.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Why Partner with builderz?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Growing Market</h3>
                    <p className="text-muted-foreground">
                      The team collaboration market is growing 20% YoY. Ride the wave with us.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">50K+ Customers</h3>
                    <p className="text-muted-foreground">
                      Access our customer base and expand your reach globally.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Handshake className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Dedicated Support</h3>
                    <p className="text-muted-foreground">
                      Get a dedicated partner manager and access to technical resources.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-card border border-border aspect-square flex items-center justify-center">
              <Handshake className="w-24 h-24 text-primary/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Partners */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Featured Partners
            </h2>
            <p className="text-muted-foreground">
              Join industry leaders in our partner ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {featuredPartners.map((partner) => (
              <div key={partner.name} className="card-elevated p-6 text-center">
                <div className="w-12 h-12 rounded-lg bg-muted mx-auto mb-3 flex items-center justify-center">
                  <span className="text-lg font-display font-bold text-muted-foreground">
                    {partner.name[0]}
                  </span>
                </div>
                <h3 className="font-medium text-foreground text-sm">{partner.name}</h3>
                <p className="text-xs text-muted-foreground">{partner.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
            Ready to grow together?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Apply to become a builderz partner today and unlock new revenue opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Apply Now</Link>
            </Button>
            <Button size="lg" variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link to="/contact">Contact Partnership Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
