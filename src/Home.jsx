import myimage from './assets/pg.png';
import Card from './Card.jsx';
import pic1 from './assets/2.jpg';
import pic2 from './assets/3.jpg';
import pic3 from './assets/4.jpg';

function Home()
{
    return(
        <>
        <div className="body">
            <nav className="navigation">
                <div className="logo">
                    <h3>Chrishen Silva</h3>
                </div>
                <div className="links">
                      <a href="#Home">Home</a>
                    <a href="#About">About</a>
                    <a href="#Project">Projects</a>
                    <a href="#Contact">Contact</a>
                </div>
            </nav>
            <div className='head'>
                <div className='textcontent'>
                    <div className='title'>
                        <p>Hello,I`m</p>
                    </div>
                    <h1 className='myname'>Chrishen <br></br>Silva</h1>
                    <p className='role'>Ui/Ux Designer | Web Developer | Editor | Creator</p>
                    <div className='buttons'>
                        <button className='btn1'>About Me</button>
                        <button className='btn2'onClick={() => {const link = document.createElement("a");link.href = "/CV(Chrishen).pdf";link.download = "Chrishen_Resume.pdf";link.click();}}>My Resume</button>
                    </div>
                </div>
                <img src={myimage} alt='profilepic' className='rightimg'></img>
            </div>
            <div className='bar'>
                <p>Java</p>
                <p>React</p>
                <p>Adobe Suite</p>
                <p>Blender</p>
                <p>Html</p>
                <p>CyberSecurity</p>
                <p>Figma</p>
            </div>
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
        </div>
        </>
        
    );
}

export default Home