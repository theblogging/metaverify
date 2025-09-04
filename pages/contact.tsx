import type { GetStaticProps, NextPage } from 'next';
import SEO from '@/components/SEO';

const Contact: NextPage = () => {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with the Meta Verified Service team. We're here to answer your questions about the verification process."
        canonical="https://www.verifyservice.com/contact"
      />
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-secondary">Contact Us</h1>
          <p className="text-slate-600 mt-2">Have questions? We'd love to hear from you.</p>
        </div>
        
        <form className="bg-white/60 backdrop-blur-md border border-slate-200/80 shadow-sm rounded-2xl p-8">
          <div className="mb-4">
            <label htmlFor="name" className="block text-slate-700 text-sm font-bold mb-2">Name</label>
            <input type="text" id="name" name="name" className="appearance-none border border-slate-300 rounded-md w-full py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white/50" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-slate-700 text-sm font-bold mb-2">Email</label>
            <input type="email" id="email" name="email" className="appearance-none border border-slate-300 rounded-md w-full py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white/50" required />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-slate-700 text-sm font-bold mb-2">Message</label>
            <textarea id="message" name="message" rows={5} className="appearance-none border border-slate-300 rounded-md w-full py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white/50" required></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button type="submit" className="bg-primary text-white font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-all">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export default Contact;