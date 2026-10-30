import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Download, Github, Linkedin, Instagram, Send } from 'lucide-react';

import cutoutImage from './assets/person.png';
import ProjectsSection from './ProjectsSection.jsx';
import Expertise from './Expertise.jsx';
import Education from './Education.jsx';
import Testimonials from './Testimonials.jsx';
import FluidBackground from './FluidBackground.jsx';
import { useScroller } from './SmoothScroll.jsx';


gsap.registerPlugin(ScrollTrigger);




function Home() {
    const scrollerRef = useScroller();
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero Entrance
            const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

            tl.from('.hero-editorial-header', {
                y: -30,
                opacity: 0,
                duration: 1,
            })
                .from('.hero-title-creative', {
                    x: -60,
                    opacity: 0,
                    duration: 1,
                }, '-=0.6')
                .from('.hero-title-portfolio', {
                    y: 80,
                    opacity: 0,
                    duration: 1.2,
                }, '-=0.8')
                .from('.hero-editorial-image', {
                    y: 60,
                    opacity: 0,
                    duration: 1.4,
                    ease: 'power3.out',
                }, '-=1.0');

            // Section Reveals
            const sections = ['#about', '#expertise', '#education', '#projects', '#contact'];

            sections.forEach((selector) => {
                gsap.fromTo(selector,
                    { y: 40 },
                    {
                        scrollTrigger: {
                            trigger: selector,
                            scroller: scrollerRef?.current || undefined,
                            start: 'top 80%',
                            toggleActions: 'play none none none'
                        },
                        y: 0,
                        duration: 1,
                        ease: 'power3.out'
                    }
                );
            });

            // Magnetic Buttons
            const magneticElements = document.querySelectorAll('.btn-primary, .btn-secondary, .social-item-v2, .filter-tab');

            magneticElements.forEach((el) => {
                const onMouseMove = (e) => {
                    const rect = el.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;

                    gsap.to(el, {
                        x: x * 0.3,
                        y: y * 0.3,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                };

                const onMouseLeave = () => {
                    gsap.to(el, {
                        x: 0,
                        y: 0,
                        duration: 0.5,
                        ease: 'elastic.out(1, 0.3)'
                    });
                };

                el.addEventListener('mousemove', onMouseMove);
                el.addEventListener('mouseleave', onMouseLeave);
            });
        });

        return () => ctx.revert();
    }, [scrollerRef]);

    return (
        <div className="app-wrapper">
            <a href="#about" className="skip-link">Skip to main content</a>

            {/* Hero Section — Editorial Poster Layout */}
            <section id='home' className="hero-editorial">
                {/*<FluidBackground />*/}

                {/* Top-right: Date / Name metadata */}
                <div className="hero-editorial-header">
                    <div className="hero-editorial-meta">
                        <span className="hero-meta-date"></span>
                        <span className="hero-meta-name"></span>
                    </div>
                </div>

                {/* Center: "CREATIVE" label + giant PORTFOLIO text */}
                <div className="hero-editorial-center">
                    <span className="hero-title-creative"></span>
                    <div className="hero-title-portfolio-wrapper">
                        <h1 className="hero-title-portfolio">CHRISHEN</h1>
                    </div>
                </div>

                {/* Cutout image — absolute child of section so bottom:0 = bottom of screen */}
                <div className="hero-editorial-image-wrapper">
                    <img
                        src={cutoutImage}
                        alt="Chrishen Silva"
                        className="hero-editorial-image"
                        loading="eager"
                    />
                </div>

            </section>

            {/* About Section */}
            <section id="about" className="section container">
                <div className="section-header">
                    <span className="section-tag">ABOUT ME</span>
                    <h2 className="section-title">Bridging the gap between<br />design and technology.</h2>
                </div>

                <div className="about-content">
                    <div className="about-text-wrapper">
                        <p className="about-main-text">
                            I build high-performance web applications at
                            the intersection of clean, minimal design and robust digital security.
                            Combining full-stack development with a deep focus on cybersecurity and editorial
                            leadership, I engineer seamless user experiences that are architecturally sound, secure,
                            and visually polished.
                        </p>
                    </div>
                </div>
            </section>

            {/* Expertise & Skills Section */}
            <Expertise />

            {/* Education & Certifications Section */}


            {/* Projects Section */}
            <section id="projects" className="section container">
                <div className="section-header">
                    <span className="section-tag">SELECTED WORKS</span>
                    <h2 className="section-title">Case studies and<br />curated projects.</h2>
                </div>
                <ProjectsSection />
            </section>
            <Education />
            {/* Testimonials Section 
            <Testimonials />*/}

            {/* Contact Section */}
            <section id="contact" className="section container">
                <div className="section-header">
                    <span className="section-tag">GET IN TOUCH</span>
                    <h2 className="section-title">Let's craft something<br />extraordinary together.</h2>
                </div>

                <div className="contact-wrapper">
                    <div className="contact-info-v2">
                        <p className="contact-description">
                            Currently available for new projects and creative collaborations.
                            Let's build a digital experience that stands out.
                        </p>

                        <div className="direct-contact">
                            <span className="contact-label-v2">EMAIL ME</span>
                            <a href="mailto:Chrishensilva@gmail.com" className="contact-email-v2">
                                Chrishensilva@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className="contact-form-column">
                        <form className="contact-form-v2" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group-v2">
                                <input type="text" placeholder="YOUR NAME" required />
                            </div>
                            <div className="form-group-v2">
                                <input type="email" placeholder="YOUR EMAIL" required />
                            </div>
                            <div className="form-group-v2">
                                <textarea placeholder="PROJECT DETAILS" rows="4" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-full">
                                SEND MESSAGE <Send size={16} />
                            </button>
                        </form>
                    </div>

                    <div className="social-links-column">
                        <span className="contact-label-v2">FOLLOW ME</span>
                        <div className="social-list-v2">
                            <a href="https://github.com/Chrishensilva" target="_blank" rel="noreferrer" className="social-item-v2">
                                GITHUB <ArrowRight size={16} />
                            </a>
                            <a href="https://www.linkedin.com/in/chrishen-silva-b34b6b251/" target="_blank" rel="noreferrer" className="social-item-v2">
                                LINKEDIN <ArrowRight size={16} />
                            </a>
                            <a href="https://www.instagram.com/chrishen_silva/" target="_blank" rel="noreferrer" className="social-item-v2">
                                INSTAGRAM <ArrowRight size={16} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer-v2">
                <div className="container footer-content">
                    <p>DESIGNED & BUILT BY CHRISHEN SILVA</p>
                    <p>© {new Date().getFullYear()}</p>
                </div>
            </footer>
        </div>
    );
}

export default Home;
