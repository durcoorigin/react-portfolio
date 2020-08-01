import React from 'react';

function Resume() {
    return(
        <section className="my-5">
            <h1  id="about">Resume</h1>
            <p>Checkout my resume on <a href="https://www.linkedin.com/in/christopher-short-7852581a2/">LinkedIn</a>!</p>

            <h3>Front End Proficiencies</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>jQuery</li>
                <li>responsive design</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>

            <h3>Back End Proficiencies</h3>
            <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Exoress</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
            </ul>
        </section>
     
    )
}

export default Resume;