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
                    <div className="showcase__links">
                        <a type="button" href={project_link} target="_blank" rel="noopener noreferrer" className="button">View Project</a>
                        <a type="button" href={source_link} target="_blank" rel="noopener noreferrer" className="button secondary">Source Code</a>
                    </div>
                </div>
                <div className="showcase__content-video">
                    <iframe title="kchai programming" src={src} frameBorder="0" allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
            </div>
        </div>
    );
}

export default Showcase;