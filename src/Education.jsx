import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Award, Shield, Calendar, CheckCircle, Clipboard, Database, Code, ExternalLink } from 'lucide-react';
import { useScroller } from './SmoothScroll.jsx';

import certCisco from './assets/certificates/cisco-cert.png';
import certFrontendMasters from './assets/certificates/fm-cert.png';
import certGoogle from './assets/certificates/google-cert.png';

const certifications = [
    {
        id: 'cisco-cybersec',
        title: 'Introduction to\nCybersecurity',
        issuer: 'CISCO',
        issuerClass: 'cisco',
        org: 'Cisco Networking Academy',
        date: 'Issued May 2026',
        credentialUrl: 'https://www.credly.com/badges/fb603213-f169-45c4-b2c1-b76bbd3c72e1/linked_in_profile',
        skills: ['Network Security', 'Threat Detection', 'Cyber Hygiene'],
        iconType: 'shield',
        image: certCisco,
        description: 'Learned the foundational concepts of cybersecurity, including how to protect personal data and privacy online, threat identification, and fundamental security hygiene.'
    },
    {
        id: 'qdrant-essentials',
        title: 'Qdrant\nEssentials',
        issuer: 'QDRANT',
        issuerClass: 'qdrant',
        org: 'Qdrant',
        date: 'Issued Feb 2026',
        credentialId: 'QDRANT-778A2F09',
        credentialUrl: 'https://train.qdrant.dev/certificate/QDRANT-778A2F09',
        skills: ['Vector Databases', 'Semantic Search', 'AI Engineering'],
        iconType: 'database',
        image: null,
        description: 'Mastered the basics of vector databases and semantic search using Qdrant, enabling the development of advanced AI applications and scalable similarity search.'
    },
    {
        id: 'fm-javascript',
        title: 'Getting Started\nwith JavaScript, v3',
        issuer: 'FRONTEND MASTERS',
        issuerClass: 'frontendmasters',
        org: 'Frontend Masters',
        date: 'Issued Dec 2025',
        credentialId: '740b3e4e4e-mgSPAsYSME',
        credentialUrl: 'https://static.frontendmasters.com/ud/c/740b3e4e4e/mgSPAsYSME/getting-started-javascript-v3.pdf',
        skills: ['JavaScript', 'Web Development', 'Programming Foundations'],
        iconType: 'code',
        image: certFrontendMasters,
        description: 'Acquired a solid foundation in JavaScript, covering fundamental programming concepts, DOM manipulation, syntax, and basic web development principles.'
    },
    {
        id: 'google-cybersec',
        title: 'Foundations of\nCybersecurity',
        issuer: 'GOOGLE',
        issuerClass: 'google',
        org: 'Google Career Certificates',
        date: 'Issued Jun 2025',
        credentialId: 'YRFVJQCUQ8KM',
        credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/YRFVJQCUQ8KM',
        skills: ['Security Foundations', 'Risk Management', 'SIEM Tools'],
        iconType: 'award',
        image: certGoogle,
        description: 'Developed a comprehensive understanding of cybersecurity principles, risk management, and the use of SIEM tools to protect digital assets against vulnerabilities.'
    },
];

