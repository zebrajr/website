import React from 'react';
import { Typography, Link as MuiLink } from '@mui/material';
import { typographyStyles } from '../style';

const titleText = "Computers, Fluffy Clouds and Hosting";
const subTitleText = "Some projects and similar (not so) random stuff that I've been hosting";
const sectionID = 'projects';
const wikipediaData = {
    text: 'Wikipedia',
    url: 'http://wiki.carlossousa.tech/',
    sourceName: 'DokuWiki',
    sourceURL: 'https://www.dokuwiki.org/'
}

const archiveData = {
    text: 'Archive',
    url: 'http://archive.carlossousa.tech/',
    sourceName: 'ArchiveBox',
    sourceURL: 'https://archivebox.io/'
}

const tornIndexerData = {
    text: 'Torn Player Indexer',
    url: 'http://torn.carlossousa.tech/',
    sourceName: 'Torn - Online RPG',
    sourceURL: 'https://www.torn.com/'
}


function ProjectsText() {
    return (
        <div style={{ margin: '20px' }}>
            <section id={ sectionID }>
            <Typography variant="h4" style={ typographyStyles.largeBoldHeaderPrimary }>{ titleText }</Typography>
            <Typography variant="h9" style={ typographyStyles.subtleSubheading }>{ subTitleText }</Typography>
            <Typography variant="body1" paragraph style={ typographyStyles.colorfulEmphasis }>
                So, one of the many things I enjoy having (mostly for me to be fair) is my <MuiLink href={ wikipediaData.url } target="_blank">{ wikipediaData.text }</MuiLink>.
                <br/>Nothing fancy, just hosting <MuiLink href={ wikipediaData.sourceURL } target="_blank">{ wikipediaData.sourceName }</MuiLink> so I can keep some notes, references (maybe some guides?), and just random thoughts. 
            </Typography>
            <Typography variant="body1" paragraph>
                I also run a <MuiLink href={ archiveData.url } target="_blank">{ archiveData.text }</MuiLink> where I keep articles that I either reference or enjoy re-reading, and don't want them to be lost due to natural state of the internet. 
                <br/>In case you want to have your own, it's called <MuiLink href={ archiveData.sourceURL } target="_blank">{ archiveData.sourceName }</MuiLink>. I have my issues with it, don't get me started on the topic.
            </Typography>
            <Typography variant="body1" paragraph>
                I'm still hosting a <MuiLink href={ tornIndexerData.url } target="_blank">{ tornIndexerData.text }</MuiLink> for <MuiLink href={ tornIndexerData.sourceURL } target="_blank">{ tornIndexerData.sourceName }</MuiLink>.
                <br/>I honestly stopped using it, like, 1 month after I finished the Proof of Concept (PoC), but some players still use it, so, guess it stays up.
                <br/>If for whatever reason you are interested in it ( don't code shame me :( ), you will find the Source Code in my GitHub.
            </Typography>
            <Typography variant="body1" paragraph>
               I also host a few more services, but either I don't want or can't share publically.
            </Typography>
            <Typography variant="body1" paragraph>
               Besides that, I like to run my own HomeLab, with all the whistles and bells (and the nerve destroying) that come from it.
               <br/>Nothing special, just a Proxmox with VMs and Containers, 3/2/1 Backup, mainly for "Linux ISOs" and stuff. 
            </Typography>
            </section>
        </div>
    );
}

export default ProjectsText;
