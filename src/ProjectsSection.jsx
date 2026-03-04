import { useState, useEffect } from "react";
import Projects from "./Projects";
import { motion, AnimatePresence } from "framer-motion";

// Assets imports remain the same...
import fig1 from "./assets/fig1.png";
import fig2 from "./assets/fig2.png";
import fig3 from "./assets/fig3.png";
import g1 from "./assets/Graphics/g1.jpg";
import g2 from "./assets/Graphics/g2.png";
import g3 from "./assets/Graphics/g3.jpg";
import g4 from "./assets/Graphics/g4.jpg";
import g5 from "./assets/Graphics/g5.jpg";
import g6 from "./assets/Graphics/g6.jpg";
import g7 from "./assets/Graphics/g7.jpg";
import g8 from "./assets/Graphics/g8.jpg";
import g9 from "./assets/Graphics/g9.jpg";
import g10 from "./assets/Graphics/g10.jpg";
import g11 from "./assets/Graphics/g11.jpg";
import g12 from "./assets/Graphics/g12.jpg";
import g13 from "./assets/Graphics/g13.jpg";
import g14 from "./assets/Graphics/g14.jpg";
import v1 from "./assets/Video/a.png";
import v2 from "./assets/Video/b.png";
import r1 from "./assets/Render/r1.png";
import r2 from "./assets/Render/r2.png";
import r3 from "./assets/Render/r3.png";
import r4 from "./assets/Render/r4.png";
import r5 from "./assets/Render/r5.png";
import r6 from "./assets/Render/r6.png";
import r7 from "./assets/Render/r7.png";
import r8 from "./assets/Render/r8.png";
import r9 from "./assets/Render/r9.png";
import r10 from "./assets/Render/r10.png";
import w1 from "./assets/Web/w1.png";
import w2 from "./assets/Web/w2.png";
import w3 from "./assets/Web/w3.png";

function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("Ui/Ux Designs");

  const projectData = {
    "Ui/Ux Designs": [
      {
        proimage: fig1,
        proHead: "Fruity - Soda Landing Page",
        prodesc: "A vibrant fruit cider brand interface with immersive product storytelling and oversized typography.",
        role: "UI/UX Designer",
        tech: ["FIGMA", "PROTOTYPING"],
        prolink: "https://www.figma.com/design/POleTmyvfTtoHd24Szoj2g/Fruity?m=auto&t=vnvir0AW1xRm1MQn-1",
      },
      {
        proimage: fig2,
        proHead: "CineStream Movie Portal",
        prodesc: "A sleek movie streaming portal featuring cinematic layouts and intuitive navigation.",
        role: "Lead Designer",
        tech: ["FIGMA", "INTERACTION DESIGN"],
        prolink: "https://www.figma.com/design/74jnI9KrzASVRh6RcncKr7/Movie?node-id=3-277&t=AfOpnmVFB1fj46ov-1",
      },
      {
        proimage: fig3,
        proHead: "Modern Identity System",
        prodesc: "Clean, minimalistic authentication interfaces focusing on trust and usability.",
        role: "UI Designer",
        tech: ["FIGMA", "DESIGN SYSTEMS"],
      },
    ],
    "Web Development": [
      {
        proimage: w1,
        proHead: "Chrishen Silva Official",
        prodesc: "Full-scale professional portfolio built with React, focusing on performance and creative motion.",
        role: "Lead Developer",
        tech: ["REACT", "GSAP", "VITE"],
        prolink: "https://www.chrishensilva.page/",
      },
      {
        proimage: w3,
        proHead: "Kmee Restaurant",
        prodesc: "Digital menu and reservation system with a focus on high-end dining aesthetics.",
        role: "Frontend Developer",
        tech: ["REACT", "CSS MODULES"],
        prolink: "https://resturent-website-zlal.vercel.app/",
      },
    ],
    "Video Editing": [
      {
        proimage: v1,
        proHead: "Technical Explainer",
        prodesc: "Professional technical breakdowns using After Effects and Premiere Pro for complex software products.",
        role: "Motion Designer",
        tech: ["AE", "PREMIERE"],
        prolink: "https://drive.google.com/drive/folders/15cCm8yoov-JmGNDN6qR4s79te-quFw1m?usp=sharing",
      },
      {
        proimage: v2,
        proHead: "Rhythm & Visuals",
        prodesc: "Beat-synced musical visualizers with custom color grading and atmospheric effects.",
        role: "Video Editor",
        tech: ["PREMIERE"],
        prolink: "https://www.youtube.com/@Chrishensilva",
      },
    ],
    "Graphic Designing": [
      { proimage: g1, proHead: "Visual Series 01", role: "Graphic Designer", tech: ["ILLUSTRATOR"] },
      { proimage: g2, proHead: "Visual Series 02", role: "Graphic Designer", tech: ["ILLUSTRATOR"] },
      { proimage: g3, proHead: "Visual Series 03", role: "Graphic Designer", tech: ["PHOTOGRAPHY"] },
      { proimage: g4, proHead: "Visual Series 04", role: "Graphic Designer", tech: ["BRANDING"] },
      { proimage: g5, proHead: "Visual Series 05", role: "Graphic Designer", tech: ["LOGO DESIGN"] },
      { proimage: g6, proHead: "Visual Series 06", role: "Graphic Designer", tech: ["ILLUSTRATOR"] },
      { proimage: g7, proHead: "Visual Series 07", role: "Graphic Designer", tech: ["BRANDING"] },
      { proimage: g8, proHead: "Visual Series 08", role: "Graphic Designer", tech: ["ILLUSTRATOR"] },
      { proimage: g9, proHead: "Visual Series 09", role: "Graphic Designer", tech: ["PHOTOGRAPHY"] },
      { proimage: g10, proHead: "Visual Series 10", role: "Graphic Designer", tech: ["LOGO DESIGN"] },
      { proimage: g11, proHead: "Visual Series 11", role: "Graphic Designer", tech: ["ILLUSTRATOR"] },
      { proimage: g12, proHead: "Visual Series 12", role: "Graphic Designer", tech: ["BRANDING"] },
      { proimage: g13, proHead: "Visual Series 13", role: "Graphic Designer", tech: ["ILLUSTRATOR"] },
      { proimage: g14, proHead: "Visual Series 14", role: "Graphic Designer", tech: ["LOGO DESIGN"] }
    ],
    "3D Rendering": [
      { proimage: r1, proHead: "Aura Perfume", role: "3D Artist", tech: ["BLENDER", "CYCLES"] },
      { proimage: r2, proHead: "Silent Lake", role: "Environment Artist", tech: ["BLENDER"] },
      { proimage: r8, proHead: "iPhone 16 Pro Render", role: "Product Modeler", tech: ["BLENDER", "OCTANE"] },
      { proimage: r4, proHead: "Alpine Peaks", role: "Landscape Artist", tech: ["BLENDER"] },
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
              <Projects
                key={index}
                {...project}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default ProjectsSection;
