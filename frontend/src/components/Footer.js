import React from 'react';
import { Typography } from '@mui/material';
import { mainDivStyle } from '../style';

function Footer() {
    return (
        <footer style={{ mainDivStyle, paddingTop: '50px'}}>
            <Typography variant="body2">© 2024 by Me. All (some?) rights reserved, I think?</Typography>
            <Typography variant="body2">
                If you don't know me, you can try reaching out via Discord (zebra.jr) or <a href="mailto:contact@carlossousa.tech">contact@carlossousa.tech</a>
            </Typography>
        </footer>
    );
}

export default Footer;
