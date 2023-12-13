import React from 'react';
import { Typography, ListItemText, Link as MuiLink } from '@mui/material';
import { typographyStyles, mainDivStyle, mainSectionStyle } from '../style';

const titleText = "Online Presence";
const subTitleText = "A few of the the places I can be found in the Internet";
const sectionID = 'onlinePresence';

const onlineReferences = [
    {
        name: 'Steam',
        username: 'csousa90',
        url: 'https://steamcommunity.com/id/csousa90/'
    },
    {
        name: 'GitHub',
        username: 'zebrajr',
        url: 'https://github.com/zebrajr/'
    },
    {
        name: 'Last.fm',
        username: 'zebrajr',
        url: 'https://www.last.fm/user/zebrajr'
    }
];

function OnlinePresence() {
    return (
        <div style={{ ...mainDivStyle }}>
            <section id={ sectionID } style={ mainSectionStyle }>
                <Typography variant="h4" style={ typographyStyles.largeBoldHeaderSecondary }>{ titleText }</Typography>
                <Typography variant="h9" style={ typographyStyles.subtleSubheading }>{ subTitleText }</Typography>

                {onlineReferences.map((newReference, index) => (
                    <ListItemText
                        primary={<MuiLink href={newReference.url} target="_blank">{newReference.name}</MuiLink>}
                        secondary={newReference.username ? newReference.username : ''}
                    />
                ))}
            </section>
        </div>
    );
}

export default OnlinePresence;