import React from 'react';
import style from './Intro.module.scss';

const Info = () => (
    <div className={style.container}>
        <p>Full Stack Developer</p>
        <h1>Ian Yin</h1>
        <p className={style.details}>2 years of <b>front-end</b> and <b>back-end</b> development experience. Good at using programming languages such as python and java. Proficiency in using <b>Node.js, React.js, and .Net</b> for web development. 4 years of work experience about the Project Management. Always adhere to the principles of <i><b><span>Readable, Maintainable, and Reusable</span></b></i> for coding. Keen to use React.js for front-end development based on <i><b><span>SOLID</span></b></i> principles.</p>
    </div>
);

export default Info;