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

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clipa}
              isBlog={false}
              title="Clipa App"
              description="The Christmas Light Installation app revolutionizes the holiday decorating industry by providing a comprehensive and user-friendly platform for professionals. This innovative tool simplifies the entire process, from initial setup and subscription selection to creating detailed estimates and managing customer interactions. With features like customizable calculations, photo editing and markup, and team collaboration tools, the app empowers users to deliver precise and visually appealing estimates."
              ghLink="https://github.com/soumyajit4419/Chatify"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BusinessesListing}
              isBlog={false}
              title="Businesses Listing App"
              description="The objective of the app is to allow contractors, service providers, etc to sign up and pay a yearly or monthly fee to be advertised on the app. The users (people searching for contractors) will be able to sign up and use the app for free. It will have multiple categories centered around the marine industry i.e., captains, mates, marinas, contractors, etc. There will be all kinds of services from upholstery to paint repair etc. The user can message the contractor directly through the app but only message, not book service."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={con10der}
              isBlog={false}
              title="Con10Der App"
              description="The app connects college athletes and corporations for sponsorships using a Tinder-like swipe feature. Athletes sign up with .edu emails, showcasing achievements, while corporations highlight sponsorship goals. A matching algorithm pairs users based on interests. Features include in-app messaging, feedback, and digital contract signing. It ensures NCAA compliance and user verification. Initially free, the app provides tools for negotiation, contract templates, and secure matchmaking, streamlining sponsorship opportunities between athletes and businesses."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={twejj}
              isBlog={false}
              title="TTwej On Demand App"
              description="The on-demand app allows users to book services from professionals across various categories. Users can sign up, verify with OTP, browse and filter services, and book based on location or type (business or individual). Features include saved payment methods, ratings, reviews, chat, and location navigation. Businesses and individuals manage bookings, view earnings, and withdraw payments. The admin panel oversees user management, professional approvals, earnings, and analytics. The app simplifies service discovery, booking, and communication for both customers and service providers."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard 
              imgPath={Prayer}
              isBlog={false}
              title="Prayer App"
              description="The Prayer app offers personalized prayer reminders, accurate prayer timings, and events managed by the admin. It includes video call features, allowing users to connect with instructors for spiritual classes. Instructors can upload videos for users to access on their profiles. The app also enables secure donations, community engagement, and curated news updates. Designed for both Android and iPhone platforms, it ensures user-friendly navigation, technical reliability, and supports spiritual growth by offering educational resources and fostering community interaction."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eventsGear} 
              isBlog={false}
              title="Eevents Gear App"
              description="The app will have two user types: customers and vendors. Customers can browse categories like events, services, and equipment, view vendor profiles, and chat with them. Vendors can register, upload service details, and share social media links, requiring a subscription for listing. The app will be developed using Flutter and Node.js, hosted on AWS, with code managed on GitHub. Weekly check-ins with the client will occur via Fiverr and Zoom. An admin dashboard will manage both user interfaces and vendor subscriptions."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={villagehood}
              isBlog={false}
              title="Villagehood App"
              description="The app allows users to view photos shared by others, search by location, or browse nearby. Users can sign up or log in to post photos and view posts with a username and location. Swiping up on photos notifies the owner, but only premium subscribers can access contact details and message others. Profiles include username, email, phone number, password, and profile picture. Subscriptions enable users to connect, ensuring privacy for contact information."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Nayesh}
              isBlog={false}
              title="Nayesh App"
              description="The app enables users to book services across various categories, available at either the user’s or supplier’s location (e.g., babysitting or laundry). Service providers must upload credentials for approval, except for tasks like pet sitting or hosting playgroups. A unified app serves both users and providers with tailored interfaces. Payments include a 10% app fee (e.g., $20 service + $2 fee = $22 total) and are processed via Stripe. Providers and users can seamlessly connect through the platform. Attached are logo ideas, fonts, branding colors, app design, and the."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
