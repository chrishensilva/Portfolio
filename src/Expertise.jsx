import { Layout, Code, Box, Palette, Zap, Cpu } from 'lucide-react';
import SolarSystem from './SolarSystem';
import TechEcosystem from './TechEcosystem';

const Expertise = () => {
    const skillGroups = [
        {
            title: "Design",
            icon: <Palette size={24} />,
            skills: ["UI/UX Design", "Figma", "Design Systems", "Photography"]
        },
        {
            title: "Development",
            icon: <Code size={24} />,
            skills: ["React.js", "JavaScript (ES6+)", "Vite", "Tailwind CSS", "GSAP"]
        },
        {
            title: "3D & Motion",
            icon: <Zap size={24} />,
            skills: ["Blender", "3D Modeling", "Cycles/Octane", "Motion Graphics"]
        }
    ];

    return (
        <section id="expertise" className="section container">
            <div className="section-header">
                <span className="section-tag">SKILLS &amp; EXPERTISE</span>
                <h2 className="section-title">A versatile toolkit for<br />the modern web.</h2>
            </div>

            <div className="expertise-grid">
                {skillGroups.map((group, index) => (
                    <div key={index} className="expertise-card">
                        <div className="expertise-icon">
                            {group.icon}
                        </div>
                        <h3 className="expertise-title">{group.title}</h3>
                        <div className="expertise-list">
                            {group.skills.map((skill, sIndex) => (
                                <span key={sIndex} className="expertise-item">{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Solar System Skills Orbit */}
            <div className="ss-section-label">
                <span className="section-tag" style={{ marginBottom: '0.5rem', display: 'block' }}>SKILL ORBIT</span>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', textAlign: 'center', marginBottom: 0 }}>
                    Each planet represents a core technology in my stack
                </p>
            </div>
            <SolarSystem />

            {/* Interactive Technology Ecosystem */}
            <TechEcosystem />
        </section>
    );
};

export default Expertise;
