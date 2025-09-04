import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Logo = () => (
    <Link href="/" className="flex items-center gap-3" aria-label="Go to homepage">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.917l.004.004.004.003.001.001a12.017 12.017 0 0017.99-7.502c0-.366-.01-.73-.028-1.092a11.956 11.956 0 00-2.35-4.396z" /></svg>
        </div>
        <span className="text-xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Meta Verified
        </span>
    </Link>
);

const NavLinks = ({ className, onClick }: { className?: string, onClick?: () => void }) => (
    <>
        <Link href="/" className={className} onClick={onClick}>Home</Link>
        <Link href="/about" className={className} onClick={onClick}>About Us</Link>
        <Link href="/how-it-works" className={className} onClick={onClick}>How It Works</Link>
        <Link href="/pricing" className={className} onClick={onClick}>Pricing</Link>
        <Link href="/contact" className={className} onClick={onClick}>Contact</Link>
    </>
);

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const closeMenu = () => setIsOpen(false);

    return (
        <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-slate-300/50">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Logo />
                
                <div className="hidden md:flex items-center space-x-8">
                    <NavLinks className="font-medium text-slate-600 hover:text-indigo-600 transition-colors" />
                </div>
                
                <div className="md:hidden">
                    <button onClick={toggleMenu} aria-label="Toggle menu" className="p-2 -mr-2">
                        {isOpen ? <X className="h-6 w-6 text-slate-700" /> : <Menu className="h-6 w-6 text-slate-700" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleMenu} aria-hidden="true"></div>
            <div className={`fixed top-0 right-0 h-full w-4/5 max-w-sm z-50 bg-white shadow-xl transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex justify-between items-center p-6 border-b border-slate-200">
                    <span className="font-semibold text-slate-700">Menu</span>
                    <button onClick={toggleMenu} aria-label="Close menu" className="p-2 -mr-2">
                        <X className="h-6 w-6 text-slate-500" />
                    </button>
                </div>
                <div className="flex flex-col p-6 space-y-6">
                    <NavLinks className="text-lg font-medium text-slate-700 hover:text-indigo-600" onClick={closeMenu} />
                </div>
            </div>
        </header>
    );
};

export default Header;
