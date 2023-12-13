import React from 'react';
import { Typography, Link as MuiLink } from '@mui/material';

function ProjectsText() {
    return (
        <div style={{ margin: '20px' }}>
            <Typography variant="body1" paragraph>
                Welcome to my portfolio. Here you will find a collection of my side projects, 
                professional work, and other relevant links that I find interesting.
            </Typography>
            <Typography variant="body1" paragraph>
                If you're interested in learning more about my work, feel free to check out
                <MuiLink href="http://example.com/project1" target="_blank"> Project One </MuiLink>
                and
                <MuiLink href="http://example.com/project2" target="_blank"> Project Two.</MuiLink>
            </Typography>
            <Typography variant="body1" paragraph>
                For any inquiries or further information, please
                <MuiLink href="mailto:me@example.com"> contact me.</MuiLink>
                I am always open to discussing new projects and creative ideas.
            </Typography>
        </div>
    );
}

export default ProjectsText;
