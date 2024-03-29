import React from 'react';
import { AppBar, Toolbar, Typography, Link as MuiLink, Box } from '@mui/material';


const bannerImage = {
    name: '/website_logo_192.png', 
    alt: 'Carlos Sousa Logo'
}


function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Box display="flex" justifyContent="space-between" width="100%">
                    <Typography variant="h6" color="inherit" noWrap>
                        <MuiLink href="/" color="inherit" variant="button" sx={{ margin: 1 }}>
                            <img src={ bannerImage.name } width="30px" alt={ bannerImage.alt }/> Carlos Sousa
                        </MuiLink>
                    </Typography>
                    <Box>
                        <MuiLink href="/" color="inherit" variant="button" sx={{ margin: 1 }}>
                            Landing Page
                        </MuiLink>
                        <MuiLink href="/quotes" color="inherit" variant="button" sx={{ margin: 1 }}>
                            Arts Quotes
                        </MuiLink>
                        <MuiLink href="/lifetips" color="inherit" variant="button" sx={{ margin: 1 }}>
                            Life Tips
                        </MuiLink>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
