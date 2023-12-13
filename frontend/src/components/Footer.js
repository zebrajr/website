import React from 'react';
import { Typography } from '@mui/material';

function Footer() {
    return (
        <footer style={{ textAlign: 'center', marginTop: '20px' }}>
            <Typography variant="body2">© 2023 by Me. All rights reserved.</Typography>
            <Typography variant="body2">
                Email: <a href="mailto:me@example.com">me@example.com</a>
            </Typography>
        </footer>
    );
}

export default Footer;
