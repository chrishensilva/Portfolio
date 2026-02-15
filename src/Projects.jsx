function Projects({ proimage, proHead, prodesc, prolink }) {
    return (
        <div className="project-card">
            <div className="project-img-wrapper">
                <img src={proimage} alt={proHead || "Project"} />
            </div>
            {(proHead || prodesc) && (
                <div className="project-info">
                    {proHead && <h3>{proHead}</h3>}
                    {prodesc && <p>{prodesc}</p>}
                    {prolink && (
                        <a href={prolink} target="_blank" rel="noreferrer" className="project-link">
                            View Project <span>→</span>
                        </a>
                    )}
                </div>
            )}
        </div>
    );
}

export default Projects;