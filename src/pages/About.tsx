import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Heart, Lightbulb, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Customer First",
    description: "Everything we build starts with understanding our customers' needs and challenges.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly push boundaries to deliver cutting-edge solutions that matter.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "We build trust through transparency, honesty, and doing what's right.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Great things happen when diverse minds work together toward a common goal.",
  },
];

const team = [
  { name: "Alex Chen", role: "CEO & Co-founder", image: null },
  { name: "Sarah Johnson", role: "CTO & Co-founder", image: null },
  { name: "Michael Roberts", role: "VP of Engineering", image: null },
  { name: "Emily Watson", role: "VP of Product", image: null },
  { name: "David Kim", role: "VP of Sales", image: null },
  { name: "Lisa Thompson", role: "VP of Marketing", image: null },
];

const timeline = [
  { year: "2019", title: "Founded", description: "Started with a vision to simplify team collaboration" },
  { year: "2020", title: "Series A", description: "Raised $15M to accelerate product development" },
  { year: "2021", title: "10K Customers", description: "Reached our first major customer milestone" },
  { year: "2022", title: "Series B", description: "Raised $50M to expand globally" },
  { year: "2023", title: "50K Customers", description: "Serving teams in 150+ countries" },
  { year: "2024", title: "AI Launch", description: "Introduced AI-powered workflow automation" },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding" style={{ background: 'var(--gradient-hero)' }}>
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              We're building the future of{" "}
              <span className="text-gradient">team productivity</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              builderz was founded with a simple mission: help teams work smarter, not harder. 
              Today, we're proud to serve over 50,000 companies worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  In 2019, our founders experienced firsthand the frustration of using disconnected 
                  tools that slowed their teams down. They knew there had to be a better way.
                </p>
                <p>
                  What started as a side project quickly grew into builderz—a unified platform that 
                  brings together everything teams need to collaborate, communicate, and ship products faster.
                </p>
                <p>
                  Today, we're a team of over 200 passionate people spread across 15 countries, 
                  united by our mission to empower every team to do their best work.
                </p>
              </div>
            </div>
            <div className="rounded-2xl bg-muted/50 border border-border aspect-[4/3] flex items-center justify-center">
              <span className="text-4xl">🚀</span>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <h2 className="text-3xl font-display font-bold text-foreground mb-12 text-center">
            Our Journey
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={item.year} className="relative pl-12">
                    <div className="absolute left-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-xs font-bold text-primary-foreground">{item.year.slice(2)}</span>
                    </div>
                    <div className="card-elevated p-4">
                      <div className="font-semibold text-foreground">{item.title}</div>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground">
              Meet the people driving our vision forward.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-24 h-24 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-display font-bold text-muted-foreground">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Join our team
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're always looking for talented people to help us build the future of work.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/careers">
              View Open Positions
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
