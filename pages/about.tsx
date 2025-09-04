import type { GetStaticProps, NextPage } from 'next';
import SEO from '@/components/SEO';

const About: NextPage = () => {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Meta Verified Service, our mission, and the team dedicated to helping you achieve verification and build your online presence."
        canonical="https://www.verifyservice.com/about"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          'name': 'Meta Verified Service',
          'url': 'https://www.verifyservice.com',
          'logo': 'https://www.verifyservice.com/logo.png',
          'description': 'A service to help individuals and brands get verified on social media.'
        }}
      />
      <div className="prose lg:prose-xl max-w-4xl mx-auto">
        <h1>About Meta Verified Service</h1>
        <p>
          In today's digital landscape, authenticity is paramount. At Meta Verified Service, we understand the importance of establishing a trusted online presence. Our mission is to simplify the complex and often frustrating process of social media verification for creators, public figures, and brands.
        </p>
        <h2>Our Mission</h2>
        <p>
          We aim to empower our clients by enhancing their digital credibility. The verification badge is more than just a symbol; it's a testament to authenticity and a powerful tool against impersonation. We provide expert guidance and support to navigate the verification requirements of platforms like Instagram, Facebook, and more.
        </p>
        <h2>Our Team</h2>
        <p>
          Our team consists of digital media experts, social media strategists, and public relations professionals who have years of experience working with verification processes. We stay up-to-date with the ever-changing policies of social media platforms to offer our clients the best possible chance of success.
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

export default About;