const renderIcon = (type) => {
    switch (type) {
        case 'shield':
            return <Shield size={15} />;
        case 'database':
            return <Database size={15} />;
        case 'code':
            return <Code size={15} />;
        case 'award':
        default:
            return <Award size={15} />;
    }
};

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
    const sectionRef = useRef(null);
    const wrapperRef = useRef(null);
    const scrollerRef = useScroller(); // smooth-scroll wrapper element

    useEffect(() => {
        const section = sectionRef.current;
        const wrapper = wrapperRef.current;
        if (!section || !wrapper) return;

        // The smooth-scroll fixed container — pass as `scroller` to every ST
        const scroller = scrollerRef?.current ?? undefined;

        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            /* ── Desktop: horizontal pin ── */
            mm.add('(min-width: 1024px)', () => {
                const scrollTween = gsap.to(wrapper, {
                    x: () => -(wrapper.scrollWidth - window.innerWidth),
                    ease: 'none',
                    scrollTrigger: {
                        trigger: section,
                        scroller,
                        pin: true,
                        start: 'top top',
                        scrub: 1.2,
                        end: () => `+=${wrapper.scrollWidth - window.innerWidth}`,
                        invalidateOnRefresh: true,
                        anticipatePin: 1,
                        pinType: 'transform',
                    },
                });

                /* Cert cards triggered when panel 2 sweeps in */
                gsap.fromTo('.cert-card',
                    { y: 60 },
                    {
                        y: 0,
                        duration: 0.9,
                        stagger: 0.25,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: '.edu-panel-certs',
                            scroller,
                            containerAnimation: scrollTween,
                            start: 'left center',
                            toggleActions: 'play none none none',
                        },
                    }
                );

                /* Parallax background word */
                gsap.fromTo(
                    '.edu-bg-word',
                    { x: 0 },
                    {
                        x: -400,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: section,
                            scroller,
                            start: 'top top',
                            end: 'bottom top',
                            scrub: 3,
                        },
                    }
                );

                /* Floating orbs */
                gsap.to('.edu-orb-1', {
                    y: -120,
                    x: 80,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: section,
                        scroller,
                        start: 'top top',
                        end: 'bottom top',
                        scrub: 2,
                    },
                });
                gsap.to('.edu-orb-2', {
                    y: 100,
                    x: -80,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: section,
                        scroller,
                        start: 'top top',
                        end: 'bottom top',
                        scrub: 3,
                    },
                });
            });

            /* ── Mobile: simple vertical scroll animations ── */
            mm.add('(max-width: 1023px)', () => {
                gsap.fromTo('.cert-card',
                    { y: 50 },
                    {
                        y: 0,
                        duration: 0.8,
                        stagger: 0.2,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: '.edu-certs-right',
                            scroller,
                            start: 'top 85%',
                            toggleActions: 'play none none none',
                        },
                    }
                );
            });

            /* ── Shared animations ── */
            gsap.fromTo('.edu-header-animate',
                { y: 40 },
                {
                    y: 0,
                    duration: 1.2,
                    stagger: 0.15,
                    ease: 'power4.out',
                    scrollTrigger: {
                        trigger: section,
                        scroller,
                        start: 'top 75%',
                        toggleActions: 'play none none none',
                    },
                }
            );

            gsap.fromTo('.edu-degree-card',
                { x: 60 },
                {
                    x: 0,
                    duration: 1.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.edu-degree-card',
                        scroller,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        }, section);

        // Delayed refresh so pin spacers recalculate after proxy is ready
        const tid = setTimeout(() => ScrollTrigger.refresh(), 200);

        return () => {
            clearTimeout(tid);
            ctx.revert();
        };
    }, [scrollerRef]);
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).catch(() => { });
    };
    return (
        <section id="education" className="edu-section" ref={sectionRef}>
            {/* ── Decorative background elements ── */}
            <div className="edu-bg-word" aria-hidden="true">KNOWLEDGE</div>
            <div className="edu-orb edu-orb-1" aria-hidden="true" />
            <div className="edu-orb edu-orb-2" aria-hidden="true" />

            {/* ── Horizontal panels wrapper ── */}
            <div className="edu-panels-wrapper" ref={wrapperRef}>

                {/* ━━━ Panel 1 — Header + Education Card ━━━ */}
                <div className="edu-panel edu-panel-main">
                    {/* Left: section header */}
                    <div className="edu-left-content">
                        <span className="section-tag edu-header-animate">ACADEMIC JOURNEY</span>
                        <h2 className="edu-main-title edu-header-animate">
                            Education &<br />Certifications.
                        </h2>
                        <p className="edu-intro-text edu-header-animate">
                            Building a strong foundation in technology through
                            formal education and industry‑recognised certifications.
                        </p>
                        <div className="edu-scroll-hint edu-header-animate">
                            <span>SCROLL TO EXPLORE</span>
                            <div className="edu-scroll-line">
                                <div className="edu-scroll-dot" />
                            </div>
                        </div>
                    </div>

                    {/* Right: university card */}
                    <div className="edu-right-content">
                        <div className="edu-degree-card">
                            <div className="edu-card-glow" aria-hidden="true" />

                            <div className="edu-card-top">
                                <div className="edu-card-icon">
                                    <GraduationCap size={28} />
                                </div>
                                <div className="edu-status-badge">UNDERGRADUATE</div>
                            </div>

                            <h3 className="edu-institution">University of Vavuniya</h3>

                            <div className="edu-degree-name">
                                Bachelor of Information and<br />Communication Technology
                            </div>

                            <div className="edu-divider" />

                            <div className="edu-field-row">
                                <span className="edu-field-label">FIELD OF STUDY</span>
                                <span className="edu-field-value">Information Technology</span>
                            </div>

                            <div className="edu-card-tags">
                                <span className="edu-tag">Information Technology</span>
                                <span className="edu-tag">Software Engineering</span>
                                <span className="edu-tag">Networking</span>
                                <span className="edu-tag">Cybersecurity</span>
                                <span className="edu-tag">Web Development</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ━━━ Panel 2 — Certifications ━━━ */}
                <div className="edu-panel edu-panel-certs">
                    {/* Copy button styling */
                        /*
                        .copy-btn {
                            background: transparent;
                            border: none;
                            cursor: pointer;
                            color: #C8FF00; 
                            margin-left: 6px;
                            display: inline-flex;
                            align-items: center;
                            justify-content: center;
                            padding: 2px;
                        }
                        .copy-btn:hover {
                            opacity: 0.8;
                        }
                        */
                    }
                    {/* Left: certs header */}
                    <div className="edu-certs-left">
                        <span className="section-tag">LICENSES &amp; CERTIFICATIONS</span>
                        <h2 className="edu-main-title">Industry<br />Recognised.</h2>
                        <p className="edu-intro-text">
                            Validated skills through globally<br />recognised certification programmes.
                        </p>
                    </div>

                    {/* Right: cert cards */}
                    <div className="edu-certs-right">
                        {certifications.map((cert) => (
                            <div key={cert.id} className={`cert-card cert-${cert.issuerClass}`}>
                                {cert.image && (
                                    <div className="cert-image-container">
                                        <img src={cert.image} alt={`${cert.title} Certificate`} className="cert-image" />
                                    </div>
                                )}
                                <div className="cert-top-row">
                                    <div className={`cert-issuer-pill cert-pill-${cert.issuerClass}`}>
                                        {renderIcon(cert.iconType)}
                                        <span>{cert.issuer}</span>
                                    </div>
                                    <div className="cert-issued-date">
                                        <Calendar size={13} />
                                        <span>{cert.date}</span>
                                    </div>
                                </div>

                                <h3 className="cert-title">
                                    {cert.title.split('\n').map((line, idx) => (
                                        <React.Fragment key={idx}>
                                            {line}
                                            {idx < cert.title.split('\n').length - 1 && <br />}
                                        </React.Fragment>
                                    ))}
                                </h3>
                                <p className="cert-org">{cert.org}</p>
                                
                                {cert.description && (
                                    <p className="cert-description">{cert.description}</p>
                                )}

                                {cert.credentialId && (
                                    <div className="cert-credential-row">
                                        <span className="cert-cred-label">CREDENTIAL ID</span>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <code className="cert-cred-id">{cert.credentialId}</code>
                                            <button className="copy-btn" onClick={() => copyToClipboard(cert.credentialId)} aria-label="Copy credential ID">
                                                <Clipboard size={14} />
                                            </button>
                                        </div>
                                    </div>
                                )}

                                <div className="cert-skills-row">
                                    {cert.skills.map((skill, idx) => (
                                        <span key={idx} className="cert-skill-tag">{skill}</span>
                                    ))}
                                </div>

                                <div className="cert-card-line" />
                                {cert.credentialUrl ? (
                                    <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="cert-verify-row cert-verify-link">
                                        <CheckCircle size={14} />
                                        <span>Verify Certificate</span>
                                        <ExternalLink size={12} style={{ marginLeft: '4px' }} />
                                    </a>
                                ) : (
                                    <div className="cert-verify-row">
                                        <CheckCircle size={14} />
                                        <span>Verified Certificate</span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Education;
