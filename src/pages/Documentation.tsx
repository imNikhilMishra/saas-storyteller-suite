import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Book, 
  Code, 
  Zap, 
  Shield, 
  Users, 
  Settings, 
  ArrowRight,
  FileText,
  Video,
  MessageCircle
} from "lucide-react";

const categories = [
  {
    icon: Book,
    title: "Getting Started",
    description: "Learn the basics of builderz",
    articles: 12,
    popular: ["Quick start guide", "Installation", "First project"],
  },
  {
    icon: Code,
    title: "API Reference",
    description: "Complete API documentation",
    articles: 45,
    popular: ["Authentication", "REST endpoints", "Webhooks"],
  },
  {
    icon: Zap,
    title: "Integrations",
    description: "Connect with your tools",
    articles: 30,
    popular: ["Slack", "GitHub", "Jira"],
  },
  {
    icon: Shield,
    title: "Security",
    description: "Security & compliance guides",
    articles: 18,
    popular: ["SSO setup", "Role management", "Audit logs"],
  },
  {
    icon: Users,
    title: "Team Management",
    description: "Manage your workspace",
    articles: 15,
    popular: ["Inviting users", "Permissions", "Teams"],
  },
  {
    icon: Settings,
    title: "Administration",
    description: "Configure your account",
    articles: 22,
    popular: ["Billing", "Settings", "Data export"],
  },
];

const popularArticles = [
  { title: "Getting started with builderz", category: "Getting Started", readTime: "5 min" },
  { title: "How to set up SSO", category: "Security", readTime: "10 min" },
  { title: "API authentication guide", category: "API Reference", readTime: "8 min" },
  { title: "Connecting Slack to builderz", category: "Integrations", readTime: "3 min" },
  { title: "Managing team permissions", category: "Team Management", readTime: "6 min" },
  { title: "Webhook configuration", category: "API Reference", readTime: "7 min" },
];

const resources = [
  {
    icon: FileText,
    title: "API Changelog",
    description: "Latest API updates and changes",
  },
  {
    icon: Video,
    title: "Video Tutorials",
    description: "Step-by-step video guides",
  },
  {
    icon: MessageCircle,
    title: "Community Forum",
    description: "Get help from the community",
  },
];

export default function Documentation() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding" style={{ background: 'var(--gradient-hero)' }}>
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Documentation
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Everything you need to build with builderz. Guides, references, and examples.
            </p>
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search documentation..."
                className="pl-12 h-14 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-2xl font-display font-bold text-foreground mb-8">
            Browse by Category
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div key={category.title} className="card-elevated card-hover p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-1">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                <p className="text-xs text-muted-foreground mb-4">{category.articles} articles</p>
                <div className="space-y-2">
                  {category.popular.map((article) => (
                    <Link
                      key={article}
                      to="/documentation"
                      className="block text-sm text-primary hover:underline"
                    >
                      {article}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <h2 className="text-2xl font-display font-bold text-foreground mb-8">
            Popular Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl">
            {popularArticles.map((article) => (
              <Link
                key={article.title}
                to="/documentation"
                className="card-elevated p-4 flex items-center justify-between card-hover"
              >
                <div>
                  <h3 className="font-medium text-foreground">{article.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {article.category} • {article.readTime}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-2xl font-display font-bold text-foreground mb-8">
            Additional Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <div key={resource.title} className="card-elevated p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <resource.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{resource.title}</h3>
                <p className="text-sm text-muted-foreground">{resource.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-display font-bold text-primary-foreground mb-4">
            Can't find what you're looking for?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Our support team is here to help. Reach out and we'll get back to you within 24 hours.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Contact Support</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
