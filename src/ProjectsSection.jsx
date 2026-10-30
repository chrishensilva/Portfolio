import { useState, useEffect } from "react";
import Projects from "./Projects";
import { motion, AnimatePresence } from "framer-motion";

// Assets imports remain the same...
import fig1 from "./assets/fig1.webp";
import fig2 from "./assets/fig2.webp";
import fig3 from "./assets/fig3.webp";
import g1 from "./assets/Graphics/g1.webp";
import g2 from "./assets/Graphics/g2.webp";
import g3 from "./assets/Graphics/g3.webp";
import g4 from "./assets/Graphics/g4.webp";
import g5 from "./assets/Graphics/g5.webp";
import g6 from "./assets/Graphics/g6.webp";
import g7 from "./assets/Graphics/g7.webp";
import g8 from "./assets/Graphics/g8.webp";
import g9 from "./assets/Graphics/g9.webp";
import g10 from "./assets/Graphics/g10.webp";
import g11 from "./assets/Graphics/g11.webp";
import g12 from "./assets/Graphics/g12.webp";
import g13 from "./assets/Graphics/g13.webp";
import g14 from "./assets/Graphics/g14.webp";
import v1 from "./assets/Video/a.webp";
import v2 from "./assets/Video/b.webp";
import r1 from "./assets/Render/r1.webp";
import r2 from "./assets/Render/r2.webp";
import r3 from "./assets/Render/r3.webp";
import r4 from "./assets/Render/r4.webp";
import r5 from "./assets/Render/r5.webp";
import r6 from "./assets/Render/r6.webp";
import r7 from "./assets/Render/r7.webp";
import r8 from "./assets/Render/r8.webp";
import r9 from "./assets/Render/r9.webp";
import r10 from "./assets/Render/r10.webp";
import s1 from "./assets/SE/s1.webp";
import p1 from "./assets/Ml/p1.webp";
import w1 from "./assets/Web/w1.webp";
import w2 from "./assets/Web/w2.webp";
import w3 from "./assets/Web/w3.webp";
import w4 from "./assets/Web/w4.webp";
import w5 from "./assets/Web/w5.webp";
import w6 from "./assets/Web/w6.webp";
import w7 from "./assets/Web/w7.webp";
import w8 from "./assets/Web/w8.webp";
import w9 from "./assets/Web/w9.webp";
import w10 from "./assets/Web/w10.webp";
import w11 from "./assets/Web/w11.webp";

