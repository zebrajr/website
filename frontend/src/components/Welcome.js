import React from 'react';
import { Typography } from '@mui/material';

const sectionID = 'welcome';

function WelcomeText(){
    return (
        <div style={{ margin: '20px' }}>
            <section id={ sectionID }>
                    <Typography variant="h4" color="inherit" noWrap>
                        Hello there!
                    </Typography>
                    <Typography variant="subtitle1" color="inherit" noWrap>
                        Welcome to My (Web)Portfolio
                    </Typography>
                </section>
        </div>
    )
}

export default WelcomeText;