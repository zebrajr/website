import React from 'react';
import { List, ListItem, Typography, ListItemText, Link as MuiLink } from '@mui/material';

const projects = [
    { name: 'Project One', url: 'http://projectone.com' },
    { name: 'Project Two', url: 'http://projecttwo.com' },
    // ... other projects
];

function ProjectList() {
    return (
        <div id="projects">
            <Typography variant="h4">My Projects</Typography>
            <List>
                {projects.map((project, index) => (
                    <ListItem key={index}>
                        <ListItemText
                            primary={<MuiLink href={project.url} target="_blank">{project.name}</MuiLink>}
                        />
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

export default ProjectList;
