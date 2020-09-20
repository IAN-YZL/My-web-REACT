import React from 'react';
import PersonalInfo from './component/PersonalInfo';
import Resume from './component/Resume';
import Skills from './component/Skills';
import style from './About.module.scss';

const About = () => (
    <div className={style.container}>
        <PersonalInfo />
        <Skills />
        <Resume />
    </div>
);

export default About;