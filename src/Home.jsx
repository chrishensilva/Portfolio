import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Download, Github, Linkedin, Instagram, ArrowUp, Send } from 'lucide-react';

import myimage from './assets/new.jpg';
import Navbar from './Navbar.jsx';
import ProjectsSection from './ProjectsSection.jsx';
import Expertise from './Expertise.jsx';
import Testimonials from './Testimonials.jsx';


gsap.registerPlugin(ScrollTrigger);




function Home() {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero Entrance
            const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

            tl.from('.hero-title-line', {
                y: 100,
                opacity: 0,
                duration: 1.2,
                stagger: 0.1
            })
                .from('.hero-tagline', {
                    y: 20,
                    opacity: 0,
                    duration: 1
                }, '-=0.8')
                .from('.hero-cta-group', {
                    y: 20,
                    opacity: 0,
                    duration: 1
                }, '-=0.8')
                .from('.hero-image-container', {
                    scale: 1.1,
                    opacity: 0,
                    duration: 1.5
                }, '-=1.2');

            // Section Reveals
            const sections = ['#about', '#expertise', '#projects', '#testimonials', '#contact'];

            sections.forEach((selector) => {
                gsap.from(selector, {
                    scrollTrigger: {
                        trigger: selector,
                        start: 'top 80%',
                        toggleActions: 'play none none none'
                    },
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    ease: 'power3.out'
                });
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
    }, []);

    return (
        <div className="app-wrapper">
            <a href="#about" className="skip-link">Skip to main content</a>


            <Navbar />

            {showScrollTop && (
                <button
                    className="back-to-top-btn"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    title="Back to top"
                >
                    <ArrowUp size={20} />
                </button>
            )}

            {/* Hero Section */}
            <section id='home' className="hero container">
                <div className='hero-content'>
                    <div className='hero-text'>
                        <div className="hero-title-wrapper">
                            <h1 className='hero-title-line'>I CRAFT DIGITAL</h1>
                            <h1 className='hero-title-line gradient-text'>EXPERIENCES</h1>
                            <h1 className='hero-title-line'>THAT MATTER.</h1>
                        </div>

                        <p className='hero-tagline'>
                            Hi, I'm Chrishen Silva. A modern developer and designer focused on
                            building products that are visually striking and technically seamless.
                        </p>

                        <div className='hero-cta-group'>
                            <a href='#projects' className='btn btn-primary'>
                                View My Work <ArrowRight size={16} style={{ marginLeft: '8px' }} />
                            </a>
                            <button className='btn btn-secondary' onClick={() => {
                                const link = document.createElement("a");
                                link.href = "./CV.pdf";
                                link.download = "Chrishen_Resume.pdf";
                                link.click();
                            }}>
                                <Download size={16} style={{ marginRight: '8px' }} /> Download CV
                            </button>
                        </div>
                    </div>

                    <div className='hero-image-container'>
                        <div className='hero-image-reveal'>
                            <img src={myimage} alt="Chrishen Silva" loading="lazy" />
                        </div>
                        <div className="hero-badge">
                            <span>AVAILABLE FOR WORK</span>
                        </div>
                    </div>
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
                            I am a creative developer and designer based in Sri Lanka, specializing in building
                            high-end digital experiences. With a background in UI/UX, 3D rendering, and
                            frontend development, I craft products that are as functional as they are beautiful.
                        </p>
                    </div>
                </div>
            </section>

            {/* Expertise & Skills Section */}
            <Expertise />

            {/* Projects Section */}
            <section id="projects" className="section container">
                <div className="section-header">
                    <span className="section-tag">SELECTED WORKS</span>
                    <h2 className="section-title">Case studies and<br />curated projects.</h2>
                </div>
                <ProjectsSection />
            </section>

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
