import React from 'react';
import Card from './Card';
import handy from './assets/handy.JPG';
import style from './Project.module.css';

const handyInfo = {
    title: "The Handy Platform",
    detail: "The Handy Platform is designed for providing good handy service for clients. Clients can check the service which provided by the platform, and review the service which they bought.",
    keywords: ["HTML5", "CSS3", "JavaScript", "JQuery", "PHP", "MySQL"]
};

const Row = () => {
    
    return (
        <div className={style.row}>
        
            <Card img={handy} information={handyInfo}>{handyInfo['title']}</Card>
        </div>
    )
}
;

export default Row;