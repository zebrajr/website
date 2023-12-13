import React from 'react';
import { List, ListItem, Typography, ListItemText, Link as MuiLink } from '@mui/material';

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
        <div style={{ margin: '20px' }}>
            <section id={ sectionID }>
                <Typography variant="h4">{ titleText }</Typography>
                <Typography variant="h9">{ subTitleText }</Typography>

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