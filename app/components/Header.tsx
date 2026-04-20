"use client";

import React, { useState, useEffect } from "react";
import ShimmerButton from './ui/shimmer-button';
import Link from 'next/link';
import { Menu as MenuIcon, X, Download } from 'lucide-react';

const Header = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Add scroll event listener to change navbar appearance on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        handleResize(); // Set initial value
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="sticky top-0 z-50">
            <div className={`w-full px-4 py-2 transition-all duration-300 ${scrolled ? 'pt-2 pb-2' : 'pt-4 pb-4'}`}>
                <div className={`max-w-7xl mx-auto transition-all duration-300 rounded-full ${scrolled ? 'backdrop-blur-lg bg-white/60 shadow-md border border-white/40' : 'backdrop-blur-sm bg-white/40'}`}>
                    <div className='flex justify-between items-center px-4 gap-2 sm:px-6 py-2 tracking-tighter'>
                        {/* Logo Section */}
                        <Link href="/">
                            <img src='./logo.png' alt='Quant Insider' className='h-6 sm:h-8' />
                        </Link>

                        {/* Navigation Section - Hidden on mobile */}
                        <div className='hidden md:flex flex-1 justify-center space-x-2 sm:space-x-4 lg:space-x-6 items-center font-sans text-sm sm:text-base text-gray-900'>
                            <Link href="/education" className="hover:text-indigo-600 hover:font-bold hover:underline transition-colors">
                                <span>Education</span>
                            </Link>
                            <Link href="/enterprise" className="hover:text-indigo-600 hover:font-bold hover:underline transition-colors">
                                <span>Enterprise</span>
                            </Link>
                            <Link href="/events" className="hover:text-indigo-600 hover:font-bold hover:underline transition-colors">
                                <span>Events</span>
                            </Link>
                            <Link href="/talks" className="hover:text-indigo-600 hover:font-bold hover:underline transition-colors">
                                <span>Talks</span>
                            </Link>
                            <Link href="/blogs" className="hover:text-indigo-600 hover:font-bold hover:underline transition-colors">
                                <span>Blogs</span>
                            </Link>
                            <Link href="/team" className="hover:text-indigo-600 hover:font-bold hover:underline transition-colors">
                                <span>Team</span>
                            </Link>
                            <Link href="/hiring" className="hidden lg:block hover:text-indigo-600 hover:font-bold hover:underline transition-colors">
                                <span>Hiring</span>
                            </Link>
                            <Link href="/about" className="hidden lg:block hover:text-indigo-600 hover:font-bold hover:underline transition-colors">
                                <span>About</span>
                            </Link>
                            <button className="hidden lg:block hover:text-indigo-600 hover:font-bold hover:underline transition-colors" onClick={() => scrollToSection("contact-us")}>
                                <span>Contact</span>
                            </button>
                        </div>

                        {/* Mobile Menu Button and App Link */}
                        <div className="flex items-center space-x-3">
                            {/* Education App Link - Only visible on mobile */}
                            <a 
                                href="https://play.google.com/store/apps/details?id=co.khal.fzpeo&hl=en-US&pli=1" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center text-xs gap-1 bg-indigo-600/80 text-white py-1.5 px-2.5 rounded-full backdrop-blur-sm hover:bg-indigo-700/90 transition-colors"
                            >
                                <Download size={14} />
                                <span>Education App</span>
                            </a>
                            
                            {/* Menu Button - Mobile only */}
                            <button onClick={toggleMenu} className="text-indigo-900 md:hidden">
                                {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
                            </button>
                        </div>

                        {/* Button Section */}
                        <Link href="https://quantinsider.algobulls.com/" target='_blank' className="hidden sm:block">
                            <ShimmerButton className="py-1.5 px-4 text-sm">Algo Trading Platform</ShimmerButton>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mobile Sidebar Menu */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-50 backdrop-blur-xl bg-white/80 md:hidden">
                    <div className="flex flex-col h-full p-6">
                        <div className="flex justify-end mb-6">
                            <button onClick={toggleMenu} className="text-indigo-900 bg-white/70 p-2 rounded-full backdrop-blur-lg">
                                <X size={24} />
                            </button>
                        </div>
                        <div className="flex flex-col space-y-6 text-lg font-medium text-indigo-900">
                            <Link href="/education" onClick={toggleMenu} className="hover:text-indigo-600 transition-colors">Education</Link>
                            <Link href="/enterprise" onClick={toggleMenu} className="hover:text-indigo-600 transition-colors">Enterprise</Link>
                            <Link href="/events" onClick={toggleMenu} className="hover:text-indigo-600 transition-colors">Events</Link>
                            <Link href="/talks" onClick={toggleMenu} className="hover:text-indigo-600 transition-colors">Talks</Link>
                            <Link href="/blogs" onClick={toggleMenu} className="hover:text-indigo-600 transition-colors">Blogs</Link>
                            <Link href="/team" onClick={toggleMenu} className="hover:text-indigo-600 transition-colors">Team</Link>
                            <Link href="/hiring" onClick={toggleMenu} className="hover:text-indigo-600 transition-colors">Hiring Services</Link>
                            <Link href="/about" onClick={toggleMenu} className="hover:text-indigo-600 transition-colors">About</Link>
                            <button onClick={() => {
                                toggleMenu();
                                scrollToSection("contact-us");
                            }} className="hover:text-indigo-600 transition-colors text-left">Contact Us</button>
                            
                            {/* Mobile App Link in Menu */}
                            <a 
                                href="https://play.google.com/store/apps/details?id=co.khal.fzpeo&hl=en-US&pli=1" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors"
                                onClick={toggleMenu}
                            >
                                <Download size={20} />
                                <span>Download Education App</span>
                            </a>
                            
                            <Link href="https://quantinsider.algobulls.com/" target='_blank' onClick={toggleMenu} className="mt-6">
                                <ShimmerButton>Algo Trading Platform</ShimmerButton>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;

