function Projects({ proimage, proHead, prodesc, prolink, cardType }) {
    return (
        <div className={cardType === 'graphic' ? 'graphiccard' : 'projectcard'}>
            <img src={proimage} className="projimg" />
            {cardType !== 'graphic' && (
                <div className="projecttext">
                    <h2>{proHead}</h2>
                    <p>{prodesc}</p>
                    {prolink && (
                        <a href={prolink} target="_blank" className="project-link">
                            View Project
                        </a>
                    )}
                </div>
            )}
        </div>
    );
}
export default Projects;