import React from 'react';

const SkillElement = (props) => (
    <div>
        <div><img src={props.link} alt={props.name}/></div>
        <p>{props.name}</p>
    </div>
);

export default SkillElement;