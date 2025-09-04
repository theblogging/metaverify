import type { GetStaticProps, NextPage } from 'next';
import SEO from '@/components/SEO';

const Home: NextPage = () => {
  return (
    <>
      <SEO
        title="Get Verified on Social Media"
        description="Meta Verified Service helps you get the blue checkmark on Instagram, Facebook, and other platforms. Boost your credibility and brand presence."
        canonical="https://www.verifyservice.com"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          'name': 'Meta Verified Service',
          'url': 'https://www.verifyservice.com',
        }}
      />
      <section className="text-center py-20">
        <h1 className="text-4xl md:text-6xl font-extrabold text-secondary mb-4">
          Get Your Meta Verification Badge
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          We streamline the process of getting verified on major social media platforms, enhancing your brand's authority and trust.
        </p>
        <button className="bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all text-lg">
          Start Your Verification
        </button>
      </section>
      
      <section className="py-16 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary">Why Get Verified?</h2>
            <p className="text-gray-500 mt-2">Unlock exclusive benefits and build trust with your audience.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <h3 className="font-semibold text-xl mb-2">Increased Credibility</h3>
            <p>The blue checkmark is a symbol of authenticity that sets you apart from imposters and builds follower trust.</p>
          </div>
          <div className="text-center p-6">
            <h3 className="font-semibold text-xl mb-2">Enhanced Visibility</h3>
            <p>Verified accounts often get priority in search results and recommendations, increasing your reach.</p>
          </div>
          <div className="text-center p-6">
            <h3 className="font-semibold text-xl mb-2">Proactive Protection</h3>
            <p>Protect your brand from impersonation with a verified badge that proves you're the real deal.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}, // No props needed for this static page
  };
};

export default Home;
