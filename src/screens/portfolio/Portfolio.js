import React from 'react';
import ProjectCard from './ProjectCard'

import portfolio from './portfolio.css';
import { projects } from '../../helpers/projects';
function Portfolio() {
  return (
    <div className="technologies__container" id="technologies">
      <div>
        <h1 style={{ textAlign: 'center' }}>
          Some of the Projects that I use
        </h1>
      </div>
      <div className="tech__cards__container">
        {projects.map((e, idx) => {
          return (
            <ProjectCard key={idx} project={e} />
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;
