import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="min-h-screen bg-[#f8fafc] text-[#0f172a] font-sans py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-[#0f172a]/60 font-semibold">
            Privacy Policy
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0f172a]">
            Your privacy matters at Spinal Solutions
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-8">
            This Privacy Policy explains how Spinal Solutions collects, uses, and protects the personal information you provide when using our website and services.
          </p>
        </div>

        <div className="space-y-8 prose prose-slate max-w-none">
          <section>
            <h2>Information We Collect</h2>
            <p>
              We may collect the information you provide directly, such as your name, email address, phone number, company name, shipping address, and order details when you submit a contact request or order form.
            </p>
            <p>
              If you upload files or attachments, those files are handled only for the purpose of fulfilling your request and are not shared with third parties except as required to complete your order.
            </p>
          </section>

          <section>
            <h2>How We Use Your Information</h2>
            <p>
              Your information helps us respond to inquiries, process orders, share product information, and improve your experience on our site. We also use contact details to provide updates, confirmations, and support as needed.
            </p>
          </section>

          <section>
            <h2>Security</h2>
            <p>
              We take reasonable measures to protect your information and keep it secure. While we cannot guarantee perfect security, we work to prevent unauthorized access, disclosure, or misuse.
            </p>
          </section>

          <section>
            <h2>Third-Party Services</h2>
            <p>
              We do not sell your personal information. We may use trusted third-party services to operate the site, analyze traffic, or deliver email notifications, but those services are only used in accordance with this policy.
            </p>
          </section>

          <section>
            <h2>Cookies and Tracking</h2>
            <p>
              Our website may use cookies and similar technologies to improve site performance and user experience. You can manage cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2>Children's Privacy</h2>
            <p>
              Our website is not intended for children under the age of 13. We do not knowingly collect personal information from minors.
            </p>
          </section>

          <section>
            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The date of the latest version will be reflected on this page, and continued use of the website constitutes acceptance of any changes.
            </p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us through the website contact form or by using the details provided on our Contact page.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
