import React from 'react';
import { AppBar, Toolbar, Typography, Link as MuiLink, Box } from '@mui/material';


const bannerImage = {
    name: 'website_logo_192.png', 
    alt: 'Carlos Sousa Logo'
}


function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Box display="flex" justifyContent="space-between" width="100%">
                    <Typography variant="h6" color="inherit" noWrap>
                        <img src={ bannerImage.name } width="30px" alt={ bannerImage.alt }/> Carlos Sousa
                    </Typography>
                    <Box>
                        <MuiLink href="#projects" color="inherit" variant="button" sx={{ margin: 1 }}>
                            Projects
                        </MuiLink>
                        <MuiLink href="#oss" color="inherit" variant="button" sx={{ margin: 1 }}>
                            OSS
                        </MuiLink>
                        <MuiLink href="#skills" color="inherit" variant="button" sx={{ margin: 1 }}>
                            Skills
                        </MuiLink>
                        <MuiLink href="#onlinePresence" color="inherit" variant="button" sx={{ margin: 1 }}>
                            Online Presence
                        </MuiLink>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
