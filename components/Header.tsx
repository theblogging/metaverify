import Link from 'next/link';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          Meta Verified Service
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-slate-600 hover:text-primary transition-colors font-medium">
            Home
          </Link>
          <Link href="/about" className="text-slate-600 hover:text-primary transition-colors font-medium">
            About Us
          </Link>
          <Link href="/contact" className="text-slate-600 hover:text-primary transition-colors font-medium">
            Contact Us
          </Link>
          <Link href="/privacy-policy" className="text-slate-600 hover:text-primary transition-colors font-medium">
            Privacy Policy
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;