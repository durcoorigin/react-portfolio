import React from 'react';

import Project from '../Project';

function Portfolio() {
    return(
        <section className="my-5">
            <h1  id="portfolio">Portfolio</h1>
            <p>Click on the images to view the projects</p>
            <Project  />
        </section>
    )
}

export default Portfolio;