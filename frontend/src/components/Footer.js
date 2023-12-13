import React from 'react';
import { Typography } from '@mui/material';

function Footer() {
    return (
        <footer style={{ textAlign: 'center', marginTop: '20px', paddingBottom: '1000px' }}>
            <Typography variant="body2">© 2023 by Me. All (some?) rights reserved, I think?</Typography>
            <Typography variant="body2">
                If you don't know me, you can try reaching out via: <a href="mailto:contact@carlossousa.tech">contact@carlossousa.tech</a>
            </Typography>
        </footer>
    );
}

export default Footer;
