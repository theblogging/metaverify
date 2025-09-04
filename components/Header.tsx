import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          Meta Verified Service
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-600 hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-primary transition-colors">
            About Us
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-primary transition-colors">
            Contact Us
          </Link>
          <Link href="/privacy-policy" className="text-gray-600 hover:text-primary transition-colors">
            Privacy Policy
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
