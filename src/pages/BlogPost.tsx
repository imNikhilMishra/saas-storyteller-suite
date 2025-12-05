import { Link, useParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User, Share2, Twitter, Linkedin } from "lucide-react";

const post = {
  title: "The Future of Team Collaboration: AI-Powered Workflows",
  excerpt: "Discover how artificial intelligence is transforming the way teams work together.",
  author: "Sarah Chen",
  authorRole: "CEO & Co-founder",
  date: "December 1, 2024",
  readTime: "8 min read",
  category: "Product",
  content: `
## Introduction

The way teams work together is undergoing a fundamental transformation. Artificial intelligence is no longer a futuristic concept—it's actively reshaping how we collaborate, communicate, and create value.

In this article, we'll explore the key trends driving this change and what it means for your organization.

## The Rise of Intelligent Automation

Gone are the days when automation meant simple rule-based triggers. Today's AI-powered workflows can:

- **Understand context**: AI can analyze the content of messages, documents, and tasks to make intelligent decisions
- **Learn from patterns**: The more you use AI-powered tools, the better they become at predicting your needs
- **Adapt in real-time**: Modern systems continuously optimize based on changing conditions

## Key Benefits for Teams

### 1. Reduced Cognitive Load

By automating routine decisions, AI frees up mental bandwidth for creative and strategic work. Studies show that knowledge workers can save up to 2 hours per day through intelligent automation.

### 2. Improved Consistency

Human decision-making is inherently variable. AI ensures that similar situations are handled consistently, reducing errors and improving quality.

### 3. Faster Response Times

AI never sleeps. Automated workflows can respond to events 24/7, ensuring nothing falls through the cracks.

## Implementation Best Practices

When implementing AI-powered workflows, consider these key factors:

1. **Start small**: Begin with high-volume, low-risk processes
2. **Measure everything**: Establish clear metrics before and after implementation
3. **Iterate continuously**: Use feedback to improve your automations over time
4. **Keep humans in the loop**: The best results come from human-AI collaboration

## Looking Ahead

The future of team collaboration is not about replacing humans with machines—it's about augmenting human capabilities with intelligent tools. Organizations that embrace this shift will find themselves with a significant competitive advantage.

## Conclusion

AI-powered workflows represent a fundamental shift in how teams operate. By understanding and embracing these changes, you can position your organization for success in the years ahead.

Ready to explore what AI can do for your team? [Start your free trial](/product-tour) and see the difference for yourself.
  `,
};

const relatedPosts = [
  { title: "10 Best Practices for Remote Team Management", slug: "remote-team-management" },
  { title: "The Complete Guide to Workflow Automation", slug: "workflow-automation-guide" },
  { title: "Building a Culture of Continuous Improvement", slug: "continuous-improvement" },
];

export default function BlogPost() {
  const { slug } = useParams();

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding" style={{ background: 'var(--gradient-hero)' }}>
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {/* Article Image */}
            <div className="rounded-2xl bg-muted/50 border border-border aspect-video flex items-center justify-center mb-12">
              <span className="text-6xl">🤖</span>
            </div>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-2xl font-display font-bold text-foreground mt-12 mb-4">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                }
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={index} className="text-xl font-display font-semibold text-foreground mt-8 mb-3">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                if (paragraph.startsWith('- ')) {
                  return (
                    <ul key={index} className="list-disc list-inside space-y-2 text-muted-foreground my-4">
                      {paragraph.split('\n').map((item, i) => (
                        <li key={i}>{item.replace('- ', '')}</li>
                      ))}
                    </ul>
                  );
                }
                if (paragraph.startsWith('1. ')) {
                  return (
                    <ol key={index} className="list-decimal list-inside space-y-2 text-muted-foreground my-4">
                      {paragraph.split('\n').map((item, i) => (
                        <li key={i}>{item.replace(/^\d+\. /, '')}</li>
                      ))}
                    </ol>
                  );
                }
                if (paragraph.trim()) {
                  return (
                    <p key={index} className="text-muted-foreground my-4 leading-relaxed">
                      {paragraph}
                    </p>
                  );
                }
                return null;
              })}
            </article>

            {/* Share */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-lg font-display font-bold text-muted-foreground">
                      {post.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{post.author}</div>
                    <div className="text-sm text-muted-foreground">{post.authorRole}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground">Share:</span>
                  <button className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Twitter className="w-4 h-4" />
                  </button>
                  <button className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <h2 className="text-2xl font-display font-bold text-foreground mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.slug}
                to={`/blog/${relatedPost.slug}`}
                className="card-elevated p-6 card-hover"
              >
                <h3 className="font-semibold text-foreground hover:text-primary transition-colors">
                  {relatedPost.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
