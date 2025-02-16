import '../Styles/Portfolio.css';
import Project from '../components/Project';

export default function Portfolio() {
  const projects = [
    { title: 'ReadME Generator', description: 'Node', link: 'https://github.com/RodMP-Creative/ReadME-Generator', className: 'readme-generator' },
    { title: 'Culinary Chronicles', description: 'WebApp HTML/JavaScript/CSS', link: 'https://github.com/RodMP-Creative/Culinary-Chronicles', className: 'culinary-chronicles' },
    { title: 'Craft My Car', description: 'Node/Inquirer', link: 'https://github.com/RodMP-Creative/Craft-My-Car', className: 'craft-my-car' },
    { title: 'Weather Query', description: 'JavaScript', link: 'https://github.com/RodMP-Creative/Weather-Query', className: 'weather-query' },
    { title: 'Crew Control', description: 'Node/PostgreSQL', link: 'https://github.com/RodMP-Creative/Crew-Control', className: 'crew-control' },
  ];

  return (
    <div className="page-wrapper">
      <h1>Portfolio</h1>
      <div className="flex-container">
        {projects.map((project, index) => (
          <Project key={index} {...project} className={`flex-item ${project.className}`} />
        ))}
      </div>
    </div>
  );
}