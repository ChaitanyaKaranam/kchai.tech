import React from 'react';

function Skill({ img, skill }) {
    return (
        <div className="skill">
            <div className="skill__image">
                <img src={img} alt={skill} />
            </div>
            <div>
                <h3 className="heading-section-2">{skill}</h3>
            </div>
        </div>
    );
}

export default Skill;