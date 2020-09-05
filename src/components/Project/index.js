import React from 'react';

import photo1 from '../../assets/portfolio-img/whiskey-inventory.jpg';
import photo2 from '../../assets/portfolio-img/nutrifinder.jpg';
import photo3 from '../../assets/portfolio-img/photo-port.jpg';
import photo4 from '../../assets/portfolio-img/weather-dashboard.jpg';
import photo5 from '../../assets/portfolio-img/run-buddy.jpg';
import photo6 from '../../assets/portfolio-img/zoo-keeper.jpg';
import photo7 from '../../assets/portfolio-img/honey-do-list.jpg';



function Project() {

    return (
        <div>
          <a href="https://honey-do-list.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <img
              src={photo7}
              className="img-thumbnail mx-1"
              alt="placeholder"
            />
          </a>
          <a href="https://whiskey-inventory.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <img
              src={photo1}
              className="img-thumbnail mx-1"
              alt="placeholder"
            />
          </a>
          <a href="https://durcoorigin.github.io/nutrifinder/" target="_blank" rel="noopener noreferrer">
            <img
              src={photo2}
              className="img-thumbnail mx-1"
              alt="placeholder"
            />
          </a>
          <a href="https://durcoorigin.github.io/photo-port/" target="_blank" rel="noopener noreferrer">
            <img
              src={photo3}
              className="img-thumbnail mx-1"
              alt="placeholder"
            />
          </a>
          <a href="https://durcoorigin.github.io/weather-dashboard" target="_blank" rel="noopener noreferrer">
            <img
              src={photo4}
              className="img-thumbnail mx-1"
              alt="placeholder"
            />
          </a>
          <a href="https://durcoorigin.github.io/run-buddy/" target="_blank" rel="noopener noreferrer">
            <img
              src={photo5}
              className="img-thumbnail mx-1"
              alt="placeholder"
            />
          </a>
          <a href="https://morning-oasis-52972.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <img
              src={photo6}
              className="img-thumbnail mx-1"
              alt="placeholder"
            />
          </a>
        </div>
      )
}

export default Project;
