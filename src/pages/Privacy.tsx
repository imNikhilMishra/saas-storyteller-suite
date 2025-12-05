import { Layout } from "@/components/layout/Layout";

export default function Privacy() {
  return (
    <Layout>
      <section className="section-padding" style={{ background: 'var(--gradient-hero)' }}>
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">Last updated: December 1, 2024</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <div className="space-y-8 text-muted-foreground">
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">Introduction</h2>
                <p>
                  At builderz, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service. Please read this privacy policy carefully.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">Information We Collect</h2>
                <p>We collect information that you provide directly to us, including:</p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li>Account information (name, email, password)</li>
                  <li>Profile information (job title, company)</li>
                  <li>Payment information (processed securely by our payment providers)</li>
                  <li>Communications you send to us</li>
                  <li>Content you create, upload, or share on our platform</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">Automatically Collected Information</h2>
                <p>When you access our service, we automatically collect:</p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li>Device information (type, operating system, browser)</li>
                  <li>Log data (IP address, access times, pages viewed)</li>
                  <li>Usage data (features used, interactions with the service)</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send you technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Analyze usage patterns and improve user experience</li>
                  <li>Protect against fraudulent or illegal activity</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">Information Sharing</h2>
                <p>
                  We do not sell your personal information. We may share information with:
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li>Service providers who assist in our operations</li>
                  <li>Professional advisors (lawyers, accountants, auditors)</li>
                  <li>Law enforcement when required by law</li>
                  <li>Other parties with your consent</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">Your Rights</h2>
                <p>You have the right to:</p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to processing of your data</li>
                  <li>Export your data in a portable format</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">Cookies</h2>
                <p>
                  We use cookies and similar technologies to collect information and improve our services. You can control cookies through your browser settings, though this may affect functionality.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">International Transfers</h2>
                <p>
                  Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">Children's Privacy</h2>
                <p>
                  Our service is not intended for children under 13. We do not knowingly collect personal information from children under 13.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">Changes to This Policy</h2>
                <p>
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy, please contact us at privacy@builderz.com or through our contact page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
