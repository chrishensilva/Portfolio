import { Layout, Code, Box, Palette, Zap, Cpu } from 'lucide-react';

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
                <span className="section-tag">SKILLS & EXPERTISE</span>
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
        </section>
    );
};

export default Expertise;
