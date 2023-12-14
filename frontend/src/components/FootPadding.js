import React from 'react';
import { Typography } from '@mui/material';

function FootPadding() {
    return (
        <footer style={{ textAlign: 'center', marginTop: '20px'}}>
            <Typography variant="body2">
                The padding was on purpose :)
                <br />It's <b>very</b> nice to be able to scroll past the bottom of the page :)
            </Typography>
        </footer>
    );
}

export default FootPadding;
