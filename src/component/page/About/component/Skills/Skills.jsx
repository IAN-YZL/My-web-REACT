import React from 'react';
import SkillElement from './SkillElement';
import style from './Skills.module.scss';

class Skills extends React.Component {
    constructor(props) {
        super(props);
        const skills = [
            {name: "HTML", link: "https://res.cloudinary.com/diliv19aw/image/upload/v1579436089/tsd586rwojjfmoqle05k.png"},
            {name: "CSS", link: "https://res.cloudinary.com/diliv19aw/image/upload/v1579436102/lj4bnpncsk83imo2dfjo.png"},
            {name: "SASS", link: "https://res.cloudinary.com/diliv19aw/image/upload/v1579437039/izumicavrhpfmbwkmkm2.png"},
            {name: "Bootstrap", link: "https://res.cloudinary.com/diliv19aw/image/upload/v1579437280/xylrqwxwqbiv3c9js71e.png"},
            {name: "JavaScript", link: "https://res.cloudinary.com/diliv19aw/image/upload/v1579436138/lkdksoy0h8b8abu17iwq.png"},
            {name: "ES6", link: "https://res.cloudinary.com/diliv19aw/image/upload/v1582004559/won6djauvjyky0o6ihtb.png"},
            {name: "TypeScript", link: "https://res.cloudinary.com/diliv19aw/image/upload/v1579437238/b2l9ekbjvcs09jnfayah.png"},
            {name: "React.JS", link: "https://res.cloudinary.com/diliv19aw/image/upload/v1579436314/ygwv5ydrxktuysgbw0d2.svg"},
            {name: "Redux", link: "https://res.cloudinary.com/diliv19aw/image/upload/v1579437339/ixmnmasefsufdqwk6zgf.png"},
            {name: "FlexBox", link: "https://res.cloudinary.com/diliv19aw/image/upload/v1582004017/rby8tcsteuxuiqvghdr0.jpg"},
            {name: "JWT", link: "https://res.cloudinary.com/diliv19aw/image/upload/v1582004346/hwtr4dxlyw9wgobyos0n.png"},
            {name: "Webpack", link: "https://res.cloudinary.com/diliv19aw/image/upload/v1582271836/rfdl1ykbtommxgdmgeum.jpg"},
            {name: "Expressjs", link: "https://res.cloudinary.com/diliv19aw/image/upload/v1582004685/cbjc34opmzgwwgavngcj.jpg"},
            {name: "MongoDB", link: "https://res.cloudinary.com/diliv19aw/image/upload/v1579436847/dbb20kncfnrguc3lixt3.svg"},
            {name: "MySQL", link: "https://res.cloudinary.com/diliv19aw/image/upload/v1579436617/atzr0qzxg4qxzd1ykoq7.svg"},
            {name: "RESTful API", link: "https://res.cloudinary.com/diliv19aw/image/upload/v1579522427/j3hx2sgdvrxeel3wjqtj.svg"},

        ];
        this.state = {
            skills,
        }
    }

    render() {
        const skillList = this.state.skills;
        return (
            <div className={style.container}>
                {skillList.map((skill) => {
                    return (
                        <SkillElement name={skill.name} link={skill.link}/>
                    )
                })}
            </div>
        )
    }
}

export default Skills;