import '../Styles/Styles.css';

function Project({ title, description, link, className }) {
    return (
      <div className={`project ${className}`}>
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className='view-button'>View Project</a>
      </div>
    );
}

export default Project;