import React from 'react';
import PersonalInfo from './component/PersonalInfo';
import Resume from './component/Resume';
import style from './About.module.scss';

const About = () => (
    <div className={style.container}>
        <PersonalInfo />
        <Resume />
    </div>
);

export default About;