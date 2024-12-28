import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/WorkExperience.css";
import crisLogo from "../images/cris.jpg";
import iitjamLogo from "../images/iitjam.jpg";
import bitsLogo from "../images/bits.png";

const WorkExperience = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 200,
    });
  }, []);

  return (
    <div className="work-experience-container">
      <h2 className="work-experience-header" data-aos="fade-up">
        Work Experience
      </h2>
      <div className="work-experience-item" data-aos="fade-up">
        <div className="work-experience-dates">May 2024 – July 2024</div>
        <div className="work-experience-content">
          <div className="company-header">
            <img
              src={crisLogo}
              alt="CRIS Logo"
              className="company-logo"
            />
            <h3>Centre for Railway Information Systems</h3>
          </div>
          <p>Data Science & Operational Research Intern</p>
          <ul>
            <li>
              Designed and developed Rail-GPT, an AI-driven chatbot for Railways, utilizing OCR (Optical Character
              Recognition) and entity extraction to perform intelligent information retrieval and provide seamless user
              interaction..
            </li>
            <li>
              Implemented knowledge graph construction to enable contextual understanding and efficient query resolution, leveraging
              NLP (Natural Language Processing) and graph-based frameworks (e.g., Neo4j.)
            </li>
            <li>
              Developed a scalable, serverless web service for deployment using Modal, API Gateway, and Python, ensuring
              high availability and cost-effective operations.
            </li>
          </ul>
        </div>
      </div>
      <div className="work-experience-item" data-aos="fade-up">
        <div className="work-experience-dates">December 2024 – Present</div>
        <div className="work-experience-content">
          <div className="company-header">
            <img
              src={iitjamLogo}
              alt="IIT Jammu Logo"
              className="company-logo"
            />
            <h3>Indian Institute of Technology Jammu</h3>
          </div>
          <p>Machine Learning Intern</p>
          <ul>
            <li>
              Research on use of Bidirectional LSTMs in Triboelectric Nanogenerators.
            </li>
            <li>
              Working on development and implementation of GANs and Super Resolution GANs for use in material chemistry
              and related fields.
            </li>
          </ul>
        </div>
      </div>
      <div className="work-experience-item" data-aos="fade-up">
        <div className="work-experience-dates">
          March 2024 – May 2024
        </div>
        <div className="work-experience-content">
          <div className="company-header">
            <img
              src={bitsLogo}
              alt="BITS Pilani Logo"
              className="company-logo"
            />
            <h3>BITS Pilani</h3>
          </div>
          <p>Undergraduate Student Researcher</p>
          <ul>
            <li>
              Assisted in development a predictive model for estimating the Remaining Useful Life of transformers in the medical
              industry using Bayesian Estimation for probabilistic forecasting.
            </li>
            <li>
              Leveraged NLP and LLMs (Large Language Models) to analyze operational data and maintenance records,
              enhancing the accuracy of life expectancy predictions.
            </li>
            <li>
              Integrated advanced statistical methods and Python-based libraries (e.g., Tensorflow, Scikit, NumPy, and Pandas)
              to deliver actionable insights for improved maintenance scheduling and operational efficiency.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
