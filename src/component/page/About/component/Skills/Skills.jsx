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
            {name: "JQuery", link: "https://res.cloudinary.com/diliv19aw/image/upload/v1580258669/rbu5gmgu0ufxzdtyxfya.jpg"},
            {name: "ES6", link: "https://res.cloudinary.com/diliv19aw/image/upload/v1582004559/won6djauvjyky0o6ihtb.png"},
            {name: "TypeScript", link: "https://res.cloudinary.com/diliv19aw/image/upload/v1579437238/b2l9ekbjvcs09jnfayah.png"},
            {name: "React.JS", link: "https://res.cloudinary.com/diliv19aw/image/upload/v1579436314/ygwv5ydrxktuysgbw0d2.svg"},
            {name: "Redux", link: "https://res.cloudinary.com/diliv19aw/image/upload/v1579437339/ixmnmasefsufdqwk6zgf.png"},
            {name: "FlexBox", link: "https://res.cloudinary.com/diliv19aw/image/upload/v1582004017/rby8tcsteuxuiqvghdr0.jpg"},
            {name: "JWT", link: "https://res.cloudinary.com/diliv19aw/image/upload/v1582004346/hwtr4dxlyw9wgobyos0n.png"},
            {name: "Styled Components", link: "https://res.cloudinary.com/dfcalhv9i/image/upload/v1600647890/personal-web/atom_nffegf.png"},
            {name: "Webpack", link: "https://res.cloudinary.com/diliv19aw/image/upload/v1582271836/rfdl1ykbtommxgdmgeum.jpg"},
            {name: "Wordpress", link: "https://res.cloudinary.com/diliv19aw/image/upload/v1579436670/qxbzjpjrglhyiz4gcjkk.svg"},
            {name: "Expressjs", link: "https://res.cloudinary.com/diliv19aw/image/upload/v1582004685/cbjc34opmzgwwgavngcj.jpg"},
            {name: "MongoDB", link: "https://res.cloudinary.com/diliv19aw/image/upload/v1579436847/dbb20kncfnrguc3lixt3.svg"},
            {name: "MySQL", link: "https://res.cloudinary.com/diliv19aw/image/upload/v1579436617/atzr0qzxg4qxzd1ykoq7.svg"},
            {name: "RESTful API", link: "https://res.cloudinary.com/diliv19aw/image/upload/v1579522427/j3hx2sgdvrxeel3wjqtj.svg"},
            {name: ".Net Core", link: "https://res.cloudinary.com/diliv19aw/image/upload/v1579330408/ldshktei9ymoy8k6llk7.jpg"},
            {name: "Postman", link: "https://res.cloudinary.com/diliv19aw/image/upload/v1582271397/vspmrrad4hwzyjjfglms.jpg"},
            {name: "Swagger", link: "https://res.cloudinary.com/diliv19aw/image/upload/v1582271494/lzuu2r2ghjwfs17dpo77.png"},
            {name: "Heroku", link: "https://res.cloudinary.com/dfcalhv9i/image/upload/v1600649714/personal-web/heroku-1_j7mcr3.svg"},
            {name: "Java", link: "https://res.cloudinary.com/diliv19aw/image/upload/v1579436768/iqzc8affehlxzlaivkgg.svg"},
            {name: "Python", link: "https://res.cloudinary.com/dfcalhv9i/image/upload/v1600649122/personal-web/python-logo-master-v3-TM_s1kvii.png"},
            {name: "PHP", link: "https://res.cloudinary.com/diliv19aw/image/upload/v1579436303/dbxbb7r4tfz0wwuhvp2q.svg"},
            {name: "NodeJS", link: "https://res.cloudinary.com/diliv19aw/image/upload/v1579436868/hcjkgipsibnu0iriyyft.svg"},
            {name: "CodeIgniter", link: "https://res.cloudinary.com/dfcalhv9i/image/upload/v1600649394/personal-web/codeigniter_nf4lxe.svg"},
            {name: "Flask", link: "https://res.cloudinary.com/dfcalhv9i/image/upload/v1600649574/personal-web/flask_ozpjl4.svg"},
            {name: "Github", link: "https://res.cloudinary.com/diliv19aw/image/upload/v1579436787/gpjetlr2y3m7cs8yvmgl.svg"},
            {name: "AWS", link: "https://res.cloudinary.com/diliv19aw/image/upload/v1579522919/pn6rpjmbakula9g56kbr.png"},
            {name: "Cloudinary", link: "https://res.cloudinary.com/dfcalhv9i/image/upload/v1600650272/personal-web/cloudinary-1_o5lvt7.svg"},
            {name: "Agile", link: "https://res.cloudinary.com/diliv19aw/image/upload/v1579435622/gc2jifx8lbvi8rkxykcg.svg"},
            {name: "JIRA", link: "https://res.cloudinary.com/dfcalhv9i/image/upload/v1600649658/personal-web/jira-1_sdchng.svg"},
            {name: "npm", link: "https://res.cloudinary.com/dfcalhv9i/image/upload/v1600648824/personal-web/1200px-Npm-logo.svg_pdqs4g.png"},
            {name: "Font Awesome", link: "https://res.cloudinary.com/dfcalhv9i/image/upload/v1600648999/personal-web/font_awesome_logo_rscrbl.png"},

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