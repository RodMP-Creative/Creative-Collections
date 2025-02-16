import '../Styles/Resume.css';

export default function Resume() {
  return (
    <div className="page-wrapper">
      <section>
        <div className="contact-address">
          <a href="/assets/resume.pdf" download>Download Resume</a>
        </div>
      </section>

      <section className="page-section">
        <h2>Experience</h2>
        <h1>Company A </h1>
        <h1>Company B </h1>
      </section>

      <section className="page-section">
        <h2>Education</h2>
        <h1>University A </h1>
        <h1>University B </h1>
      </section>

      <section className="page-section">
        <h2>Skills</h2>
        <h1>Problem Solving</h1>
        <h1>Multilingual</h1>
      </section>

      <section className="page-section">
        <h2>Front End</h2>
          <h1 data-description="Markup language for creating web pages">HTML</h1>
          <h1 data-description="Style sheet language for designing web pages">CSS</h1>
          <h1 data-description="Programming language for web development">JavaScript</h1>
          <h1 data-description="JavaScript library for building user interfaces">React</h1>
          <h1 data-description="CSS framework for developing responsive websites">Bootstrap</h1>
      </section>
      
      <section className="page-section">
        <h2>Back End</h2>
          <h1 data-description="JavaScript runtime for server-side programming">Node.js</h1>
          <h1 data-description="Web application framework for Node.js">Express.js</h1>
          <h1 data-description="Relational database management system">MySQL</h1>
          <h1 data-description="NoSQL database for modern applications">MongoDB</h1>
          <h1 data-description="Architectural style for designing networked applications">RESTful APIs</h1>
      </section>
    </div>
  );
}
