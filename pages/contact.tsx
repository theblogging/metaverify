import type { GetStaticProps, NextPage } from 'next';
import SEO from '@/components/SEO';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: NextPage = () => {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with the Meta Verified Service team. We're here to answer your questions about the verification process."
        canonical="https://www.verifyservice.com/contact"
      />
      <div className="max-w-5xl mx-auto">
        <div className="text-center my-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800">Get in Touch</h1>
          <p className="text-slate-600 mt-2 text-lg">Have questions? We'd love to hear from you.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 bg-white/60 backdrop-blur-md border border-slate-200/80 shadow-sm rounded-2xl p-8 md:p-12">
          {/* Contact Info Section */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Contact Information</h2>
            <p className="text-slate-600 mb-6">
              Fill out the form, or for a more direct approach, use one of the methods below. We aim to respond to all inquiries within 24 hours.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-indigo-600" />
                <span className="text-slate-700">support@verifyservice.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-indigo-600" />
                <span className="text-slate-700">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-indigo-600" />
                <span className="text-slate-700">123 Verification Lane, Digital City</span>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <form>
            <div className="mb-5">
              <label htmlFor="name" className="block text-slate-700 text-sm font-semibold mb-2">Full Name</label>
              <input type="text" id="name" name="name" className="appearance-none border border-slate-300 rounded-lg w-full py-3 px-4 text-slate-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500/50 bg-white/50" required />
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="block text-slate-700 text-sm font-semibold mb-2">Email Address</label>
              <input type="email" id="email" name="email" className="appearance-none border border-slate-300 rounded-lg w-full py-3 px-4 text-slate-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500/50 bg-white/50" required />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-slate-700 text-sm font-semibold mb-2">Message</label>
              <textarea id="message" name="message" rows={5} className="appearance-none border border-slate-300 rounded-lg w-full py-3 px-4 text-slate-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500/50 bg-white/50" required></textarea>
            </div>
            <div className="flex items-center justify-start">
              <button type="submit" className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold py-3 px-8 rounded-full hover:scale-105 transform transition-transform duration-300 shadow-lg shadow-indigo-500/30 hover:shadow-xl">
                Send Message
              </button>
            </div>
          </form>
        </div>
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
