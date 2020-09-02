import React from 'react';
import Card from './Card';
import handyLogo from './assets/handy.JPG';
import gatsbyLogo from './assets/gatsby.JPG';
import style from './Project.module.css';

const handyInfo = {
    title: "The Handy Platform",
    detail: "The Handy Platform is designed for providing good handy service for clients. Clients can check the service which provided by the platform, and review the service which they bought.",
    keywords: ["HTML5", "CSS3", "JavaScript", "JQuery", "PHP", "MySQL"]
};
const gatsbyInfo = {
    title: "The Great Gatsby",
    detail: "The project is one of the assessment of the course in University of Queensland. I made the website to combine the story in <strong>the Great Gatsby</strong> and the economic knowledge in <strong>the Great Depression</strong>.",
    keywords: ["HTML5", "CSS3", "JavaScript", "JQuery",]
}

const Project = () => {
    return (
        <div className={style.project}>
            <div className={style.row}>
                <Card img={handyLogo} information={handyInfo}>{handyInfo['title']}</Card>
                <Card img={gatsbyLogo} information={gatsbyInfo}>{gatsbyInfo['title']}</Card>
            </div>
        </div>
    )
}
;

export default Project;