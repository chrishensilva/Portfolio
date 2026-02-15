
import myimage from './assets/new.jpg';
import Card from './Card.jsx';
import ProjectsSection from './ProjectsSection.jsx';

import pic1 from './assets/a.png';
import pic2 from './assets/b.png';
import pic3 from './assets/c.png';

// Social Logos
import fb from './assets/logo/fb.png';
import inster from './assets/logo/inster.png';
import linked from './assets/logo/in.png';
import git from './assets/logo/git.png';


function Home() {

    return (
        <div className="app-wrapper">
            {/* Navigation */}
            <nav className="navigation">
                <div className="nav-container">
                    <div className="logo">
                        <h3>Portfolio<span>.</span></h3>
                    </div>
                    <div className="links">
                        <a href="#home">Home</a>
                        <a href="#aboutme">About</a>
                        <a href="#project">Projects</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id='home' className="hero container">
                <div className='hero-content'>
                    <div className='hero-text' data-aos="fade-right">
                        <h1 className='myname'>Hi, I'm <span className="gradient-text">Chrishen Silva</span></h1>
                        <h2 className='hero-role'>UI/UX Designer | Web Developer | Creator</h2>

                        <div className='hero-buttons'>
                            <a href='#aboutme' className='btn btn-primary'>About Me</a>
                            <button className='btn btn-secondary' onClick={() => {
                                const link = document.createElement("a");
                                link.href = "./CV(Chrishen).pdf";
                                link.download = "Chrishen_Resume.pdf";
                                link.click();
                            }}>Download Resume</button>
                        </div>

                        <div className='social-links'>
                            <a href='https://web.facebook.com/chrishen.silva.2025' className="social-icon" target="_blank" rel="noreferrer">
                                <img src={fb} alt="Facebook" />
                            </a>
                            <a href='https://www.linkedin.com/in/chrishen-silva-a42b491b2' className="social-icon" target="_blank" rel="noreferrer">
                                <img src={linked} alt="LinkedIn" />
                            </a>
                            <a href='https://www.instagram.com/chrishen_silva' className="social-icon" target="_blank" rel="noreferrer">
                                <img src={inster} alt="Instagram" />
                            </a>
                            <a href='https://github.com/chrishensilva' className="social-icon" target="_blank" rel="noreferrer">
                                <img src={git} alt="GitHub" />
                            </a>
                        </div>
                    </div>

                    <div className='hero-image-wrapper' data-aos="fade-left">
                        <div className='hero-img-box'>
                            <img src={myimage} alt="Chrishen Silva" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack Horizontal Bar */}
            <div className='tech-stack'>
                <div className="container">
                    <div className="tech-grid">
                        <span className="tech-item">Java</span>
                        <span className="tech-item">React</span>
                        <span className="tech-item">Adobe Suite</span>
                        <span className="tech-item">Blender</span>
                        <span className="tech-item">HTML5/CSS3</span>
                        <span className="tech-item">CyberSecurity</span>
                        <span className="tech-item">Figma</span>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <section id="aboutme" className="section container" data-aos="fade-up">
                <h2>About <span className="gradient-text">Me</span></h2>

                <div className='about-content'>
                    <div className='about-text'>
                        <p>
                            Hey, I’m Chrishen, a passionate tech enthusiast from Sri Lanka with a deep love for creativity and innovation.
                            I specialize in video editing, audio editing, motion graphics, and graphic design, with a growing interest and skill in 3D modeling, UI/UX design, and software & web development.
                        </p>
                        <p>
                            I enjoy bringing ideas to life—whether it’s crafting visually stunning videos, designing immersive user interfaces, creating unique soundscapes, or developing interactive digital experiences.
                            I'm also diving deeper into the world of AI and machine learning, always eager to learn new technologies and stay ahead of the curve.
                        </p>
                    </div>

                    <div className='feature-cards'>
                        <Card
                            heading="Creative Visual Storytelling"
                            image={pic1}
                            desc="Video editing, motion graphics, and graphic design are where I turn ideas into visually engaging stories. Whether it's a cinematic cut or an eye-catching animation, I blend creativity with precision."
                        />
                        <Card
                            heading="Tech Meets Art"
                            image={pic2}
                            desc="I'm not just creative—I'm technical too. From building websites and apps to exploring AI and software development, I love fusing design with development to create smooth, interactive digital experiences."
                        />
                        <Card
                            heading="Always Evolving"
                            image={pic3}
                            desc="I’m constantly learning—whether it’s leveling up in 3D modeling, diving into UI/UX, or experimenting with music production and AI tools. I'm committed to growth, always exploring new tools."
                        />
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id='project' className="section container">
                <h2>My <span className="gradient-text">Projects</span></h2>
                <ProjectsSection />
            </section>

            {/* Contact Section */}
            <section id='contact' className="section container" data-aos="fade-up">
                <h2>Get In <span className="gradient-text">Touch</span></h2>

                <div className="contact-container">
                    <div className="contact-text contact-cta">
                        <p>
                            Got a project in mind or just want to say hi? Feel free to reach out!
                            I'm always open to new opportunities, collaborations, or a good tech chat. Let’s build something awesome together!
                        </p>
                    </div>

                    <div className='code-snippet-box'>
                        <span className='code-line'><span className="code-keyword">const</span> contact = &#123;</span>
                        <span className='code-line'>&nbsp;&nbsp;email: <span className="code-string">"chrishensilva@example.com"</span>,</span>
                        <span className='code-line'>&nbsp;&nbsp;github: <span className="code-string">"@chrishensilva"</span>,</span>
                        <span className='code-line'>&nbsp;&nbsp;message: <span className="code-string">"Let's work together!"</span></span>
                        <span className='code-line'>&#125;;</span>
                        <span className='code-line'><span className="code-keyword">return</span> <span className="code-string">"Hello, World!"</span>;</span>
                    </div>

                    <div className='social-grid'>
                        <a href='https://web.facebook.com/chrishen.silva.2025' target='_blank' rel="noreferrer" className='social-card'>
                            <img src={fb} alt="Facebook" />
                            <span>Facebook</span>
                        </a>
                        <a href='https://www.linkedin.com/in/chrishen-silva-a42b491b2' target='_blank' rel="noreferrer" className='social-card'>
                            <img src={linked} alt="LinkedIn" />
                            <span>LinkedIn</span>
                        </a>
                        <a href='https://www.instagram.com/chrishen_silva' target='_blank' rel="noreferrer" className='social-card'>
                            <img src={inster} alt="Instagram" />
                            <span>Instagram</span>
                        </a>
                        <a href='https://github.com/chrishensilva' target='_blank' rel="noreferrer" className='social-card'>
                            <img src={git} alt="Github" />
                            <span>Github</span>
                        </a>
                    </div>
                </div>
            </section>

            <footer>
                <p>Chrishen Silva © 2025. All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default Home;
