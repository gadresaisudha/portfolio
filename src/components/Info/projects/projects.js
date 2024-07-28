import './projects.css'
import { projects } from '../../../portfolio';
import uniqid from 'uniqid';

function Projects() {
    return (
        <section className='projects' id='projects'>
        <div className='project-title'>PROJECTS</div>
        <ul className='projects-list'>
        {projects.map((project) => (
          <li key={uniqid()} className='projects-list-item'>
            <h1>{project.name}</h1>
            <p>{project.description}</p>
            <div className='stack'> [ {project.stack.map((stack)=>(
              <h6>{stack}</h6>
            )
            )} ]</div>
            <a href={project.sourceCode} target="_blank" className='pro-icon'><i class="fab fa-github"></i></a>
          </li>
        ))}
      </ul>
        </section>
      )

}

export default Projects;