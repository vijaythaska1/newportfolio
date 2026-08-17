import React from "react";
import { Container, Row, Col, } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import twejj from "../../Assets/Projects/twejj.svg";
import Prayer from "../../Assets/Projects/Prayer.svg";
import con10der from "../../Assets/Projects/con10der.png";
import clipa from "../../Assets/Projects/clipa.png";
import Nayesh from "../../Assets/Projects/Nayesh.svg";
import villagehood from "../../Assets/Projects/villagehood.png";
import eventsGear from "../../Assets/Projects/eventsGear.png";
import BusinessesListing from "../../Assets/Projects/BusinessesListing.svg";
import npmIcone from "../../Assets/Projects/npmImage.svg";
import jioinsurelogo from "../../Assets/Projects/jioinsurelogo.svg";
import bimastreet from "../../Assets/Projects/bimastreet.svg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <div className="gradient-line" />
        <p style={{ color: "#8892b0", fontSize: "1em", marginBottom: "20px" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jioinsurelogo}
              isBlog={false}
              title="jioinsure"
              description="JioInsure is a modern third-party insurance platform that connects users with trusted insurance providers, offering seamless access to a wide range of policy options. Similar to leading insurance aggregators, it simplifies the process of comparing, purchasing, and managing insurance plans — all in one place. With its secure and intuitive interface, JioInsure ensures a transparent, reliable, and user-friendly experience for both customers and partners."
              ghLink="/PrivateContent"
              demoLink="https://jioinsure.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bimastreet}
              isBlog={false}
              title="BimaStreet"
              description="BimaStreet is a comprehensive online insurance platform by Amaze Insurance Brokers Pvt Ltd, IRDAI approved. It connects users with top-rated insurers for Car, Health, Term, and Two-Wheeler insurance. Features include instant premium comparisons, free claim assistance, personalized insurance reports, and a seamless online purchase experience. Built with a modern tech stack, it offers a secure, transparent, and user-friendly platform for both customers and POS agents."
              ghLink="/PrivateContent"
              demoLink="https://bimastreet.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clipa}
              isBlog={false}
              title="Clipa App"
              description="The Christmas Light Installation app revolutionizes the holiday decorating industry by providing a comprehensive and user-friendly platform for professionals. This innovative tool simplifies the entire process, from initial setup and subscription selection to creating detailed estimates and managing customer interactions. With features like customizable calculations, photo editing and markup, and team collaboration tools, the app empowers users to deliver precise and visually appealing estimates."
              ghLink="/PrivateContent"
              demoLink="https://apps.apple.com/in/app/clipa/id6740476941"
              playLink="https://play.google.com/store/apps/details?id=com.app.clipa&pcampaignid=web_share"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={villagehood}
              isBlog={false}
              title="Villagehood App"
              description="A community-based service marketplace that connects users with local service providers for food preparation, cleaning, yard & garden maintenance, babysitting, and wellness services. Users can discover nearby services using location-based search, view service details and hourly rates, request/book services, save favorites, and manage bookings and communication through the app."
              ghLink="/PrivateContent"
              playLink="https://play.google.com/store/apps/details?id=com.app.villagehood&pcampaignid=web_share"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BusinessesListing}
              isBlog={false}
              title="Businesses Listing App"
              description="The objective of the app is to allow contractors, service providers, etc to sign up and pay a yearly or monthly fee to be advertised on the app. The users (people searching for contractors) will be able to sign up and use the app for free. It will have multiple categories centered around the marine industry i.e., captains, mates, marinas, contractors, etc. There will be all kinds of services from upholstery to paint repair etc. The user can message the contractor directly through the app but only message, not book service."
              ghLink="/PrivateContent"
            // demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={con10der}
              isBlog={false}
              title="Con10Der App"
              description="The app connects college athletes and corporations for sponsorships using a Tinder-like swipe feature. Athletes sign up with .edu emails, showcasing achievements, while corporations highlight sponsorship goals. A matching algorithm pairs users based on interests. Features include in-app messaging, feedback, and digital contract signing. It ensures NCAA compliance and user verification. Initially free, the app provides tools for negotiation, contract templates, and secure matchmaking, streamlining sponsorship opportunities between athletes and businesses."
              ghLink="/PrivateContent"
            // demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={twejj}
              isBlog={false}
              title="TTwej On Demand App"
              description="The on-demand app allows users to book services from professionals across various categories. Users can sign up, verify with OTP, browse and filter services, and book based on location or type (business or individual). Features include saved payment methods, ratings, reviews, chat, and location navigation. Businesses and individuals manage bookings, view earnings, and withdraw payments. The admin panel oversees user management, professional approvals, earnings, and analytics. The app simplifies service discovery, booking, and communication for both customers and service providers."
              ghLink="/PrivateContent"
            // demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Prayer}
              isBlog={false}
              title="Prayer App"
              description="The Prayer app offers personalized prayer reminders, accurate prayer timings, and events managed by the admin. It includes video call features, allowing users to connect with instructors for spiritual classes. Instructors can upload videos for users to access on their profiles. The app also enables secure donations, community engagement, and curated news updates. Designed for both Android and iPhone platforms, it ensures user-friendly navigation, technical reliability, and supports spiritual growth by offering educational resources and fostering community interaction."
              ghLink="/PrivateContent"
            // demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eventsGear}
              isBlog={false}
              title="Eevents Gear App"
              description="The app will have two user types: customers and vendors. Customers can browse categories like events, services, and equipment, view vendor profiles, and chat with them. Vendors can register, upload service details, and share social media links, requiring a subscription for listing. The app will be developed using Flutter and Node.js, hosted on AWS, with code managed on GitHub. Weekly check-ins with the client will occur via Fiverr and Zoom. An admin dashboard will manage both user interfaces and vendor subscriptions."
              ghLink="/PrivateContent"
            // demoLink="#"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Nayesh}
              isBlog={false}
              title="Nayesh App"
              description="The app enables users to book services across various categories, available at either the user’s or supplier’s location (e.g., babysitting or laundry). Service providers must upload credentials for approval, except for tasks like pet sitting or hosting playgroups. A unified app serves both users and providers with tailored interfaces. Payments include a 10% app fee (e.g., $20 service + $2 fee = $22 total) and are processed via Stripe. Providers and users can seamlessly connect through the platform. Attached are logo ideas, fonts, branding colors, app design, and the."
              ghLink="/PrivateContent"
            // demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={npmIcone}
              isBlog={false}
              title="Flexible-Form-Validation"
              description="Flexible-form-validation is a robust package for dynamic form validation in JavaScript. It supports customizable validation rules, real-time feedback, and seamless integration, making it perfect for enhancing user input validation workflows."
              ghLink="https://github.com/vijaythaska1/flexible-form-validation.git"
              demoLink="https://www.npmjs.com/package/flexible-form-validation"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={npmIcone}
              isBlog={false}
              title="File-Uploader-Express"
              description="File-uploader-express is a lightweight Node.js package for handling file uploads in Express applications. It ensures seamless integration, customizable options, and robust functionality, making file management efficient and hassle-free."
              ghLink="https://github.com/vijaythaska1/file-uploader-packages.git"
              demoLink="https://www.npmjs.com/package/file-uploader-express"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
