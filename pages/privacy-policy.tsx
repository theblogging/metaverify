import type { GetStaticProps, NextPage } from 'next';
import SEO from '@/components/SEO';

const PrivacyPolicy: NextPage = () => {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Read the Privacy Policy for Meta Verified Service to understand how we collect, use, and protect your personal information."
        canonical="https://www.verifyservice.com/privacy-policy"
      />
      <div className="prose lg:prose-xl max-w-4xl mx-auto">
        <h1>Privacy Policy</h1>
        <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
        
        <p>
          Meta Verified Service ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website verifyservice.com (the "Site"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
        </p>

        <h2>1. Collection of Your Information</h2>
        <p>
          We may collect information about you in a variety of ways. The information we may collect on the Site includes personal data, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site.
        </p>

        <h2>2. Use of Your Information</h2>
        <p>
          Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
        </p>
        <ul>
          <li>Create and manage your account.</li>
          <li>Email you regarding your account or order.</li>
          <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
          <li>Increase the efficiency and operation of the Site.</li>
        </ul>

        <h2>3. Disclosure of Your Information</h2>
        <p>
          We may share information we have collected about you in certain situations. Your information may be disclosed as follows: by law or to protect rights, if we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others.
        </p>
        
        <h2>4. Security of Your Information</h2>
        <p>
          We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions or comments about this Privacy Policy, please contact us through our contact page.
        </p>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export default PrivacyPolicy;
