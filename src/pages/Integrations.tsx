import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ArrowRight, Puzzle } from "lucide-react";

const categories = [
  "All",
  "Communication",
  "Development",
  "Project Management",
  "Analytics",
  "Marketing",
  "Sales",
];

const integrations = [
  { name: "Slack", category: "Communication", description: "Send notifications and updates to Slack channels", popular: true },
  { name: "GitHub", category: "Development", description: "Sync repositories and automate workflows", popular: true },
  { name: "Jira", category: "Project Management", description: "Connect sprints and track issues seamlessly", popular: true },
  { name: "Salesforce", category: "Sales", description: "Sync customer data and automate pipelines", popular: true },
  { name: "Google Analytics", category: "Analytics", description: "Track usage and performance metrics", popular: false },
  { name: "HubSpot", category: "Marketing", description: "Connect marketing automation and CRM", popular: false },
  { name: "Microsoft Teams", category: "Communication", description: "Collaborate directly in Teams", popular: false },
  { name: "GitLab", category: "Development", description: "DevOps platform integration", popular: false },
  { name: "Asana", category: "Project Management", description: "Sync tasks and project timelines", popular: false },
  { name: "Segment", category: "Analytics", description: "Customer data platform integration", popular: false },
  { name: "Mailchimp", category: "Marketing", description: "Email marketing automation", popular: false },
  { name: "Pipedrive", category: "Sales", description: "Sales pipeline management", popular: false },
  { name: "Discord", category: "Communication", description: "Community notifications and updates", popular: false },
  { name: "Bitbucket", category: "Development", description: "Code repository integration", popular: false },
  { name: "Monday.com", category: "Project Management", description: "Work management platform sync", popular: false },
  { name: "Mixpanel", category: "Analytics", description: "Product analytics integration", popular: false },
  { name: "Intercom", category: "Marketing", description: "Customer messaging platform", popular: false },
  { name: "Zendesk", category: "Sales", description: "Customer support integration", popular: false },
];

export default function Integrations() {
  const popularIntegrations = integrations.filter((i) => i.popular);

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding" style={{ background: 'var(--gradient-hero)' }}>
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Connect your favorite tools
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              builderz integrates with 100+ tools you already use. Build powerful workflows without switching contexts.
            </p>
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search integrations..."
                className="pl-12 h-14 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Integrations */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-2xl font-display font-bold text-foreground mb-8">
            Popular Integrations
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularIntegrations.map((integration) => (
              <div
                key={integration.name}
                className="card-elevated card-hover p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Puzzle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{integration.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{integration.description}</p>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/documentation">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-y border-border">
        <div className="container-custom">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "All"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Integrations */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-2xl font-display font-bold text-foreground mb-8">
            All Integrations
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {integrations.map((integration) => (
              <div
                key={integration.name}
                className="card-elevated p-4 flex items-center gap-4 card-hover"
              >
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                  <Puzzle className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-foreground">{integration.name}</h3>
                  <p className="text-xs text-muted-foreground truncate">{integration.category}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Build Your Own */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Build custom integrations
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Don't see what you need? Use our API to build custom integrations for your specific workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/documentation">
                  View API Docs
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Request Integration</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
