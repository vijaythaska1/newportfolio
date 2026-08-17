import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import pdf from "../../Assets/VijaySharma.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import {
  FiMapPin,
  FiMail,
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiGlobe,
  FiBriefcase,
  FiCode,
  FiBookOpen,
  FiUser,
  FiLayers,
} from "react-icons/fi";

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <div className="resume-interactive" style={{ position: "relative" }}>
          {/* Download Button Top */}
          <div className="resume-download-row">
            <a
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-download-btn"
            >
              <AiOutlineDownload /> Download Resume
            </a>
          </div>

          {/* ===== HEADER CARD ===== */}
          <div className="resume-header-card">
            <h1>VIJAY SHARMA</h1>
            <div className="resume-title-text">Full Stack (MERN) Developer</div>
            <div className="resume-contact-row">
              <span className="resume-contact-item">
                <FiMapPin /> Mohali, Sector 71
              </span>
              <a
                href="mailto:vijaythaska2@gmail.com"
                className="resume-contact-item"
              >
                <FiMail /> vijaythaska2@gmail.com
              </a>
              <a href="tel:+917300760917" className="resume-contact-item">
                <FiPhone /> +91 7300760917
              </a>
              <a
                href="https://github.com/vijaythaska1"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-contact-item"
              >
                <FiGithub /> github.com/vijaythaska1
              </a>
              <a
                href="https://www.linkedin.com/in/vijay-sharma1"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-contact-item"
              >
                <FiLinkedin /> LinkedIn
              </a>
              <a
                href="https://vijay-sharma-portfolio.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-contact-item"
              >
                <FiGlobe /> Portfolio
              </a>
            </div>
          </div>

          {/* ===== PROFESSIONAL SUMMARY ===== */}
          <div className="resume-card">
            <div className="resume-card-title">
              <FiUser /> Professional Summary
            </div>
            <p className="resume-summary-text">
              MERN Stack Developer with <strong>2.9 years</strong> of experience
              building scalable web applications, REST APIs, ERP systems, and admin
              panels across startup, product, and service-based environments. Skilled in
              React.js, Next.js, Node.js, MongoDB, and TypeScript, with a strong focus
              on performance optimization and delivering production-ready software.
            </p>
          </div>

          {/* ===== TECHNICAL SKILLS ===== */}
          <div className="resume-card">
            <div className="resume-card-title">
              <FiCode /> Technical Skills
            </div>
            <div className="resume-skills-group">
              <div className="resume-skills-category">
                <div className="resume-skills-label">Frontend</div>
                <div className="resume-skills-chips">
                  <span className="resume-chip">React.js</span>
                  <span className="resume-chip">Next.js</span>
                  <span className="resume-chip">Redux</span>
                  <span className="resume-chip">TypeScript</span>
                  <span className="resume-chip">JavaScript (ES6+)</span>
                  <span className="resume-chip">HTML5 / CSS3</span>
                  <span className="resume-chip">EJS</span>
                  <span className="resume-chip">Tailwind CSS</span>
                </div>
              </div>
              <div className="resume-skills-category">
                <div className="resume-skills-label">Backend</div>
                <div className="resume-skills-chips">
                  <span className="resume-chip">Node.js</span>
                  <span className="resume-chip">Express.js</span>
                  <span className="resume-chip">NestJS</span>
                  <span className="resume-chip">REST APIs</span>
                </div>
              </div>
              <div className="resume-skills-category">
                <div className="resume-skills-label">Databases</div>
                <div className="resume-skills-chips">
                  <span className="resume-chip">MongoDB</span>
                  <span className="resume-chip">MySQL</span>
                  <span className="resume-chip">PostgreSQL</span>
                  <span className="resume-chip">Redis</span>
                </div>
              </div>
              <div className="resume-skills-category">
                <div className="resume-skills-label">
                  Messaging / Infrastructure
                </div>
                <div className="resume-skills-chips">
                  <span className="resume-chip">Kafka</span>
                  <span className="resume-chip">RabbitMQ</span>
                  <span className="resume-chip">Docker</span>
                  <span className="resume-chip">AWS</span>
                  <span className="resume-chip">CI/CD</span>
                  <span className="resume-chip">Firebase</span>
                  <span className="resume-chip">Git / GitHub</span>
                </div>
              </div>
              <div className="resume-skills-category">
                <div className="resume-skills-label">Exposure To</div>
                <div className="resume-skills-chips">
                  <span className="resume-chip">Python</span>
                  <span className="resume-chip">.NET / C#</span>
                  <span className="resume-chip">AI Chatbot Development</span>
                </div>
              </div>
            </div>
          </div>

          {/* ===== PROFESSIONAL EXPERIENCE ===== */}
          <div className="resume-card">
            <div className="resume-card-title">
              <FiBriefcase /> Professional Experience
            </div>
            <div className="resume-timeline">
              {/* Evervent */}
              <div className="resume-timeline-item">
                <div className="resume-timeline-header">
                  <div>
                    <div className="resume-timeline-role">
                      MERN Stack Developer
                    </div>
                    <div className="resume-timeline-company">
                      Evervent Pvt Ltd
                    </div>
                  </div>
                  <span className="resume-timeline-date">
                    Feb 2025 – Apr 2026
                  </span>
                </div>
                <ul className="resume-timeline-bullets">
                  <li>
                    Architected and optimized high-performance REST APIs using
                    Node.js, handling large-scale data processing with improved
                    response times.
                  </li>
                  <li>
                    Improved backend performance by optimizing database queries
                    and caching strategies, enabling efficient handling of large
                    datasets under production load.
                  </li>
                  <li>
                    Contributed across the full stack to develop scalable,
                    maintainable web applications serving multiple business
                    domains.
                  </li>
                </ul>
              </div>

              {/* CQLsys */}
              <div className="resume-timeline-item">
                <div className="resume-timeline-header">
                  <div>
                    <div className="resume-timeline-role">
                      MERN Stack Developer
                    </div>
                    <div className="resume-timeline-company">
                      CQLsys Technologies Pvt Ltd, Mohali
                    </div>
                  </div>
                  <span className="resume-timeline-date">
                    Jun 2023 – Nov 2024
                  </span>
                </div>
                <ul className="resume-timeline-bullets">
                  <li>
                    Built 5+ robust admin panels, REST APIs, and
                    customer-facing websites using the MERN stack.
                  </li>
                  <li>
                    Developed scalable, efficient web applications end-to-end —
                    from requirements gathering through production deployment.
                  </li>
                  <li>
                    Implemented responsive design principles ensuring consistent
                    UX across all devices and screen sizes.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ===== PROJECTS ===== */}
          <div className="resume-card">
            <div className="resume-card-title">
              <FiLayers /> Key Projects
            </div>
            <div className="resume-timeline">
              {/* JioInsure */}
              <div className="resume-timeline-item">
                <div className="resume-timeline-header">
                  <div>
                    <div className="resume-timeline-role">Jio Insurance</div>
                    <div className="resume-timeline-company">
                      Insurance Discovery & Assistance Platform
                    </div>
                  </div>
                </div>
                <ul className="resume-timeline-bullets">
                  <li>
                    Built an insurance discovery and assistance platform enabling
                    users to explore insurance solutions and connect with trained
                    professionals.
                  </li>
                </ul>
                <div className="resume-project-tech">
                  <span>React.js</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                  <span>Express.js</span>
                  <span>REST API</span>
                </div>
              </div>

              {/* BimaStreet */}
              <div className="resume-timeline-item">
                <div className="resume-timeline-header">
                  <div>
                    <div className="resume-timeline-role">BimaStreet</div>
                    <div className="resume-timeline-company">
                      Online Insurance Comparison Platform
                    </div>
                  </div>
                </div>
                <ul className="resume-timeline-bullets">
                  <li>
                    Built a comprehensive IRDAI-approved online insurance platform
                    connecting users with top-rated insurers for Car, Health, Term,
                    and Two-Wheeler insurance with instant premium comparisons and
                    free claim assistance.
                  </li>
                </ul>
                <div className="resume-project-tech">
                  <span>React.js</span>
                  <span>Next.js</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                  <span>REST API</span>
                </div>
              </div>

              {/* Clipa */}
              <div className="resume-timeline-item">
                <div className="resume-timeline-header">
                  <div>
                    <div className="resume-timeline-role">Clipa</div>
                    <div className="resume-timeline-company">
                      SaaS Platform for Christmas Light Installers
                    </div>
                  </div>
                </div>
                <ul className="resume-timeline-bullets">
                  <li>
                    Built a platform for professional Christmas Light Installers
                    to register, create a company, and manage helpers/workers
                    within their organization.
                  </li>
                </ul>
                <div className="resume-project-tech">
                  <span>React.js</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                  <span>Express.js</span>
                  <span>AWS</span>
                </div>
              </div>

              {/* TTwiej */}
              {/* Villagehood App */}
              <div className="resume-timeline-item">
                <div className="resume-timeline-header">
                  <div>
                    <div className="resume-timeline-role">Villagehood App</div>
                    <div className="resume-timeline-company">
                      Community-Based Local Service Marketplace
                    </div>
                  </div>
                </div>
                <ul className="resume-timeline-bullets">
                  <li>
                    Built a community-based service marketplace connecting users with local
                    service providers for cleaning, maintenance, babysitting, and wellness with
                    location search, hourly rate booking, and real-time communication.
                  </li>
                </ul>
                <div className="resume-project-tech">
                  <span>React Native</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                  <span>Express.js</span>
                  <span>REST API</span>
                </div>
              </div>

              {/* NPM Packages */}
              <div className="resume-timeline-item">
                <div className="resume-timeline-header">
                  <div>
                    <div className="resume-timeline-role">Open Source NPM Packages</div>
                    <div className="resume-timeline-company">
                      Open Source Libraries & Packages
                    </div>
                  </div>
                </div>
                <ul className="resume-timeline-bullets">
                  <li>
                    Published 2 open-source NPM packages for form validation and
                    file upload handling in Express.js applications.
                  </li>
                </ul>
                <div className="resume-project-tech">
                  <span>Node.js</span>
                  <span>Express.js</span>
                  <span>NPM</span>
                  <span>Open Source</span>
                </div>
              </div>
            </div>
          </div>

          {/* ===== EDUCATION ===== */}
          <div className="resume-card">
            <div className="resume-card-title">
              <FiBookOpen /> Education
            </div>
            <div className="resume-edu-list">
              <div className="resume-edu-item">
                <div>
                  <div className="resume-edu-degree">
                    Master of Computer Applications (MCA)
                  </div>
                  <div className="resume-edu-institution">
                    Glocal University
                  </div>
                </div>
                <span className="resume-edu-year">2025 – Present</span>
              </div>
              <div className="resume-edu-item">
                <div>
                  <div className="resume-edu-degree">
                    Bachelor of Computer Applications (BCA)
                  </div>
                  <div className="resume-edu-institution">
                    Institute of Professional Studies (I.P.S.), Gangoh
                  </div>
                </div>
                <span className="resume-edu-year">2022 – 2025</span>
              </div>
              <div className="resume-edu-item">
                <div>
                  <div className="resume-edu-degree">
                    Bachelor of Commerce (B.Com)
                  </div>
                  <div className="resume-edu-institution">
                    Bhagwati Sher Singh Memorial Degree College
                  </div>
                </div>
                <span className="resume-edu-year">2019 – 2022</span>
              </div>
            </div>
          </div>

          {/* Download Button Bottom */}
          <div className="resume-download-row">
            <a
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-download-btn"
            >
              <AiOutlineDownload /> Download Resume PDF
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ResumeNew;
