import React from 'react';
import { AppBar, Toolbar, Link as MuiLink } from '@mui/material';

function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <MuiLink href="#home" color="inherit" variant="button">Home</MuiLink>
                <MuiLink href="#projects" color="inherit" variant="button">OSS</MuiLink>
                <MuiLink href="#projects" color="inherit" variant="button">Projects</MuiLink>
                <MuiLink href="#contact" color="inherit" variant="button">Contact</MuiLink>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
