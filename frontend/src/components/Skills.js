import React from 'react';
import { Typography, ListItemText } from '@mui/material';
import { typographyStyles, mainDivStyle, mainSectionStyle } from '../style';

const titleText = "Skills & Competencies";
const subTitleText = "A few of the \"skills\" I have ";
const skillRankOrder = "Beginner > Intermediate > Proficient > Expert";
const sectionID = 'skills';

const skills = [
    {
        name: 'Coding & Scripting',
        rating: 'Proficient',
        description: 'bash, Go, JS / HTML / CSS, PHP, Powershell, Python'
    },
    {
        name: 'Technologies',
        rating: 'Expert',
        description: 'Ansible, Docker, Git, KVM/QEMU, Linux, MariaDB, MongoDB, PostgreSQL, SQLite, VMWare, Windows'
    },
    {
        name: 'Frameworks, Software and Such',
        rating: 'Proficient',
        description: 'Django, Node.js, OpenCV, PyTorch, React'
    },
    {
        name: 'Tech Related',
        rating: 'Proficient',
        description: 'DevOps, SysAdmin'
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
            <section id={sectionID} style={mainSectionStyle}>
                <div>
                    <div>
                        <Typography variant="h4" style={typographyStyles.largeBoldHeaderPrimary}>{titleText}</Typography>
                    </div>
                    <div>
                    <Typography variant="h9" style={typographyStyles.subtleSubheading}>{subTitleText}</Typography>
                    </div>
                    <div>
                    <Typography variant="h9" style={typographyStyles.skillRankOrder}>{skillRankOrder}</Typography>
                    </div>
                </div>

                {skills.map((skill, index) => (
                    <ListItemText
                        primary={skill.name}
                        secondary={skill.description + ' [' + skill.rating + ']'}
                    />
                ))}
            </section>
        </div>
    );
}

export default CompetenciesSkills;
