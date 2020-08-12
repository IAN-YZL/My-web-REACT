import React from 'react';
import Information from './Information';
import Keyword from './Keyword';
import style from './Project.module.css';

const Card = (props) => (
    <div className={style.card}>
        <img src={props.img} alt={props.children} className={style.image}/>
        <div className={style.description}>
            <Information title={props.information['title']}>{props.information['detail']}</Information>
            <Keyword keywords={props.information['keywords']}></Keyword>

        </div>
    </div>
);

export default Card;