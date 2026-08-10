import React, { useState } from 'react';
import {
    Laptop,
    Server,
    ShieldAlert,
    Palette,
    CheckCircle2,
    ShieldCheck
} from 'lucide-react';
import './TechEcosystem.css';

const CATEGORIES = [
    {
        id: 'frontend',
        label: 'Frontend Dev',
        title: 'Frontend Engineering',
        icon: <Laptop size={24} />,
        desc: 'Creating highly responsive, visually polished, and animated user interfaces with optimized performance.',
        competencies: [
            'Responsive Page Building',
            'GSAP & CSS Web Animations',
            'Component Design Systems'
        ],
        avgSkill: '92%',
        skills: [
            { name: 'React.js', level: 95, status: 'proficient' },
            { name: 'Tailwind CSS', level: 92, status: 'proficient' },
            { name: 'GSAP Animations', level: 90, status: 'proficient' },
            { name: 'HTML5 & CSS3', level: 95, status: 'proficient' }
        ]
    },
    {
        id: 'backend',
        label: 'Backend & DBs',
        title: 'Backend Systems',
        icon: <Server size={24} />,
        desc: 'Engineering robust server infrastructures, secure RESTful APIs, and optimized query systems.',
        competencies: [
            'REST API Architecture',
            'Database Optimization',
            'Scalable Microservices'
        ],
        avgSkill: '84%',
        skills: [
            { name: 'Node.js', level: 88, status: 'proficient' },
            { name: 'Python', level: 82, status: 'proficient' },
            { name: 'PostgreSQL', level: 82, status: 'proficient' },
            { name: 'MongoDB', level: 88, status: 'proficient' }
        ]
    },
    {
        id: 'security',
        label: 'Security & Net',
        title: 'Cybersecurity',
        icon: <ShieldAlert size={24} />,
        desc: 'Auditing, tracking networks, threat identification, and securing digital structures following security compliance guidelines.',
        competencies: [
            'Network Security Auditing',
            'Threat & Risk Assessments',
            'Secure Coding Audits'
        ],
        avgSkill: '73%',
        skills: [
            { name: 'Network Auditing', level: 80, status: 'proficient' },
            { name: 'Linux Systems', level: 70, status: 'proficient' },
            { name: 'SIEM Tools', level: 40, status: 'learning' },
            { name: 'Routing & Configuration', level: 82, status: 'proficient' },
            { name: 'Vulnerability Scans', level: 84, status: 'proficient' },
            { name: 'Cryptography & Encryption', level: 50, status: 'learning' }
        ]
    },
    {
        id: 'design',
        label: 'Design & 3D',
        title: 'Visual Design & 3D',
        icon: <Palette size={24} />,
        desc: 'Modeling photorealistic 3D components, establishing complex interface graphics, Working of captivative Video edits and designing seamless UI journeys.',
        competencies: [
            '3D Modeling',
            'Graphic Designing',
            'Video Editing'
        ],
        avgSkill: '90%',
        skills: [
            { name: 'Figma UI/UX', level: 94, status: 'proficient' },
            { name: 'Adobe Photoshop', level: 90, status: 'proficient' },
            { name: 'Adobe Illustrator', level: 70, status: 'proficient' },
            { name: 'Adobe Premier Pro', level: 88, status: 'proficient' },
            { name: 'Adobe AfterEffects', level: 80, status: 'proficient' },
            { name: 'Capcut & Filmora', level: 91, status: 'proficient' },
            { name: 'Blender 3D', level: 88, status: 'proficient' },
            { name: 'Motion Graphics', level: 82, status: 'learning' }
        ]
    }
];

export default function TechEcosystem() {
    const [activeTab, setActiveTab] = useState('frontend');

    const activeData = CATEGORIES.find(c => c.id === activeTab) || CATEGORIES[0];

    // Radial circumference values for progress loops
    const radius = 15.9155;
    const circumference = 2 * Math.PI * radius; // approx 100

    return (
        <div className="eco-section">
            <div className="eco-header">
                <span className="section-tag">TOOLS &amp; FRAMEWORKS</span>
                <h3 className="eco-title">Technology Ecosystem</h3>
            </div>

            <div className="eco-intro-pill">
                <p className="eco-intro-text">
                    A curated stack I use to build scalable web applications, secure networks, and immersive 3D designs.
                </p>
            </div>

            {/* Tab selection triggers */}
            <div className="eco-tabs-container">
                {CATEGORIES.map(category => (
                    <button
                        key={category.id}
                        onClick={() => setActiveTab(category.id)}
                        className={`eco-tab-btn ${activeTab === category.id ? 'active' : ''}`}
                    >
                        {category.label}
                    </button>
                ))}
            </div>

            {/* Visual Legend indicator */}
            <div className="eco-legend">
                <div className="legend-item">
                    <span className="legend-dot proficient" />
                    <span>Proficient</span>
                </div>
                <div className="legend-item">
                    <span className="legend-dot learning" />
                    <span>Currently Learning</span>
                </div>
            </div>

            {/* Category Main Content Block */}
            <div className="eco-layout-grid">

                {/* Left Side: Summary Card */}
                <div className="eco-left-card">
                    <div className="eco-card-header">
                        <div className="eco-card-icon-wrapper">
                            {activeData.icon}
                        </div>
                        <div className="eco-card-title-block">
                            <h4 className="eco-card-title">{activeData.title}</h4>
                            <span className="eco-card-tag">ECOSYSTEM FOCUS</span>
                        </div>
                    </div>

                    <p className="eco-card-desc">{activeData.desc}</p>

                    <div className="eco-card-competencies">
                        <h5 className="competencies-title">CORE COMPETENCIES</h5>
                        <div className="competencies-list">
                            {activeData.competencies.map((comp, idx) => (
                                <div key={idx} className="competency-item">
                                    <CheckCircle2 size={16} />
                                    <span>{comp}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="eco-card-footer">
                        <div className="eco-card-stat">
                            <span className="stat-label">AVERAGE SKILL</span>
                            <span className="stat-value">{activeData.avgSkill}</span>
                        </div>
                        <span className="verified-badge">
                            <ShieldCheck size={12} style={{ marginRight: '4px', verticalAlign: 'middle', display: 'inline' }} />
                            VERIFIED STACK
                        </span>
                    </div>
                </div>

                {/* Right Side: Skill Progress circles list */}
                <div className="eco-right-grid">
                    {activeData.skills.map((skill) => {
                        const dashOffset = circumference - (skill.level / 100) * circumference;

                        return (
                            <div
                                key={skill.name}
                                className={`eco-skill-card ${skill.status === 'learning' ? 'active-learning' : 'active-proficient'}`}
                            >
                                <svg width="44" height="44" viewBox="0 0 36 36" className="circular-progress">
                                    <path
                                        className="circle-bg"
                                        d="M18 2.0845
                                          a 15.9155 15.9155 0 0 1 0 31.831
                                          a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <path
                                        className={`circle-fill ${skill.status === 'learning' ? 'learning' : 'proficient'}`}
                                        strokeDasharray={`${skill.level}, 100`}
                                        d="M18 2.0845
                                          a 15.9155 15.9155 0 0 1 0 31.831
                                          a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <text x="18" y="20.35" className="circle-text">{skill.level}</text>
                                </svg>
                                <span className="eco-skill-name">{skill.name}</span>
                            </div>
                        );
                    })}
                </div>

            </div>
        </div>
    );
}
