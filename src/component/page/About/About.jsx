import React from 'react';
import PersonalInfo from './component/PersonalInfo';
import style from './About.module.scss';

const About = () => (
    <div className={style.container}>
        <PersonalInfo />
    </div>
);

export default About;