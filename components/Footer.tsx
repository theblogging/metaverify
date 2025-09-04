import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t mt-12">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Meta Verified Service. All Rights Reserved.
          </p>
          <div className="flex mt-4 sm:mt-0 space-x-6">
            <Link href="/about" className="text-sm text-gray-500 hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm text-gray-500 hover:text-primary transition-colors">
              Contact
            </Link>
            <Link href="/privacy-policy" className="text-sm text-gray-500 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
