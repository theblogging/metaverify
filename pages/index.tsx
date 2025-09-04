import type { GetStaticProps, NextPage } from 'next';
import SEO from '@/components/SEO';
import { ShieldCheck, TrendingUp, BadgeCheck, ClipboardList, MailCheck, Award } from 'lucide-react';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <SEO
        title="Get Verified on Social Media"
        description="Meta Verified Service helps you get the blue checkmark on Instagram, Facebook, and other platforms. Boost your credibility and brand presence."
        canonical="https://www.verifyservice.com"
      />
      
      {/* Hero Section */}
      <section className="text-center py-20 md:py-28">
        <h1 className="text-4xl md:text-6xl font-extrabold text-secondary mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight">
          Unlock Your Digital Identity.
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
          We streamline the complex process of getting verified on social media, enhancing your brand's authority, trust, and reach.
        </p>
        <Link href="/pricing" className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold py-4 px-10 rounded-full hover:scale-105 transform transition-transform duration-300 text-lg shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40">
          Start Your Verification
        </Link>
      </section>
      
      {/* Why Get Verified? Section */}
      <section className="py-20">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Why Get Verified?</h2>
            <p className="text-slate-500 mt-2 max-w-2xl mx-auto">Unlock exclusive benefits that build trust, amplify your voice, and protect your brand.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<ShieldCheck className="w-10 h-10 text-indigo-500" />}
            title="Increased Credibility"
            description="The blue checkmark is a universal symbol of authenticity that sets you apart from imposters and builds follower trust instantly."
          />
          <FeatureCard 
            icon={<TrendingUp className="w-10 h-10 text-indigo-500" />}
            title="Enhanced Visibility"
            description="Verified accounts often get priority in search results and recommendations, organically increasing your reach and engagement."
          />
          <FeatureCard 
            icon={<BadgeCheck className="w-10 h-10 text-indigo-500" />}
            title="Proactive Protection"
            description="Secure your brand's identity and protect your name from impersonation with a verified badge that proves you're the real deal."
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-slate-50/50 rounded-2xl">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Get Verified in 3 Easy Steps</h2>
            <p className="text-slate-500 mt-2 max-w-2xl mx-auto">Our streamlined process makes verification simple and stress-free.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
          <Step icon={<ClipboardList className="w-12 h-12 mx-auto text-purple-600" />} title="1. Submit Application" description="Fill out our secure form with your details and social media profiles. It only takes a few minutes." />
          <Step icon={<MailCheck className="w-12 h-12 mx-auto text-purple-600" />} title="2. Expert Review" description="Our team reviews your profile for eligibility and prepares your case for submission to the platforms." />
          <Step icon={<Award className="w-12 h-12 mx-auto text-purple-600" />} title="3. Get Verified" description="We handle the submission process and notify you once your verification badge is approved." />
        </div>
      </section>

      {/* Supported Platforms Section */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Supporting All Major Platforms</h2>
        <p className="text-slate-500 mb-8">We have expertise in the verification processes for all leading social networks.</p>
        <div className="flex justify-center items-center space-x-8 text-slate-400 font-semibold">
          <span>Instagram</span>
          <span className="text-indigo-300">/</span>
          <span>Facebook</span>
          <span className="text-indigo-300">/</span>
          <span>X (Twitter)</span>
           <span className="text-indigo-300">/</span>
          <span>TikTok</span>
           <span className="text-indigo-300">/</span>
          <span>LinkedIn</span>
        </div>
      </section>
      
      {/* Final CTA Section */}
      <section className="text-center py-20">
        <h2 className="text-4xl font-bold text-slate-800 mb-4">Ready to Build Your Legacy?</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
          Start your journey to becoming a verified presence online. Click below to begin your application and let us handle the rest.
        </p>
        <Link href="/pricing" className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold py-4 px-10 rounded-full hover:scale-105 transform transition-transform duration-300 text-lg shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40">
          Choose Your Plan
        </Link>
      </section>
    </>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="text-center p-8 bg-white/60 backdrop-blur-md rounded-2xl border border-slate-300/50 shadow-sm hover:shadow-lg hover:border-slate-300 transition-all duration-300">
    <div className="inline-block bg-white p-4 rounded-full mb-4 border border-slate-200">
      {icon}
    </div>
    <h3 className="font-semibold text-xl mb-2 text-slate-800">{title}</h3>
    <p className="text-slate-600">{description}</p>
  </div>
);

const Step = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="p-4">
    {icon}
    <h3 className="font-semibold text-xl my-3 text-slate-800">{title}</h3>
    <p className="text-slate-600">{description}</p>
  </div>
);

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export default Home;
