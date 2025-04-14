import React from 'react';
import { Typography, ListItemText, Link as MuiLink } from '@mui/material';
import { typographyStyles, mainDivStyle, mainSectionStyle } from '../style';

const titleText = "GitHub Projects";
const subTitleText = "A few of my Open Source Software (OSS) repositories";
const sectionID = 'oss';

const projects = [
    {
        name: 'SysAdmin',
        url: 'https://github.com/zebrajr/sysadmin',
        description: 'A collection of scripts and gists that help on the (not only) day-to-day SysAdmin / DevOps tasks'
    },
    {
        name: 'This Website itself',
        url: 'https://github.com/zebrajr/website',
        description: 'Codeception!'
    },
    {
        name: 'LAMPinDocker',
        url: 'https://github.com/zebrajr/LAMPinDocker',
        description: 'A ready-to-use LAMP stack in Docker'
    },
    {
        name: 'Lily58 Keyboard',
        url: 'https://github.com/zebrajr/lily58_keyboard',
        description: 'Files used to generate Firmware for a Lily58 Pro / Lily58 Pro Wireless '
    },
    {
        name: 'HomeLab',
        url: 'https://github.com/zebrajr/HomeLab',
        description: 'Scripts to deploy and / or manage my HomeLab (and fluffy cloudy stuff)'
    },
    {
        name: 'GitHub Backupper',
        url: 'https://github.com/zebrajr/github-backupper',
        description: 'A simple Bash script to download (and keep up-to-date) projects from GitHub to your local system'
    },
    {
        name: 'Docker Stack Backupper',
        url: 'https://github.com/zebrajr/docker-stack-backupper',
        description: 'A collection of Bash scripts to backup docker(-compose) data and running images. Ideal to migrate or to backup Docker Stacks in the Cloud'
    },
    {
        name: 'Travel Tracer',
        url: 'https://github.com/zebrajr/traveltracer',
        description: 'A React application that uses Leaflet and GeoJSON data to display places I\'ve traveled to or want to visit'
    },
    {
        name: 'ReactoCalc',
        url: 'https://github.com/zebrajr/ReactoCalc',
        description: 'A React application that does calculations that (are sometimes) useful.'
    },
    {
        name: 'IMDB Scrapper',
        url: 'https://github.com/zebrajr/imdbscrapper',
        description: 'Scrapper to get movies and shows information from IMDB'
    }
];



function ProjectList() {
    return (
        <div id="projectsList" style={{ ...mainDivStyle }}>
            <section id={ sectionID } style={ mainSectionStyle }>
                <Typography variant="h4" style={ typographyStyles.largeBoldHeaderSecondary }>{ titleText }</Typography>
                <Typography variant="h9" style={ typographyStyles.subtleSubheading }>{ subTitleText }</Typography>

                {projects.map((project, index) => (
                    <ListItemText
                        primary={<MuiLink href={project.url} target="_blank">{project.name}</MuiLink>}
                        secondary={project.description ? project.description : ''}
                    />
                ))}
            </section>
        </div>
    );
}

export default ProjectList;
