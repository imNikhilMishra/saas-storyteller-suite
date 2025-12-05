import { Layout } from "@/components/layout/Layout";

export default function Terms() {
  return (
    <Layout>
      <section className="section-padding" style={{ background: 'var(--gradient-hero)' }}>
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Terms of Service
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
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">1. Agreement to Terms</h2>
                <p>
                  By accessing or using builderz's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">2. Use License</h2>
                <p>
                  Permission is granted to temporarily access and use builderz's services for personal or business purposes, subject to the restrictions in these terms. This license shall automatically terminate if you violate any of these restrictions.
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li>You may not modify or copy our software without permission</li>
                  <li>You may not use the service for any illegal purpose</li>
                  <li>You may not attempt to reverse engineer any software</li>
                  <li>You may not remove any copyright or proprietary notations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">3. User Accounts</h2>
                <p>
                  When you create an account with us, you must provide accurate, complete, and current information. You are responsible for safeguarding your account credentials and for any activities under your account.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">4. Subscription and Payments</h2>
                <p>
                  Some aspects of our service are billed on a subscription basis. You will be billed in advance on a recurring basis. You may cancel your subscription at any time through your account settings.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">5. Intellectual Property</h2>
                <p>
                  The service and its original content, features, and functionality are owned by builderz and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">6. Limitation of Liability</h2>
                <p>
                  In no event shall builderz, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">7. Termination</h2>
                <p>
                  We may terminate or suspend your account immediately, without prior notice, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the service will cease immediately.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">8. Governing Law</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">9. Changes to Terms</h2>
                <p>
                  We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">10. Contact Us</h2>
                <p>
                  If you have any questions about these Terms, please contact us at legal@builderz.com or through our contact page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
