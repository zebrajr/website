import React from 'react';
import { Typography, ListItemText } from '@mui/material';
import { typographyStyles, mainDivStyle, mainSectionStyle } from '../style';

const titleText = "Skills & Competencies";
const subTitleText = "A few of the \"skills\" I have";
const sectionID = 'skills';

const skills = [
    {
        name: 'Coding',
        rating: 'Confident',
        description: 'JS/HTML/CSS, Python, PHP, Go, C, C++'
    },
    {
        name: 'Technologies',
        rating: 'Advanced',
        description: 'Linux, Docker, Node.js, Git, Ansible'
    },
    {
        name: 'Frameworks, Software and Such',
        rating: 'Intermediate',
        description: 'React, VMWare, KVM/QEMU, MySQL, MSSQL, PostgreSQL, SQLite, MariaDB'
    },
    {
        name: 'Tech Related',
        rating: 'Advanced',
        description: 'System Administrator, DevOps, Powershell, bash'
    },
    {
        name: 'Non-Tech',
        rating: 'Beginner',
        description: 'CAD, Electrical Engineering'
    }
];

function CompetenciesSkills() {
    return (
        <div style={{ ...mainDivStyle }}>
            <section id={ sectionID } style={ mainSectionStyle }>
                <Typography variant="h4" style={ typographyStyles.largeBoldHeaderPrimary }>{ titleText }</Typography>
                <Typography variant="h9" style={ typographyStyles.subtleSubheading }>{ subTitleText }</Typography>

                {skills.map((skill, index) => (
                    <ListItemText
                        primary={ skill.name }
                        secondary={ skill.description + ' [' + skill.rating + ']' }
                    />
                ))}
            </section>
        </div>
    );
}

export default CompetenciesSkills;