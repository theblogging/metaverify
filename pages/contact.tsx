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
          <p className="text-gray-600 mt-2">Have questions? We'd love to hear from you.</p>
        </div>
        
        <form className="bg-white shadow-md rounded-lg p-8">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input type="text" id="name" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
            <textarea id="message" name="message" rows={5} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required></textarea>
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
