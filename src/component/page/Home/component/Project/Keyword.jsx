import React from 'react';
import style from './Project.module.css';

const Keyword = (props) => {
    const keywords = props.keywords;
    return (
        <div className={style.keywords}>
            {
                keywords.map(item => (
                    <p>{item}</p>
                ))
            }
        </div>
    )   
}

export default Keyword;