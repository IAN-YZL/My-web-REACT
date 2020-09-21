import React from 'react';
import style from './Skills.module.scss';

const SkillElement = (props) => (
    <div className={style.element_box}>
        <img src={props.link} alt={props.name}/>
        <p>{props.name}</p>
    </div>
);

export default SkillElement;