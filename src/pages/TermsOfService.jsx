import React from "react";

const TermsOfService = () => {
  return (
    <section className="min-h-screen bg-[#f8fafc] text-[#0f172a] font-sans py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-[#0f172a]/60 font-semibold">
            Terms of Service
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0f172a]">
            Terms of Service for Spinal Solutions
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-8">
            These Terms of Service govern your use of the Spinal Solutions website and related services.
            By accessing or using this website, you agree to these terms.
          </p>
        </div>

        <div className="space-y-8 prose prose-slate max-w-none">
          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By using the Spinal Solutions website, you agree to follow and be bound by these Terms of Service.
              If you do not agree with any part of these terms, you must not use the site.
            </p>
          </section>

          <section>
            <h2>2. Use of the Website</h2>
            <p>
              You may use the website only for lawful purposes and in accordance with these terms. You agree not to use the
              site for any activity that violates applicable laws or infringes on the rights of others.
            </p>
          </section>

          <section>
            <h2>3. User Content</h2>
            <p>
              Any content you provide through forms, uploads, or contact requests must be accurate and lawful.
              You are responsible for the information you share, and you agree not to submit material that is offensive,
              unlawful, or infringing.
            </p>
          </section>

          <section>
            <h2>4. Intellectual Property</h2>
            <p>
              All content on this website, including text, images, logos, and layout, is owned by Spinal Solutions or
              its licensors and is protected by intellectual property laws. You may not reproduce or distribute any content
              without prior written permission.
            </p>
          </section>

          <section>
            <h2>5. Limitation of Liability</h2>
            <p>
              Spinal Solutions is not responsible for any indirect, incidental, or consequential losses resulting from the
              use of this website. Use the site at your own risk.
            </p>
          </section>

          <section>
            <h2>6. Third-Party Links</h2>
            <p>
              The website may include links to third-party sites. Those links are provided for convenience only, and
              Spinal Solutions is not responsible for the content or practices of external sites.
            </p>
          </section>

          <section>
            <h2>7. Modifications</h2>
            <p>
              We may change these Terms of Service at any time. Continued use of the website after changes are posted
              constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2>8. Contact</h2>
            <p>
              If you have questions about these Terms of Service, please contact us through the website or the contact information
              provided in the footer.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default TermsOfService;
