import React from 'react';
import coverImage from "../../assets/profile-pic/Chris-Short.jpg";

function About() {
    return(
        <section className="my-5">
            <h1  id="about">Welcome</h1>
            <img src={coverImage} style={{ width: "50%"}} alt="cover" />
        </section>
     
    )
}

export default About;