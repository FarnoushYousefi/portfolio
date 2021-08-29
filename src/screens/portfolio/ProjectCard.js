import React from 'react';

function ProjectCard({project}) {
  return (
    <div className="tech__card">
      <span style={{ margin: '5px', fontSize: '1.5rem' }}>{project.name}</span>
    </div>
  );
}

export default ProjectCard;
