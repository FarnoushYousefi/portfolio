import React from 'react';

import technologies from './technologies.css'
import { techs } from '../../helpers/techs';
function Technologies() {
  return (
    <div className="technologies__container" id="technologies">
      <div>
        <h1 style={{ textAlign: 'center',marginTop: '1rem', color:'white' }}>
          Some of the Technologies that I use
        </h1>
      </div>
      <div className="tech__cards__container">
        {techs.map((e, idx) => {
          console.log(e)
          return (
            <div key={idx} className="tech__card">
            
              
              <span style={{margin:'5px', fontSize:'1.5rem'}}><i className={"fab fa-"+ e.iconName}></i>{e.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Technologies;
