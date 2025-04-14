import React from 'react';
import { Typography } from '@mui/material';
import { typographyStyles, mainDivStyle, mainSectionStyle } from '../style';

const titleText = "About Me";
const subTitleText = "A (somewhat) quick look at me, the \"public person\"";
const sectionID = 'aboutme';


function AboutMe() {
    return (
        <div style={{ ...mainDivStyle }}>
            <section id={ sectionID }  style={ mainSectionStyle }>
            <Typography variant="h4" style={ typographyStyles.largeBoldHeaderSecondary }>{ titleText }</Typography>
            <Typography variant="h9" style={ typographyStyles.subtleSubheading }>{ subTitleText }</Typography>
            <Typography variant="body1" paragraph style={ typographyStyles.colorfulEmphasis }>
                People in real life usually call me by my first name (unexpected, I know) Carlos. Online I usually go by "Nihu" or "zebrajr", depending on <s>what age I had when I created the account</s> which kinds of service I registered on.
            </Typography>
            <Typography variant="body1" paragraph style={ typographyStyles.colorfulEmphasis }>
                I have a broad interest in technologies, with a particular focus on System Administration (SysAdmin), Development and Operations (DevOps), and using coding and systems to solve problems and make life easier.
            </Typography>
            <Typography variant="body1" paragraph style={ typographyStyles.colorfulEmphasis }>
                I also enjoy expanding my knowledge in all kinds of random areas, with social sciences and complex, nuanced topics being my favorites.
            </Typography>
            <Typography variant="body1" paragraph style={ typographyStyles.colorfulEmphasis }>
        Improving my skills in both areas that are directly related to my main interests and those that are **completely** unrelated is fulfilling for me. So, on the same day, I might be enhancing my CAD knowledge, engaging in weight lifting and general fitness, soldering and building a custom keyboard and diving deep into the latest <s>buzzword</s> technology.
            </Typography>
            </section>
        </div>
    );
}

export default AboutMe;