function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("Ui/Ux Designs");

  const projectData = {
    "Ui/Ux Designs": [
      {
        proimage: fig1,
        proHead: "Fruity - Soda Landing Page",
        prodesc:
          "A vibrant fruit cider brand interface with immersive product storytelling and oversized typography.",
        role: "UI/UX Designer",
        tech: ["FIGMA", "PROTOTYPING"],
        prolink:
          "https://www.figma.com/design/POleTmyvfTtoHd24Szoj2g/Fruity?m=auto&t=vnvir0AW1xRm1MQn-1",
      },
      {
        proimage: fig2,
        proHead: "CineStream Movie Portal",
        prodesc:
          "A sleek movie streaming portal featuring cinematic layouts and intuitive navigation.",
        role: "Lead Designer",
        tech: ["FIGMA", "INTERACTION DESIGN"],
        prolink:
          "https://www.figma.com/design/74jnI9KrzASVRh6RcncKr7/Movie?node-id=3-277&t=AfOpnmVFB1fj46ov-1",
      },
      {
        proimage: fig3,
        proHead: "Modern Identity System",
        prodesc:
          "Clean, minimalistic authentication interfaces focusing on trust and usability.",
        role: "UI Designer",
        tech: ["FIGMA", "DESIGN SYSTEMS"],
      },
    ],
    "Web Development": [
      {
        proimage: w1,
        proHead: "Chrishen Silva Official",
        prodesc:
          "Full-scale professional portfolio built with React, focusing on performance and creative motion.",
        role: "Lead Developer",
        tech: ["REACT", "GSAP", "VITE"],
        prolink: "https://www.chrishensilva.page/",
      },
      {
        proimage: w3,
        proHead: "Kmee Restaurant",
        prodesc:
          "Digital menu and reservation system with a focus on high-end dining aesthetics.",
        role: "Frontend Developer",
        tech: ["REACT", "CSS MODULES"],
        prolink: "https://resturent-website-zlal.vercel.app/",
      },
      {
        proimage: w4,
        proHead: "MyKleen Website",
        prodesc:
          "Website to showcase the services provided by a cleaning service in Australia",
        role: "Web Developer",
        tech: ["REACT", "GSAP", "VITE"],
        prolink: "https://mykleen-website.vercel.app/",
      },
      {
        proimage: w5,
        proHead: "Website for Leen Muthukuda(Musician)",
        prodesc:
          "Personal Website to highlight the brand of Musician named Leen Muthukuda",
        role: "Web Developer",
        tech: ["REACT", "GSAP", "VITE"],
        prolink: "https://leen-muthukuda-website.vercel.app/",
      },
      {
        proimage: w6,
        proHead: "Website for Cake Bussiness",
        prodesc: "Website to showcase the local cake bussiness",
        role: "Web Developer",
        tech: ["REACT", "GSAP", "VITE"],
        prolink: "https://cake-shop-website-azure.vercel.app/",
      },
      {
        proimage: w7,
        proHead: "Website for Local Law Firm",
        prodesc:
          "Website to showcase the services provided by a local law firm",
        role: "Web Developer",
        tech: ["REACT", "GSAP", "VITE"],
        prolink: "https://lawfirm-website-project-hjiq.vercel.app/",
      },
      {
        proimage: w8,
        proHead: "Website for TukTuk Rides(Tourism)",
        prodesc:
          "Website to showcase the services provided by a tourism bussiness",
        role: "Web Developer",
        tech: ["REACT", "GSAP", "VITE"],
        prolink: "https://tuk-travels-website.vercel.app/",
      },
      {
        proimage: w9,
        proHead: "Website for Hair Saloon",
        prodesc: "Website to showcase the services provided by a hair saloon",
        role: "Web Developer",
        tech: ["REACT", "GSAP", "VITE"],
        prolink: "https://salon-website-xi-puce.vercel.app/",
      },
      {
        proimage: w10,
        proHead: "Website for Vehicle renting bussiness",
        prodesc:
          "Website to showcase the services provided by a vehicle renting bussiness",
        role: "Web Developer",
        tech: ["REACT", "GSAP", "VITE"],
        prolink: "https://vehicle-renting-bussiness-website.vercel.app/",
      },
      {
        proimage: w11,
        proHead: "Website for Hardware Shop",
        prodesc: "Website to showcase products provided by a hardware shop",
        role: "Web Developer",
        tech: ["REACT", "GSAP", "VITE"],
        prolink: "https://hardware-website-senith-traders.vercel.app/",
      },
    ],
    "Machine Learning": [
      {
        proimage: p1,
        proHead: "Credit card fraud detection",
        prodesc: "AI model for detect and notify the credit card frauds.",
        role: "Developer",
        tech: ["Python", "Scikit-Learn", "Pandas"],
        prolink: "https://github.com/chrishensilva/Fraud-Detection-System",
      },
    ],
    "Video Editing": [
      {
        proimage: v1,
        proHead: "Technical Explainer",
        prodesc:
          "Professional technical breakdowns using After Effects and Premiere Pro for complex software products.",
        role: "Motion Designer",
        tech: ["AE", "PREMIERE"],
        prolink:
          "https://drive.google.com/drive/folders/15cCm8yoov-JmGNDN6qR4s79te-quFw1m?usp=sharing",
      },
      {
        proimage: v2,
        proHead: "Rhythm & Visuals",
        prodesc:
          "Beat-synced musical visualizers with custom color grading and atmospheric effects.",
        role: "Video Editor",
        tech: ["PREMIERE"],
        prolink: "https://www.youtube.com/@Chrishensilva",
      },
    ],
    "Full-Stack Development": [
      {
        proimage: s1,
        proHead: "Lawyer Managment System",
        prodesc:
          "Professional standard managment system to manage lawyers and clients, send emails and give role-based access to other users.",
        role: "Full-stack Developer",
        tech: ["React.js", "SQL", "sqlLite", "Node.js", "JWT"],
        prolink: "https://court-managment-system.vercel.app/",
      },
    ],
    "Graphic Designing": [
      {
        proimage: g1,
        proHead: "Visual Series 01",
        role: "Graphic Designer",
        tech: ["ILLUSTRATOR"],
      },
      {
        proimage: g2,
        proHead: "Visual Series 02",
        role: "Graphic Designer",
        tech: ["ILLUSTRATOR"],
      },
      {
        proimage: g3,
        proHead: "Visual Series 03",
        role: "Graphic Designer",
        tech: ["PHOTOGRAPHY"],
      },
      {
        proimage: g4,
        proHead: "Visual Series 04",
        role: "Graphic Designer",
        tech: ["BRANDING"],
      },
      {
        proimage: g5,
        proHead: "Visual Series 05",
        role: "Graphic Designer",
        tech: ["LOGO DESIGN"],
      },
      {
        proimage: g6,
        proHead: "Visual Series 06",
        role: "Graphic Designer",
        tech: ["ILLUSTRATOR"],
      },
      {
        proimage: g7,
        proHead: "Visual Series 07",
        role: "Graphic Designer",
        tech: ["BRANDING"],
      },
      {
        proimage: g8,
        proHead: "Visual Series 08",
        role: "Graphic Designer",
        tech: ["ILLUSTRATOR"],
      },
      {
        proimage: g9,
        proHead: "Visual Series 09",
        role: "Graphic Designer",
        tech: ["PHOTOGRAPHY"],
      },
      {
        proimage: g10,
        proHead: "Visual Series 10",
        role: "Graphic Designer",
        tech: ["LOGO DESIGN"],
      },
      {
        proimage: g11,
        proHead: "Visual Series 11",
        role: "Graphic Designer",
        tech: ["ILLUSTRATOR"],
      },
      {
        proimage: g12,
        proHead: "Visual Series 12",
        role: "Graphic Designer",
        tech: ["BRANDING"],
      },
      {
        proimage: g13,
        proHead: "Visual Series 13",
        role: "Graphic Designer",
        tech: ["ILLUSTRATOR"],
      },
      {
        proimage: g14,
        proHead: "Visual Series 14",
        role: "Graphic Designer",
        tech: ["LOGO DESIGN"],
      },
    ],
    "3D Rendering": [
      {
        proimage: r1,
        proHead: "Aura Perfume",
        role: "3D Artist",
        tech: ["BLENDER", "CYCLES"],
      },
      {
        proimage: r2,
        proHead: "Silent Lake",
        role: "Environment Artist",
        tech: ["BLENDER"],
      },
      {
        proimage: r8,
        proHead: "iPhone 16 Pro Render",
        role: "Product Modeler",
        tech: ["BLENDER", "OCTANE"],
      },
      {
        proimage: r4,
        proHead: "Alpine Peaks",
        role: "Landscape Artist",
        tech: ["BLENDER"],
      },
    ],
  };

  return (
    <div className="projects-container">
      <div className="projects-filter-v2">
        {Object.keys(projectData).map((category) => (
          <button
            key={category}
            className={`filter-tab ${activeCategory === category ? "active" : ""}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="projects-display-area">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: "anticipate" }}
            className={`projects-grid-v2 ${activeCategory === "Graphic Designing" ? "graphics-layout-v2" : ""}`}
          >
            {projectData[activeCategory].map((project, index) => (
              <Projects key={index} {...project} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default ProjectsSection;
