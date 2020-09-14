import React from 'react';

function Showcase({ title, description, stack, project_link, source_link, src }) {
    return (
        <div className="showcase">
            <h2>{title}</h2>
            <br />
            <div className="showcase__content">
                <div className="showcase__content-details">
                    <div>
                        <p className="heading-section-2">What is {title} ?</p>
                        <p>{description}</p>
                    </div>
                    <div>
                        <p className="heading-section-2">How did I build this ?</p>
                        <p>{stack}</p>
                    </div>
                    <div>
                        <button>View Project</button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <button className="secondary">Source Code</button>
                    </div>
                </div>
                <div className="showcase__content-video">
                    <iframe  src={src} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    );
}

export default Showcase;