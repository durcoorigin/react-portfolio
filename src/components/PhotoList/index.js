import React, { useState } from 'react';

// import photo from '../../assets/portfolio-img/500.png';

function PhotoList() {
    const [photos] = useState([
        {
            name: "placeholder 1",
            repo: "repo link",
            deployed: "deployed link"
        },
        {
            name: "placeholder 2",
            repo: "repo link",
            deployed: "deployed link"
        }
    ])

    return (
        <div>
            <div className="flex-row">
                {photos.map((image, i) => (
                <img 
                    src={require(`../../assets/profile-pic/${photos}/${i}.png`)} 
                    alt={image.name} 
                    className="img-thumbnail mx-1"
                    key={image.name}
                    />

                ))}
            </div>
        </div>
    )
}

export default PhotoList;