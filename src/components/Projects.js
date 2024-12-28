import React from "react";
import "../css/Projects.css";

import ocrImage from "../images/ocr.png";
import rulImage from "../images/rul.png";
import iirImage from "../images/iir.png";
import hostelImage from "../images/hostel.png";
import cropImage from"../images/crop.png";
import githubLogo from "../images/github.png";

const projects = [
  {
    title: "Drug-Label OCR",
    description:
      "Created a Python-based image processing toolkit designed for tasks such as decolorization, scaling, and optical character recognition (OCR) from images of drug labels.",
    image: ocrImage,
    github: "https://github.com/AM-2304/SpeedySui",
  },
  {
    title: "RUL prediction in transformers",
    description:
      "Developed a machine learning model using NASA's C-MAPSS dataset for engine performance degradation tracking and RUL prediction utilising LSTM and Bayesian estimation",
    image: rulImage,
    github: "https://github.com/AM-2304/rul",
  },
  {
    title: "Intelligent Information Retrieval Chatbot",
    description:
      "Developed a web service based chatbot prototype using knowledge graphs developed from Indian Railways Circulars by implementing OCR on scanned pdfs.",
    image: iirImage,
    github: "https://github.com/AM-2304/IIR",
  },
  {
    title: "Hostel Allocation Portal",
    description:
      "Developed a web application using Flask and Python to automate the allocation of students to hostel rooms based on group preferences, enhancing efficiency and user experience.",
    image: hostelImage,
    github:
      "https://github.com/AM-2304/hostel_allocation",
  },
  {
    title: "Smart Crop Recommender",
    description:
      "Designed and implemented a web application allowing users to select districts and input area data, providing tailored crop recommendations based on geographical inputs such as historical crop data, real time weather data, etc.",
    image: cropImage,
    github:
      "https://github.com/AM-2304/Crop-Recommendation-System",
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-header">My Portfolio</h2>
      <h3 className="projects-subheader">Awesome Projects</h3>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image-container">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                <img src={githubLogo} alt="GitHub" className="github-icon" />
              </a>
            </div>
            <h4 className="project-title">{project.title}</h4>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
