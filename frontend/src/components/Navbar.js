import React from 'react';
import { AppBar, Toolbar, Typography, Link as MuiLink, Box } from '@mui/material';

function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Box display="flex" justifyContent="space-between" width="100%">
                    <Typography variant="h6" color="inherit" noWrap>
                        Carlos Sousa
                    </Typography>
                    <Box>
                        <MuiLink href="#welcome" color="inherit" variant="button" sx={{ margin: 1 }}>
                            Welcome
                        </MuiLink>
                        <MuiLink href="#projects" color="inherit" variant="button" sx={{ margin: 1 }}>
                            Projects
                        </MuiLink>
                        <MuiLink href="#oss" color="inherit" variant="button" sx={{ margin: 1 }}>
                            OSS
                        </MuiLink>
                        <MuiLink href="#skills" color="inherit" variant="button" sx={{ margin: 1 }}>
                            Skills
                        </MuiLink>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
