import { ExternalLink, ArrowUpRight } from 'lucide-react';

function Projects({ proimage, proHead, prodesc, prolink, role, tech }) {
    return (
        <div className="project-card-v2">
            <div className="project-image-v2">
                <img src={proimage} alt={proHead} loading="lazy" />
                {prolink && (
                    <a href={prolink} target="_blank" rel="noreferrer" className="project-hover-btn">
                        VIEW PROJECT <ArrowUpRight size={16} />
                    </a>
                )}
            </div>
            <div className="project-details-v2">
                <div className="project-header-v2">
                    <h3 className="project-title-v2">{proHead}</h3>
                    <span className="project-role-v2">{role || 'Developer'}</span>
                </div>
                <p className="project-desc-v2">{prodesc}</p>
                <div className="project-tech-v2">
                    {tech && tech.map((t, i) => (
                        <span key={i} className="tech-tag-v2">{t}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;