import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Quote } from "lucide-react";

const featuredCaseStudy = {
  company: "TechCorp",
  title: "How TechCorp scaled to 10 million users with builderz",
  excerpt: "TechCorp needed a platform that could handle rapid growth. With builderz, they reduced deployment time by 80% and improved team productivity by 3x.",
  metrics: [
    { value: "80%", label: "Faster deployments" },
    { value: "3x", label: "Team productivity" },
    { value: "99.99%", label: "Uptime achieved" },
  ],
  quote: "builderz transformed how our team works. We couldn't imagine going back.",
  author: "Sarah Chen, VP of Engineering",
  industry: "Technology",
  size: "500+ employees",
};

const caseStudies = [
  {
    company: "ScaleUp Inc",
    title: "Achieving 50% cost reduction in infrastructure",
    excerpt: "ScaleUp was spending too much on their cloud infrastructure. With builderz's optimization tools, they cut costs by half.",
    industry: "FinTech",
    metric: "50% cost savings",
  },
  {
    company: "Enterprise Co",
    title: "Enterprise-grade security without the complexity",
    excerpt: "Enterprise Co needed SOC 2 compliance fast. builderz helped them achieve certification in just 6 weeks.",
    industry: "Healthcare",
    metric: "6 weeks to SOC 2",
  },
  {
    company: "GlobalSoft",
    title: "Unifying 20 teams across 10 countries",
    excerpt: "GlobalSoft struggled with fragmented tools. builderz brought everything together into a single platform.",
    industry: "Software",
    metric: "20 teams unified",
  },
  {
    company: "NextGen",
    title: "From 0 to 1 million users in 12 months",
    excerpt: "NextGen's startup needed a platform that could scale. builderz grew with them every step of the way.",
    industry: "E-commerce",
    metric: "1M users in 12mo",
  },
  {
    company: "InnovateTech",
    title: "Reducing engineering onboarding time by 70%",
    excerpt: "New engineers at InnovateTech used to take weeks to get productive. With builderz, they're shipping code on day one.",
    industry: "Technology",
    metric: "70% faster onboarding",
  },
  {
    company: "DataFirst",
    title: "Processing 10x more data with the same team",
    excerpt: "DataFirst's analytics team was overwhelmed. builderz automation helped them scale without adding headcount.",
    industry: "Analytics",
    metric: "10x data capacity",
  },
];

const industries = ["All", "Technology", "FinTech", "Healthcare", "E-commerce", "Analytics", "Software"];

export default function CaseStudies() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding" style={{ background: 'var(--gradient-hero)' }}>
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Customer Success Stories
            </h1>
            <p className="text-lg text-muted-foreground">
              See how leading companies use builderz to transform their workflows and achieve remarkable results.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="card-elevated overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                  Featured Story
                </span>
                <h2 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-4">
                  {featuredCaseStudy.title}
                </h2>
                <p className="text-muted-foreground mb-6">{featuredCaseStudy.excerpt}</p>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  {featuredCaseStudy.metrics.map((metric) => (
                    <div key={metric.label}>
                      <div className="text-2xl font-display font-bold text-primary">{metric.value}</div>
                      <div className="text-sm text-muted-foreground">{metric.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mb-6 p-4 bg-muted/50 rounded-lg">
                  <Quote className="w-6 h-6 text-primary mb-2" />
                  <p className="text-foreground italic mb-2">"{featuredCaseStudy.quote}"</p>
                  <p className="text-sm text-muted-foreground">{featuredCaseStudy.author}</p>
                </div>

                <Button variant="hero" asChild>
                  <Link to="/contact">
                    Read Full Story
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
              <div className="bg-muted/50 flex items-center justify-center min-h-[300px]">
                <span className="text-6xl">🏢</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-8 border-y border-border">
        <div className="container-custom">
          <div className="flex flex-wrap gap-2 justify-center">
            {industries.map((industry) => (
              <button
                key={industry}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  industry === "All"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div key={study.company} className="card-elevated card-hover overflow-hidden">
                <div className="aspect-video bg-muted/50 flex items-center justify-center">
                  <span className="text-4xl">📊</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-primary">{study.company}</span>
                    <span className="text-xs px-2 py-1 bg-muted rounded">{study.industry}</span>
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                    {study.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{study.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-accent">{study.metric}</span>
                    <Button variant="ghost" size="sm" asChild>
                      <Link to="/contact">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
            Ready to become our next success story?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join thousands of companies that trust builderz to power their most critical workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/product-tour">Start Free Trial</Link>
            </Button>
            <Button size="lg" variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link to="/contact">Talk to Sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
