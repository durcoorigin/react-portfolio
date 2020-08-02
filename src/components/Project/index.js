import React from 'react';

import photo1 from '../../assets/portfolio-img/whiskey-inventory.jpg';
import photo2 from '../../assets/portfolio-img/nutrifinder.jpg';
import photo3 from '../../assets/portfolio-img/photo-port.jpg';
import photo4 from '../../assets/portfolio-img/weather-dashboard.jpg';
import photo5 from '../../assets/portfolio-img/run-buddy.jpg';
import photo6 from '../../assets/portfolio-img/zoo-keeper.jpg';



function Project() {

    return (
        <div>
            <img
              src={photo1}
              className="img-thumbnail mx-1"
              alt="placeholder"
            />
            <img
              src={photo2}
              className="img-thumbnail mx-1"
              alt="placeholder"
            />
            <img
              src={photo3}
              className="img-thumbnail mx-1"
              alt="placeholder"
            />
            <img
              src={photo4}
              className="img-thumbnail mx-1"
              alt="placeholder"
            />
            <img
              src={photo5}
              className="img-thumbnail mx-1"
              alt="placeholder"
            />
            <img
              src={photo6}
              className="img-thumbnail mx-1"
              alt="placeholder"
            />
        </div>
      )
}

export default Project;