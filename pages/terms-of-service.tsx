import type { GetStaticProps, NextPage } from 'next';
import SEO from '@/components/SEO';

const TermsOfService: NextPage = () => {
  return (
    <>
      <SEO
        title="Terms of Service"
        description="Read the Terms of Service for Meta Verified Service to understand the rules and guidelines for using our services."
        canonical="https://www.verifyservice.com/terms-of-service"
      />
      <div className="prose lg:prose-xl max-w-4xl mx-auto">
        <h1>Terms of Service</h1>
        <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
        
        <p>
          Welcome to Meta Verified Service. These Terms of Service ("Terms") govern your use of our website verifyservice.com (the "Site") and the services we offer. By accessing or using our Site and services, you agree to be bound by these Terms.
        </p>

        <h2>1. Our Services</h2>
        <p>
          Meta Verified Service provides consultation and assistance to clients seeking to obtain social media verification. We are an independent service and are not affiliated with Meta, X, TikTok, or any other social media platform. The final decision on verification rests solely with the respective platforms.
        </p>

        <h2>2. Client Obligations</h2>
        <p>
          You agree to provide accurate and complete information required for the verification process. You must be the legitimate owner or an authorized representative of the social media profiles you submit for verification. Misrepresentation may result in the termination of our services without a refund.
        </p>

        <h2>3. Fees and Payment</h2>
        <p>
          Our service fees are for the consultation, profile review, and application assistance we provide. All fees are due upfront and are non-refundable, regardless of the outcome of the verification application, as our work is completed upon submission of the case.
        </p>
        
        <h2>4. No Guarantee</h2>
        <p>
          While we leverage our expertise to build the strongest possible case for your verification, we do not and cannot guarantee a successful outcome. The verification process is subject to the policies and discretion of the social media platforms, which can change without notice.
        </p>

        <h2>5. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Meta Verified Service shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the services.
        </p>

        <h2>6. Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page. Your continued use of the service after any such changes constitutes your acceptance of the new Terms.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us through our contact page.
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

export default TermsOfService;
