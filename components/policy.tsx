import React from "react";

const policy = () => {
  return (
    <div>
      <div>
        <div>Privacy Policy | Your Website Name</div>
        <meta
          name="description"
          content="Privacy Policy of Your Website Name"
        />
      </div>
      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-4">
          Effective Date: [Insert Date] | Last Updated: [Insert Date]
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            1. Information We Collect
          </h2>
          <p className="mb-2">
            We collect personal and non-personal information to provide and
            improve our services.
          </p>
          <h3 className="font-medium mb-1">a. Personal Information</h3>
          <ul className="list-disc list-inside mb-2">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Shipping and billing address</li>
            <li>Payment information</li>
            <li>Account credentials</li>
          </ul>
          <h3 className="font-medium mb-1">b. Non-Personal Information</h3>
          <ul className="list-disc list-inside">
            <li>Browser type and version</li>
            <li>IP address</li>
            <li>Device type</li>
            <li>Pages visited</li>
            <li>Referring website</li>
          </ul>
        </section>

        <section className="mb-8">
          <div className="text-2xl font-semibold mb-2">
            2. How We Use Your Information
          </div>
          <ul className="list-disc list-inside">
            <li>Process transactions and deliver orders</li>
            <li>Send order updates and marketing emails</li>
            <li>Provide customer support</li>
            <li>Improve website performance and user experience</li>
            <li>Prevent fraud and ensure security</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            3. Sharing Your Information
          </h2>
          <p className="mb-2">
            We do not sell your personal information. We may share your data
            with:
          </p>
          <ul className="list-disc list-inside">
            <li>Service providers</li>
            <li>Legal authorities</li>
            <li>Analytics and marketing partners</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            4. Cookies and Tracking Technologies
          </h2>
          <p className="mb-2">We use cookies to:</p>
          <ul className="list-disc list-inside">
            <li>Remember your preferences and cart contents</li>
            <li>Analyze traffic and usage</li>
            <li>Provide a personalized experience</li>
          </ul>
          <p>You can manage cookie preferences via your browser settings.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">5. Data Security</h2>
          <p>
            We use SSL encryption and secure servers to protect your data.
            However, no transmission method is 100% secure.
          </p>
        </section>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">6. Your Rights</h2>
          <p>
            Depending on your location, you may have the right to access,
            modify, or delete your data. Contact us to exercise your rights.
          </p>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">7. Third-Party Links</h2>
          <p>
            We are not responsible for the privacy policies of third-party sites
            we link to.
          </p>
        </section>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">8. Children’s Privacy</h2>
          <p>
            Our site is not intended for children under 13. We do not knowingly
            collect personal data from them.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            9. Changes to This Policy
          </h2>
          <p>
            We may update this policy and will post changes on this page with a
            new effective date.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">10. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, you can contact
            us at:
          </p>
          <p className="mt-2">
            <strong>Email:</strong> support@yourwebsite.com
            <br />
            <strong>Phone:</strong> +1-XXX-XXX-XXXX
            <br />
            <strong>Address:</strong> 123 E-commerce St, Web City, Country
          </p>
        </div>
      </main>
    </div>
  );
};

export default policy;
