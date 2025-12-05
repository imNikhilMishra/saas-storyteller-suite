import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Clock, Users, Heart, Zap, Globe } from "lucide-react";

const benefits = [
  { icon: Heart, title: "Health & Wellness", description: "Comprehensive health, dental, and vision coverage for you and your family" },
  { icon: Clock, title: "Flexible Hours", description: "Work when you're most productive. We trust you to manage your time" },
  { icon: Globe, title: "Remote First", description: "Work from anywhere in the world. We're fully distributed" },
  { icon: Users, title: "Team Offsites", description: "Quarterly team gatherings in amazing locations around the world" },
  { icon: Zap, title: "Learning Budget", description: "$2,000 annual budget for courses, conferences, and books" },
  { icon: MapPin, title: "Home Office", description: "$1,500 to set up your perfect home workspace" },
];

const departments = [
  { name: "Engineering", count: 8 },
  { name: "Product", count: 3 },
  { name: "Design", count: 2 },
  { name: "Sales", count: 4 },
  { name: "Marketing", count: 2 },
  { name: "Operations", count: 1 },
];

const jobs = [
  {
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "Remote (US)",
    type: "Full-time",
  },
  {
    title: "Backend Engineer",
    department: "Engineering",
    location: "Remote (Global)",
    type: "Full-time",
  },
  {
    title: "Staff Platform Engineer",
    department: "Engineering",
    location: "Remote (US/EU)",
    type: "Full-time",
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "Remote (US)",
    type: "Full-time",
  },
  {
    title: "Senior Product Designer",
    department: "Design",
    location: "Remote (Global)",
    type: "Full-time",
  },
  {
    title: "Account Executive",
    department: "Sales",
    location: "Remote (US)",
    type: "Full-time",
  },
  {
    title: "Solutions Engineer",
    department: "Sales",
    location: "Remote (US/EU)",
    type: "Full-time",
  },
  {
    title: "Content Marketing Manager",
    department: "Marketing",
    location: "Remote (Global)",
    type: "Full-time",
  },
];

export default function Careers() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding" style={{ background: 'var(--gradient-hero)' }}>
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Join us in building the{" "}
              <span className="text-gradient">future of work</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              We're a remote-first team of passionate builders on a mission to help teams work smarter. Come build something meaningful with us.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="#positions">
                View Open Positions
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-b border-border">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-display font-bold text-foreground">200+</div>
              <div className="text-muted-foreground">Team Members</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold text-foreground">15</div>
              <div className="text-muted-foreground">Countries</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold text-foreground">100%</div>
              <div className="text-muted-foreground">Remote</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold text-foreground">4.8/5</div>
              <div className="text-muted-foreground">Glassdoor Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Benefits & Perks
            </h2>
            <p className="text-lg text-muted-foreground">
              We take care of our team so they can do their best work.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="card-elevated p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Our Culture
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  At builderz, we believe that the best work happens when people are trusted, supported, and empowered to do what they do best.
                </p>
                <p>
                  We're building a company where everyone has a voice, where we celebrate wins together, and where we learn from our failures.
                </p>
                <p>
                  We value diversity of thought and background, knowing that the best ideas come from teams with different perspectives.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="rounded-2xl bg-muted/50 border border-border aspect-square flex items-center justify-center">
                  <span className="text-4xl">🎉</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-muted-foreground">
              Find your next opportunity at builderz.
            </p>
          </div>

          {/* Department Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            <button className="px-4 py-2 rounded-full text-sm font-medium bg-primary text-primary-foreground">
              All ({jobs.length})
            </button>
            {departments.map((dept) => (
              <button
                key={dept.name}
                className="px-4 py-2 rounded-full text-sm font-medium bg-muted text-muted-foreground hover:text-foreground transition-colors"
              >
                {dept.name} ({dept.count})
              </button>
            ))}
          </div>

          {/* Jobs List */}
          <div className="max-w-3xl mx-auto space-y-4">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="card-elevated p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 card-hover"
              >
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <span>{job.department}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </span>
                    <span>•</span>
                    <span>{job.type}</span>
                  </div>
                </div>
                <Button variant="outline" asChild>
                  <Link to="/contact">Apply</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
            Don't see a perfect fit?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            We're always looking for talented people. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
