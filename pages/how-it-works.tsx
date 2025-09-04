import React from 'react';
import type { NextPage, GetStaticProps } from 'next';
import SEO from '@/components/SEO';
import { ClipboardList, MailCheck, Award, HelpCircle } from 'lucide-react';

const HowItWorks: NextPage = () => {
  return (
    <>
      <SEO
        title="How It Works"
        description="Our simple, three-step process for getting your social media accounts verified. Learn how we help you from application to approval."
        canonical="https://www.verifyservice.com/how-it-works"
      />
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <section className="text-center py-16 md:py-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4">
            A Clear Path to Verification
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            We've refined the verification journey into a straightforward, transparent, and effective process. Here’s exactly how we get it done.
          </p>
        </section>
        
        {/* Process Steps Section */}
        <section className="py-16">
          <div className="relative border-l-2 border-indigo-200 ml-6">
            <TimelineStep 
              icon={<ClipboardList />}
              step="Step 1"
              title="Application & Profile Submission"
              description="Start by filling out our secure online application. You'll provide essential details about yourself or your brand and link the social media profiles you want to get verified. This initial step gives us all the information we need to build a strong case."
            />
            <TimelineStep 
              icon={<MailCheck />}
              step="Step 2"
              title="Expert Review & Strategy"
              description="Our team of verification experts will meticulously review your application and profiles. We analyze your online presence, notability, and account integrity against platform-specific guidelines. We then strategize the best approach for submission, ensuring all requirements are met to maximize your chances of approval."
            />
            <TimelineStep 
              icon={<Award />}
              step="Step 3"
              title="Submission & Approval"
              description="We take care of the entire submission process, leveraging our experience to present your case effectively to the platforms. We monitor the status closely and keep you informed. Once approved, the coveted blue badge will appear on your profile, cementing your authentic status."
            />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Frequently Asked Questions</h2>
              <p className="text-slate-500 mt-2">Answers to common questions about our process.</p>
          </div>
          <div className="space-y-4 max-w-3xl mx-auto">
            <FAQItem
              question="How long does the verification process take?"
              answer="The timeline can vary depending on the platform and the complexity of the case. Typically, the process takes anywhere from a few days to a few weeks. We keep you updated at every stage."
            />
            <FAQItem
              question="Is verification guaranteed?"
              answer="While we have a high success rate due to our expertise, no service can guarantee verification as the final decision rests with the social media platforms. We guarantee that we will build the strongest possible case for you."
            />
            <FAQItem
              question="What if my application is rejected?"
              answer="In the rare event of a rejection, we analyze the platform's feedback and advise on the necessary steps to improve your profile's eligibility for a future application. In some cases, a re-application is possible after a certain waiting period."
            />
          </div>
        </section>
      </div>
    </>
  );
};

const TimelineStep = ({ icon, step, title, description }: { icon: React.ReactElement; step: string; title: string; description: string }) => (
  <div className="mb-12 ml-12 p-6 bg-white/60 backdrop-blur-md rounded-2xl border border-slate-200/80">
    <div className="absolute -left-6 flex items-center justify-center w-12 h-12 bg-white rounded-full border-4 border-indigo-200">
      {/* FIX: Change icon prop type from React.ReactNode to React.ReactElement to allow cloning with props. */}
      {React.cloneElement(icon, { className: 'w-6 h-6 text-indigo-600' })}
    </div>
    <span className="text-sm font-semibold text-indigo-600 uppercase">{step}</span>
    <h3 className="text-xl font-bold text-slate-800 mt-1 mb-2">{title}</h3>
    <p className="text-slate-600">{description}</p>
  </div>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => (
  <details className="group bg-white/60 backdrop-blur-md border border-slate-200/80 rounded-lg p-4 cursor-pointer">
    <summary className="flex justify-between items-center font-semibold text-slate-800">
      {question}
      <HelpCircle className="w-5 h-5 text-slate-500 group-open:rotate-180 transition-transform" />
    </summary>
    <p className="text-slate-600 mt-2">
      {answer}
    </p>
  </details>
);

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};

export default HowItWorks;