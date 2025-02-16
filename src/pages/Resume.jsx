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
        <h1>Company A</h1>
        <h1>Company B</h1>
      </section>

      <section className="page-section">
        <h2>Education</h2>
        <h1>University A</h1>
        <h1>University B</h1>
      </section>

      <section className="page-section">
        <h2>Skills</h2>
        <h1>Problem Solving</h1>
        <h1>Multilingual</h1>
      </section>

      <section className="page-section">
        <h2>Front End</h2>
          <h1>HTML</h1>
          <h1>CSS</h1>
          <h1>JavaScript</h1>
          <h1>React</h1>
          <h1>Bootstrap</h1>
      </section>
      
      <section className="page-section">
        <h2>Back End</h2>
          <h1>Node.js</h1>
          <h1>Express.js</h1>
          <h1>MySQL</h1>
          <h1>MongoDB</h1>
          <h1>RESTful APIs</h1>
      </section>
    </div>
  );
}
