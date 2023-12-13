import React from 'react';
import { Typography } from '@mui/material';

const sectionID = 'welcome';

function WelcomeText(){
    return (
        <div style={{ margin: '20px' }}>
            <section id={ sectionID }>
                    <h1>Welcome to My (Web)Portfolio</h1>
                    <p>
                        Hello there!
                        <br />
                    </p>
                    
                </section>
        </div>
    )
}


export default WelcomeText;