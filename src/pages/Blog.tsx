import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";

const featuredPost = {
  title: "The Future of Team Collaboration: AI-Powered Workflows",
  excerpt: "Discover how artificial intelligence is transforming the way teams work together, from automated task management to intelligent insights.",
  author: "Sarah Chen",
  date: "Dec 1, 2024",
  readTime: "8 min read",
  category: "Product",
  slug: "future-team-collaboration-ai",
};

const posts = [
  {
    title: "10 Best Practices for Remote Team Management",
    excerpt: "Learn how successful companies are managing distributed teams effectively.",
    author: "Michael Roberts",
    date: "Nov 28, 2024",
    readTime: "6 min read",
    category: "Leadership",
    slug: "remote-team-management",
  },
  {
    title: "How We Achieved 99.99% Uptime",
    excerpt: "A deep dive into our infrastructure and the engineering decisions that made it possible.",
    author: "David Kim",
    date: "Nov 25, 2024",
    readTime: "10 min read",
    category: "Engineering",
    slug: "achieving-uptime",
  },
  {
    title: "Customer Story: How TechCorp Scaled to 10M Users",
    excerpt: "An exclusive look at how one of our customers achieved massive growth using Nexus.",
    author: "Emily Watson",
    date: "Nov 22, 2024",
    readTime: "5 min read",
    category: "Case Study",
    slug: "techcorp-case-study",
  },
  {
    title: "Security Best Practices for SaaS Companies",
    excerpt: "Essential security measures every SaaS company should implement.",
    author: "Lisa Thompson",
    date: "Nov 18, 2024",
    readTime: "7 min read",
    category: "Security",
    slug: "security-best-practices",
  },
  {
    title: "The Complete Guide to Workflow Automation",
    excerpt: "Everything you need to know to automate your team's repetitive tasks.",
    author: "Alex Chen",
    date: "Nov 15, 2024",
    readTime: "12 min read",
    category: "Product",
    slug: "workflow-automation-guide",
  },
  {
    title: "Building a Culture of Continuous Improvement",
    excerpt: "How to foster a team environment that embraces change and growth.",
    author: "Sarah Chen",
    date: "Nov 12, 2024",
    readTime: "6 min read",
    category: "Culture",
    slug: "continuous-improvement",
  },
];

const categories = ["All", "Product", "Engineering", "Leadership", "Security", "Culture", "Case Study"];

export default function Blog() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding" style={{ background: 'var(--gradient-hero)' }}>
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Nexus Blog
            </h1>
            <p className="text-lg text-muted-foreground">
              Insights, stories, and updates from the Nexus team. Learn how to build better products and grow your team.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border">
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

      {/* Featured Post */}
      <section className="section-padding">
        <div className="container-custom">
          <Link to={`/blog/${featuredPost.slug}`} className="block group">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="rounded-2xl bg-muted/50 border border-border aspect-video flex items-center justify-center group-hover:border-primary/50 transition-colors">
                <span className="text-6xl">📝</span>
              </div>
              <div>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                  {featuredPost.category}
                </span>
                <h2 className="text-3xl font-display font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="card-elevated card-hover overflow-hidden group"
              >
                <div className="aspect-video bg-muted/50 flex items-center justify-center">
                  <span className="text-4xl">📄</span>
                </div>
                <div className="p-6">
                  <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>{post.author}</span>
                    <span>·</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Subscribe to our newsletter
            </h2>
            <p className="text-muted-foreground mb-6">
              Get the latest articles and product updates delivered to your inbox.
            </p>
            <form className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-input bg-background text-foreground"
              />
              <Button variant="hero">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
