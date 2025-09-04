import Link from 'next/link';
import React from 'react';

const LogoIcon = () => (
    <svg
        className="w-8 h-8 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.917l.004.004.004.003.001.001a12.017 12.017 0 0017.99-7.502c0-.366-.01-.73-.028-1.092a11.956 11.956 0 00-2.35-4.396z" />
    </svg>
);

const SocialIcon = ({ href, children, label }: { href: string; children: React.ReactNode, label: string }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="text-slate-500 hover:text-purple-600 transition-colors group"
    >
        <div className="p-2 rounded-full bg-slate-100 group-hover:bg-purple-100/50 group-hover:shadow-md group-hover:shadow-purple-200 transition-all duration-300">
            {children}
        </div>
    </a>
);

const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);

const GitHubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);


const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-50 via-white to-slate-100 mt-20 pt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 sm:p-10 border border-slate-300/50">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 gap-x-8">
                    <div className="md:col-span-4 flex flex-col items-start">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                                <LogoIcon />
                            </div>
                            <span className="text-xl font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                                Meta Verified
                            </span>
                        </Link>
                        <p className="text-slate-500 mt-4 max-w-xs font-medium">
                           Streamlining your social media verification process with expertise and clarity.
                        </p>
                        <div className="flex space-x-2 mt-6">
                            <SocialIcon href="#" label="Twitter"><TwitterIcon/></SocialIcon>
                            <SocialIcon href="#" label="GitHub"><GitHubIcon/></SocialIcon>
                            <SocialIcon href="#" label="LinkedIn"><LinkedInIcon/></SocialIcon>
                        </div>
                    </div>

                    <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                                Product
                            </h3>
                            <ul className="mt-4 space-y-2">
                                <li><Link href="/pricing" className="font-medium text-slate-600 hover:text-slate-900 transition-colors">Pricing</Link></li>
                                <li><Link href="/how-it-works" className="font-medium text-slate-600 hover:text-slate-900 transition-colors">How It Works</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                                Company
                            </h3>
                            <ul className="mt-4 space-y-2">
                                <li><Link href="/about" className="font-medium text-slate-600 hover:text-slate-900 transition-colors">About Us</Link></li>
                                <li><Link href="/contact" className="font-medium text-slate-600 hover:text-slate-900 transition-colors">Contact</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                                Legal
                            </h3>
                            <ul className="mt-4 space-y-2">
                                <li><Link href="/privacy-policy" className="font-medium text-slate-600 hover:text-slate-900 transition-colors">Privacy Policy</Link></li>
                                <li><Link href="/terms-of-service" className="font-medium text-slate-600 hover:text-slate-900 transition-colors">Terms of Service</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="border-t border-slate-200 mt-10 pt-6 text-center">
                    <p className="text-sm text-slate-400">
                        © {new Date().getFullYear()} Meta Verified Service. All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
