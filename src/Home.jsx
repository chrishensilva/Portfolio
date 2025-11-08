
import myimage from './assets/new.jpg';
import Card from './Card.jsx';
import Social from './Social.jsx';
import Projects from './Projects.jsx';
import pic1 from './assets/a.png';
import pic2 from './assets/b.png';
import pic3 from './assets/c.png';
import pic4 from './assets/java.png';
import pic5 from './assets/python.png';
import pic6 from './assets/photoshop.png';
import pic7 from './assets/ae.png';
import Dropdown from './Dropdown.jsx';
import ProjectsSection from './ProjectsSection.jsx';

import fb from './assets/logo/fb.png';
import inster from './assets/logo/inster.png';
import linked from './assets/logo/in.png';
import git from './assets/logo/git.png';



function Home()
{

    return(
        <>
        <div className="body">
            <section id='home'>
                <div className="background-svg">
            </div>
            <nav className="navigation">
                <div className="logo">
                    <h3>Portfolio.</h3>
                </div>
                <div className="links">
                      <a href="#home">Home</a>
                    <a href="#aboutme">About</a>
                    <a href="#project">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
            </nav>
            <div className='head' data-aos="fade">
                <div className='textcontent'>
                    <div className='title'>
                        {/*<p>Hello,I`m</p>*/}
                    </div>
                    <h1 className='myname'>Hi I`m Chrishen Silva</h1>
                    <div className='home-info'>
                        {/*<p>I`m a</p> <h2>Ui/Ux Designer | Web Developer | Editor | Creator 
                        </h2>*/}
                    </div>
                    
                    <h2 className='role'>Ui/Ux Designer | Web Developer | Editor | Creator</h2>
                    <div className='buttons'>
                        <button className='btn1'><a href='#aboutme' className='btnabout'>About Me</a></button>
                        <button className='btn2'onClick={() => {const link = document.createElement("a");link.href = "./CV(Chrishen).pdf";link.download = "Chrishen_Resume.pdf";link.click();}}>My Resume</button>
                        
                    </div>
                    <div className='social'>
                        <a href='https://web.facebook.com/chrishen.silva.2025'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAqVJREFUSEvFlk+ITXEUxz/fCMkMZjNkYSQ1k8lqFppIzQJLTLJAkRURaSQ2dmhQKEspRdJQQmxspBBKCdmMf+VPEkIiOu6Z7pve+839vft7bzOnXr133znnc879nd85R4yTaJy4NAQ2swnAYqADmJ0H/Q54DdyT9C81kSSwmS0A9gGrgRkR51+AS8AhScNlAdQFm9lU4DCwDfBsU+QvcBQ4IOlPzCAKNrO5wHVgYQqtQOcBsEqSH8UYKQSbWRdwB2hrEloxc2ivJK+BGhkDNrNZXiiAZ1wmH4HbwEvgFzAR6Ac6qwyf5fBv1c6KwBeAdWXEzLnrbZX0tVrXzHZkb+pkYH9K0vYo2Mw80ucJUM9iUdH1MbOdWeUfD3x4kXVIel95XpOxmZ0FNiaA+yVdDjL1u+2fNYBnHcqgpL1jwGY2CfgEtCaAOyW9qOiZ2VB+tvVMhyXNLwL3AbcSoK7SKum7f8kD/p1oNxrw6Ks2s01ZJZ9JdNAi6UcOngaMBJEgfq+vuF41eA8wmGDsKs2Cd0k6EYIHgCMR8CtJ81KCMrOLwNqI7oCkYyHYq9mrukgaAT8BuiN+1ks6H4J93N2NGNRUZCzzfGz+zCbU5IhOj6RHIdjbnY82L5ZQvDuNnE0uByuTJ6/q/fnzFmB3BOo+2iRZDdh/JN7HZovrnKQNlaDCztUD+Dgrk2aqulvS00JwnvWNbDqtLCE3Ch7KoDWVHhuLPgRm1oE3Av4AdIVTLLYILMuWupvZ2jMlAk8Fe0frk/Qw9FNv9VkCXAOmF8BTwD5wlkt6XBR82bI3B/BO1BsYl4GvZivvZkmfY8dVut6amessBbZkDWYF0B7p1W/z4zkt6X7ZtSgFhw7MzHv2m8r2kXer9tg22XTGZZE3+3/DGTcLCu3+A2q1/h8IZfWEAAAAAElFTkSuQmCC" className='icon'/></a>
                        <a href='https://www.linkedin.com/in/chrishen-silva-a42b491b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app '><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAZpJREFUSEvtlr1rFkEQh58HLESwUEgjWKiksTQQLaKYgJWlnSAIFpEEwUJREFFSiGiRFKL+AYKdNjaiopguYLCziFqppQqm0MbxXbnIZULeNHtESLa7m9155uM3tyfrtFwnLv8XOCJOAwPAC3W+i6qsyDgiZoGRFuyU+qA2fBk4IsaB+wnyTt3fNfhaD3A9QRbV7V2DDwOvE+SherJTcHEeEWeBy8Au4DFwRl3sHFwbsJq/qnMcETuBQeCz+qlfElnVe4CP6cBddbJpwwXgdrLvAI70ulSEeaBl+wE8BcbVrzmIGuDzwEyf7N4Dw+q39p4a4J/A1jW0cUW9URtc/P0GPgBfmrJn7cyrQ7XBJeMR9U2jg6PAM2BLC1QC26b+WnpXo9R31HPtbCLiCXA8lX9QLf3+u2qAT6iPEngaKKJrr4PqXE3wMfV5Al8FphJ4VH21GnhvI5L2mXvqRNO/i71e3UoOx9SXCXypp/Sbm+DNUv/TQERsPHGVj/2hNAblbl1oxmk3sC/Z36rf0zitua/qj0AKqO/jxgP/AdRKCy6UynoKAAAAAElFTkSuQmCC" className='icon'/></a>
                        <a href='https://www.instagram.com/chrishen_silva?igsh=NTNocGZ4M2NtaHhz'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAA2NJREFUSEvNlkuIl2UUxn9PN0ELDBQvpYWUkmBjXjZFKtUuYyQEW3hJRRftUjEYTCqRBI3aBC3U0ZEWLayYJjcKog0UXlLEUMIWUhqBUKi5q+P7DO/I5+f3/b/5u5l54c9/8b3vec55znMuYpiOhgmXkQ0cEZOAZ4AHGxj6D7gk6c8mJmsjjoiJwE7gdeDxJkOl738D3wOb65yoBI4Ig32VgMdkg/8CZwBH1Oo8AswBRuVLN4Flkg6VH90DHBGjgd8AR9yd/r8ATktqAh2wHREPAS8DH+b/q8Czkm4VwauA/WCrI5b0VpsUG3hFApWknog4CiyyE5I+aAL+A3jCEUv6qx3gDNqT36zO6TkLXJH0ZC1wFpQVeVHSc1WgEWGnOoEXzSzwI/CNRRQRK4H9+d0aSd0RcQN4FBgv6dqgzbuojggL4zTQL8l5uutExPpkZBfwWOnTdeBdSXsj4m1TDZyXdDKxYL1MA2ZJOl8HbLDjLgVJi4vGk+cbM6hBPgN+Bh4Gnjdojsrg/nbnRMQ5g5ohSWZn4JQjfg04nKl7c/BSRLyQ6vkkYKrmSrpSMj41O2Im5kj6pfDWOe6wwiX1NwEfTLQsLTz+KNXw+8AGSZ/W5P49YAewRdL2wlszY8cXSPqhDvhV4EhFxN8Bpn6xJHeke06i1Awd9K/ktDVj7SySdKwO2DXn2uuT9EbB62+zkjsl9bYJ7BTNS9p5RZJtV+Z4ELhXkktm4ESEG4obyyZJn9QAdyWxmeIuSR8X3p6yLlJACyVZuC2ByxFPcW2npu+2N7tCXE/lZuF2OaM4GCJiSOJ6yTVcU07vpCbweYrajd8l40g8FKxYl5N7/LrUoXaXFG+Fz0w256cS9ZvKiK0+q7CugaxLzcNUVzUQK35POQ2FBtIhyTVdCex++jtwWdLTNbl0y1yS6t3seGL9lJrI11VzNyIeyOnxmJwiyXOgEtgbxj+5C00eyiZR5VxBWFazVe30jC2O1qqx6BytTTP0S0nLWxlu+lYYi92S1hTvVwGPA37N6443h23ACUn/NwHl0htcBPzO6fAaNL04mXyvbvVZBewrAN3v6mMTKyUdKDvdatlb4N6cxqQ7mEXSzjE7fa6AYtNoSXVFOUxIa1DlUtDCkwtN28vIXujb4Xiod4ct4tvRr10uBVZ4+AAAAABJRU5ErkJggg==" className='icon'/></a>
                        <a href='https://github.com/chrishensilva'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAypJREFUSEvFlt2LV3UQxj+PgpAXYlimxvqyWOAmq9iLrfgHLAa25kUX0faCmlcqC3ohGCwFQUkhwlItmpIXEpRCIHjthdYWmvYCgallK5giQqGW+XTmx/ltZ797zu7Z9WIHDvzO+c3M8535zjwzYpJEk4TLuIBtTwGeAVqBudCwvwJcBE5J+rduILWAbS8AdgLrgVkVzm8AnwPvSPplrAOMCmx7GrAL2AHE7zpyF3g3y0avpL+rDCqBbUcqv8yeJ+uglegMAF2SBsvsS4FtLwROAnMmCNo0C9BVki6lfkYA234Q+Ap4LFc+nxdRFFQdCZA7wOO58k9Ah6SbReMy4APAKwWlTknHba8A3gOeAMJZPHGf8b4EiAP2SBqwvRo4UfDRn6V8UyWw7ZXRFklYiyRFu9QW23FF0WZNMbBU0o/ND8Mitn0IeClBWC7pu9qogO024IfEZp+kDSOAbU8FrgEzCwZX85P+MU7gGflVzCvYDUp6tAz4KSBaoChbJO0dD+hQbu24048S2zZJURv/U6btLuBIotgq6cIEgSPa3xPbtZKCG4YBR/77E8V5kopFUvsMtqcDf1VlcKi4bG8EPk4Ul0k6WxutWMZ2C/BrYrtd0u404hdyki/qvi7pkwkCPw8cTWxflXQwBQ4SGOqz3OBYRgjPTRD4C2BdYvu0pG+GAceL7WindOx1S/p0POC2u4FGZAX5M1q1ObNTAvkwY5w3gH+y0wZpRIuF7AfelJRW6TDP+XDpBQI4lQPZsHit+TEFLjLOVuB03mKRhXvAt8D7kg4XvdruBN4Ggs+rRm27pHOlwHm6PwC25QodwCPAZ4VFYASF2n4YCJarkj2Smj4bOmXT6YF8ULRn+1WjuHLHLwO3JfWVec/aMa6hSJFNtTP5TL5VtKtaBOYDX+fRbo7+lhQTplJsB8PFAlGUWASelfRbajja6hNOjuWzNiryZ6Ali3h2RcRBFkEaTfk+O/yaMtDSVCdFE7QXVdoDxGp7XdJDFcBBrTGHoyNiYXhL0u2qFNVdbyOSSPnibLq8WAEcfXsZ6Bur7caMeLQ7vd//akV8vyBl9pMG/B/cVwgukHh1IAAAAABJRU5ErkJggg==" className='icon'/> </a>

                    </div>
                    
                </div>
                <div className='home-img'>
                    <div className='img-box'>
                        <div className='img-item'>
                            <img src={myimage}></img>
                        </div>
                    </div>
                </div>
                {/*<img src={myimage} alt='profilepic' className='rightimg' data-aos="fade"></img>*/}
            </div>
            {/*<div className='softwares' data-aos="fade">
                <img src={pic4} alt='soft' className='soft'></img>
                <img src={pic5} alt='python' className='soft'></img>
                <img src={pic6} alt='ps' className='soft'></img>
                <img src={pic7} alt='ae' className='soft'></img>
                <img src={pic4} alt='soft' className='soft'></img>
            </div>*/}
            </section>
            <div className='bar' >
                <p>Java</p>
                <p>React</p>
                <p>Adobe Suite</p>
                <p>Blender</p>
                <p>Html</p>
                <p>CyberSecurity</p>
                <p>Figma</p>
            </div>
            <section id="aboutme" data-aos="fade">
                <h2 className='aboutme'>About me</h2>
                <div className='wrapper'>
                    <div className='myself'>
                        <p>Hey, I’m Chrishen, a passionate tech enthusiast from Sri Lanka with a deep love for creativity and innovation. I specialize in video editing, audio editing, motion graphics, and graphic designing, with a growing interest and skill in 3D modeling, UI/UX design, and software & web development.
                        I enjoy bringing ideas to life—whether it’s crafting visually stunning videos, designing immersive user interfaces, creating unique soundscapes, or developing interactive digital experiences. I'm also diving deeper into the world of AI and machine learning, always eager to learn new technologies and stay ahead of the curve.
                        My ultimate goal is to become a multi-disciplinary creative professional—a master of visuals, sound, interactivity, and code. </p>
                    </div>
                </div>
                <div className='cards'>
                    <Card heading="Creative Visual Storytelling" image={pic1} desc="Video editing, motion graphics, and graphic design are where I turn ideas into visually engaging stories. Whether it's a cinematic cut or an eye-catching animation, I blend creativity with precision to make content that connects."/>
                    <Card heading="Tech Meets Art" image={pic2} desc="I'm not just creative—I'm technical too. From building websites and apps to exploring AI and software development, I love fusing design with development to create smooth, interactive digital experiences."/>
                    <Card heading="Always Evolving" image={pic3} desc="I’m constantly learning—whether it’s leveling up in 3D modeling, diving into UI/UX, or experimenting with music production and AI tools. I'm committed to growth, always exploring new tools to push my creative boundaries."/>
                </div>
            </section>
             <section id='project'>
                <div className='project'>
                    <h2 className='projHead' data-aos="fade">Projects</h2>
                    <ProjectsSection />
                    {/*<div className='projecttype'>
                        <button className='projecttypesbtn'>Video Editing</button>
                        <button className='projecttypesbtn'>Graphic Desiging</button>
                        <button className='projecttypesbtn'>3D Rendering</button>
                        <button className='projecttypesbtn'>Ui/Ux Designs</button>
                    </div>
                    
                    <Projects proimage={pic1} proHead="Heading" prodesc="This is project description"/>
                    <Projects proimage={pic1} proHead="Heading" prodesc="This is project description"/>
                    <Projects proimage={pic1} proHead="Heading" prodesc="This is project description"/>
                    */}
                </div>
            </section>
            <div className='contactbar' data-aos="fade">
                <pre>
                    <code className='code'>return Hello, World!;</code>
                    <code className='code'>git commit -m "My first commit"</code>
                    <code className='code'>print(f"Hello, {name}!")</code>
                    <code className='code'>document.body.classList.toggle("dark");</code>
                    <code className='code'>const Greet = () = Hello, Chrishen!;</code>
                    <code className='code'>transform: translateY(-10px);</code>
                </pre>
                
            </div>
            <section id='contact' data-aos="fade">
                <h2 className='context'>Contact me</h2>
                <p className='contactdesc'>
                    Got a project in mind or just want to say hi?<br></br>
                    Feel free to reach out! I'm always open to new opportunities, collaborations, or a good tech chat. Let’s build something awesome together!
                </p>
                {/*<Social heading="Whatsapp" text="+94 701690749"/>
                <Social heading="Facebook" text="+94 701690749"/>*/}
                <h2 className='follow'>Follow me on</h2>
                <div className='con'>
                    <div className='fbcard'>
                        <a href='https://web.facebook.com/chrishen.silva.2025' target='_blank'><img src={fb} className='iconn'/>
                        <p className='txt'>Facebook</p></a>
                    </div>
                    <div className='linkedincard'>
                        <a href='https://www.linkedin.com/in/chrishen-silva-a42b491b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ' target='_blank'><img src={linked} className='iconn'/>
                        <p className='txt'>LinkedIn</p></a>
                    </div>
                    <div className='instercard'>
                        <a href='https://www.instagram.com/chrishen_silva?igsh=NTNocGZ4M2NtaHhz' target='_blank'><img src={inster} className='iconn'/>
                        <p className='txt'>Instergram</p></a>
                    </div>
                    <div className='gitcard'>
                        <a href='https://github.com/chrishensilva' target='_blank'><img src={git} className='iconngit'/>  
                        <p className='txt'>Github</p></a>
                    </div>
                </div>
            </section>
            <footer className='foot'>
                <p>chrishensilva©2025</p>
            </footer>
        </div>
        </>
        
    );
}

export default Home
