import type { NextPage, GetStaticProps } from 'next';
import SEO from '@/components/SEO';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const Pricing: NextPage = () => {
  return (
    <>
      <SEO
        title="Pricing Plans"
        description="Choose the right plan for your verification needs. We offer transparent pricing for individuals, brands, and enterprises."
        canonical="https://www.verifyservice.com/pricing"
      />
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="text-center py-16 md:py-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4">
            Transparent Pricing for Everyone
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Choose a plan that aligns with your goals. No hidden fees, just expert guidance and a streamlined path to verification.
          </p>
        </section>

        {/* Pricing Cards Section */}
        <section className="grid lg:grid-cols-3 gap-8 items-start">
          <PricingCard
            planName="Creator"
            price="$299"
            description="For individual creators, artists, and public figures starting their journey."
            features={[
              'Single Platform Verification',
              'Profile Eligibility Review',
              'Application Preparation',
              'Standard Support',
            ]}
          />
          <PricingCard
            planName="Brand"
            price="$599"
            description="For businesses, brands, and organizations seeking to establish authority."
            features={[
              'Up to 2 Platforms',
              'In-depth Profile Audit',
              'Strategic Case Building',
              'Priority Support',
              'Re-application Strategy',
            ]}
            isPopular={true}
          />
          <PricingCard
            planName="Enterprise"
            price="Custom"
            description="For large-scale operations, agencies, and public figures with complex needs."
            features={[
              'Multiple Platform Verification',
              'Dedicated Account Manager',
              'PR & Media Presence Consultation',
              '24/7 Premium Support',
              'Ongoing Profile Protection',
            ]}
          />
        </section>
      </div>
    </>
  );
};

const PricingCard = ({ planName, price, description, features, isPopular = false }: {
  planName: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}) => (
  <div className={`relative p-8 rounded-2xl border ${isPopular ? 'border-purple-400 bg-white/80' : 'border-slate-300/50 bg-white/60'} backdrop-blur-md shadow-sm hover:shadow-lg transition-shadow duration-300`}>
    {isPopular && (
      <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase">
        Most Popular
      </div>
    )}
    <h3 className="text-2xl font-bold text-center text-slate-800">{planName}</h3>
    <p className="text-center text-slate-500 mt-2 mb-6 h-12">{description}</p>
    <p className="text-center text-5xl font-extrabold text-slate-900 my-4">{price}</p>
    <p className="text-center text-slate-500 mb-8">{price === 'Custom' ? 'Contact us for a quote' : 'One-time fee'}</p>
    
    <ul className="space-y-3 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <CheckCircle2 className="w-5 h-5 text-indigo-500 mr-3 flex-shrink-0 mt-1" />
          <span className="text-slate-600">{feature}</span>
        </li>
      ))}
    </ul>
    
    <Link href="/contact" className={`block w-full text-center font-bold py-3 px-8 rounded-full transition-all duration-300 ${isPopular ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:scale-105' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'}`}>
      {price === 'Custom' ? 'Contact Sales' : 'Get Started'}
    </Link>
  </div>
);

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};

export default Pricing;
