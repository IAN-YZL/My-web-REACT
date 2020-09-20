import React from 'react';
import SkillElement from './SkillElement';

class Skills extends React.Component {
    constructor(props) {
        super(props);
        const skills = [
            {name: "HTML", link: "https://res.cloudinary.com/diliv19aw/image/upload/v1579436089/tsd586rwojjfmoqle05k.png"},
            {name: "CSS", link: "https://res.cloudinary.com/diliv19aw/image/upload/v1579436102/lj4bnpncsk83imo2dfjo.png"},
        ];
        this.state = {
            skills,
        }
    }

    render() {
        const skillList = this.state.skills;
        return (
            <div>
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