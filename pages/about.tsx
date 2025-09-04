import React from 'react';
import type { GetStaticProps, NextPage } from 'next';
import SEO from '@/components/SEO';
import { Scale, Users, Lightbulb, Target } from 'lucide-react';

const About: NextPage = () => {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Meta Verified Service, our mission, and the team dedicated to helping you achieve verification and build your online presence."
        canonical="https://www.verifyservice.com/about"
      />
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <section className="text-center py-16 md:py-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4">
            We're Demystifying Digital Identity
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            At Meta Verified Service, we believe authenticity shouldn't be a luxury. We're dedicated to helping creators, brands, and public figures establish the trust they deserve online.
          </p>
        </section>

        {/* Mission and Vision Section */}
        <section className="grid md:grid-cols-2 gap-12 py-16">
          <div className="bg-white/60 backdrop-blur-md border border-slate-200/80 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full">
                <Target className="w-6 h-6 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800">Our Mission</h2>
            </div>
            <p className="text-slate-600">
              To simplify the complex process of social media verification, empowering our clients to secure their digital identity, combat impersonation, and unlock new opportunities with a universally recognized symbol of trust.
            </p>
          </div>
          <div className="bg-white/60 backdrop-blur-md border border-slate-200/80 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full">
                <Lightbulb className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800">Our Vision</h2>
            </div>
            <p className="text-slate-600">
              To create a more authentic and trustworthy digital ecosystem where every legitimate voice can be easily identified and heard, fostering a safer and more credible online environment for everyone.
            </p>
          </div>
        </section>

        {/* Our Core Values Section */}
        <section className="py-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Our Core Values</h2>
                <p className="text-slate-500 mt-2 max-w-2xl mx-auto">The principles that guide every decision we make.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <ValueCard icon={<Scale />} title="Integrity" description="We operate with transparency and honesty, ensuring our clients' trust is always our top priority." />
                <ValueCard icon={<Users />} title="Client-Centric" description="Your success is our success. We provide personalized support tailored to your unique verification needs." />
                <ValueCard icon={<Lightbulb />} title="Expertise" description="We stay ahead of the curve, constantly adapting to the evolving landscape of social media policies to deliver results." />
            </div>
        </section>

      </div>
    </>
  );
};

const ValueCard = ({ icon, title, description }: { icon: React.ReactElement, title: string, description: string }) => (
    <div className="p-6 bg-white/60 backdrop-blur-md rounded-2xl border border-slate-200/80 text-center">
        <div className="inline-block p-3 bg-white rounded-full mb-3 border">
          {/* FIX: Change icon prop type from React.ReactNode to React.ReactElement to allow cloning with props. */}
          {React.cloneElement(icon, { className: "w-8 h-8 text-indigo-500" })}
        </div>
        <h3 className="font-semibold text-xl mb-2 text-slate-800">{title}</h3>
        <p className="text-slate-600 text-sm">{description}</p>
    </div>
)


export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export default About;