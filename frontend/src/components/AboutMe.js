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
                I enjoy technologies in general, but I'm mainly interested in "all" about System Administration (SysAdmin), Development and Operations (DevOps), and solving problems and / or facilitating life via Coding.
            </Typography>
            <Typography variant="body1" paragraph style={ typographyStyles.colorfulEmphasis }>
                I also enjoy growing my knowledge in all kind of random stuff, but social sciences and general "not black and white" topics float my boat the most.
            </Typography>
            <Typography variant="body1" paragraph style={ typographyStyles.colorfulEmphasis }>
                Improving my skills in both areas that are directly relatable to the ones mentioned above as well as **completely** non related also scratch an itch. So on the same day I might be trying to improve my CAD knowledge, doing some weight lifting and general fitness and then deep diving into that sweet new <s>buzzword</s> technology.
            </Typography>
            </section>
        </div>
    );
}

export default AboutMe;
