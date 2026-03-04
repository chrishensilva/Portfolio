import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Instagram } from 'lucide-react';
import { gsap } from 'gsap';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            gsap.to('.mobile-menu', {
                x: 0,
                duration: 0.5,
                ease: 'power3.out'
            });
            gsap.from('.mobile-link', {
                y: 20,
                opacity: 0,
                stagger: 0.1,
                delay: 0.2,
                duration: 0.4
            });
        } else {
            gsap.to('.mobile-menu', {
                x: '100%',
                duration: 0.5,
                ease: 'power3.in'
            });
        }
    }, [isOpen]);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`navigation ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <div className="logo">
                    <a href="#home">Chrishen<span>.</span></a>
                </div>

                {/* Desktop Links */}
                <div className="links desktop-only">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="nav-link">
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className="nav-actions">
                    <div className="social-minimal desktop-only">
                        <a href="https://github.com/chrishensilva" target="_blank" rel="noreferrer"><Github size={18} /></a>
                        <a href="https://linkedin.com/in/chrishen-silva-a42b491b2" target="_blank" rel="noreferrer"><Linkedin size={18} /></a>
                    </div>
                    <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
                <div className="mobile-menu-content">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="mobile-link"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="mobile-socials">
                        <a href="https://github.com/chrishensilva" target="_blank" rel="noreferrer"><Github size={24} /></a>
                        <a href="https://linkedin.com/in/chrishen-silva-a42b491b2" target="_blank" rel="noreferrer"><Linkedin size={24} /></a>
                        <a href="https://instagram.com/chrishen_silva" target="_blank" rel="noreferrer"><Instagram size={24} /></a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
