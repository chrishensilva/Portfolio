import { useState, useEffect } from "react";
import Projects from "./Projects";
import { motion } from "framer-motion";
import fig1 from "./assets/fig1.png";
import fig2 from "./assets/fig2.png";
import fig3 from "./assets/fig3.png";
import g1 from "./assets/graphics/g1.jpg";
import g2 from "./assets/graphics/g2.png";
import g3 from "./assets/graphics/g3.jpg";
import g4 from "./assets/graphics/g4.jpg";
import g5 from "./assets/graphics/g5.jpg";
import g6 from "./assets/graphics/g6.jpg";
import g7 from "./assets/graphics/g7.jpg";
import g8 from "./assets/graphics/g8.jpg";
import g9 from "./assets/graphics/g9.jpg";
import g10 from "./assets/graphics/g10.jpg";
import g11 from "./assets/graphics/g11.jpg";
import g12 from "./assets/graphics/g12.jpg";
import g13 from "./assets/graphics/g13.jpg";
import g14 from "./assets/graphics/g14.jpg";
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

import { p } from "framer-motion/client";

function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("Video Editing");

  const projectData = {
    "Video Editing": [
      {
        proimage: v1,
        proHead: "Explainer Videos",
        prodesc: "Smooth cuts with AE and Premiere",
        prolink:
          "https://drive.google.com/drive/folders/15cCm8yoov-JmGNDN6qR4s79te-quFw1m?usp=sharing",
      },
      {
        proimage: v2,
        proHead: "Animated Music Videos",
        prodesc: "Color graded and synced to beat",
        prolink: "https://www.youtube.com/@Chrishensilva",
      },
    ],
    "Graphic Designing": [
      {
        proimage: g1,
      },
      {
        proimage: g2,
      },
      {
        proimage: g3,
      },
      {
        proimage: g4,
      },
      {
        proimage: g5,
      },
      {
        proimage: g6,
      },
      {
        proimage: g7,
      },
      {
        proimage: g8,
      },
      {
        proimage: g9,
      },
      {
        proimage: g10,
      },
      {
        proimage: g11,
      },
      {
        proimage: g12,
      },
      {
        proimage: g13,
      },
      {
        proimage: g14,
      },
    ],
    "3D Rendering": [
      {
        proimage: r1,
        proHead: "Perfume Bottel Modelling",
      },
      {
        proimage: r2,
        proHead: "Lake Scenario",
      },
      {
        proimage: r3,
        proHead: "Perfume Bottel Modelling",
      },
      {
        proimage: r4,
        proHead: "Landscape Render",
      },
      {
        proimage: r5,
        proHead: "Stone landscape Render",
      },
      {
        proimage: r6,
        proHead: "Forest Render",
      },
      {
        proimage: r7,
        proHead: "Cinematic landscape Render",
      },
      {
        proimage: r8,
        proHead: "Iphone Render",
      },
      {
        proimage: r9,
        proHead: "Landscape Render",
      },
      {
        proimage: r10,
        proHead: "Night forest Render",
      },
    ],
    "Ui/Ux Designs": [
      {
        proimage: fig1,
        proHead: "UI design for Soda Company",
        prodesc:
          "This UI design was created for a fictional fruit cider brand called Fruity. The design features a vibrant purple theme that reflects the flavor and energy of grape soda. The hero section uses a bold typographic layout with oversized text layered behind a high-quality can mockup, giving it a dynamic and immersive feel.Floating fruit elements and water droplets add a realistic and juicy aesthetic, while the minimal top navigation and clear “Shop Now” CTA ensure a user-friendly experience. This responsive layout balances visual storytelling with clean usability, making it perfect for product landing pages or ecommerce splash screens.",
        prolink:
          "https://www.figma.com/design/POleTmyvfTtoHd24Szoj2g/Fruity?m=auto&t=vnvir0AW1xRm1MQn-1",
      },
      {
        proimage: fig2,
        proHead: "UI design for Movie Website",
        prodesc:
          "This UI design was crafted for a modern movie streaming platform. The interface features a sleek, dark-themed layout with vibrant highlight colors to reflect the cinematic mood. The homepage includes a dynamic hero banner showcasing featured films, category carousels for genres like action, drama, and sci-fi, and intuitive filtering options.",
        prolink:
          "https://www.figma.com/design/74jnI9KrzASVRh6RcncKr7/Movie?node-id=3-277&t=AfOpnmVFB1fj46ov-1",
      },
      {
        proimage: fig3,
        proHead: "Modern Login Page Design",
        prodesc:
          "This UI design showcases a clean and minimalistic login interface tailored for modern web and mobile platforms. The layout uses soft gradients, smooth shadows, and rounded input fields to create a welcoming and professional aesthetic.",
      },
    ],
    "Web Development": [
      {
        proimage: w1,
        proHead: "Official Webpage for Chrishen Silva",
        prodesc: "Modern and responsive webpage created using React and JS",
        prolink: "https://www.chrishensilva.page/",
      },
      {
        proimage: w2,
        proHead: "Portfolio web design",
        prodesc: "Modern and responsive Portfolio created using React",
        prolink: "https://chrishensilva.github.io/Portfolio/#home",
      },
    ],
  };

  return (
    <div className="project">
      <div className="projecttype" data-aos="fade">
        {Object.keys(projectData).map((category) => (
          <button
            key={category}
            className="projecttypesbtn"
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div
        data-aos="slide-left"
        className={
          activeCategory === "Graphic Designing"
            ? "graphiccards-container"
            : "projectcards"
        }
        key={activeCategory}
      >
        {projectData[activeCategory].map((item, index) => (
          <motion.div
            key={item.proHead + index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Projects
              proimage={item.proimage}
              proHead={item.proHead}
              prodesc={item.prodesc}
              prolink={item.prolink}
              cardType={
                activeCategory === "Graphic Designing" ? "graphic" : "default"
              }
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsSection;
