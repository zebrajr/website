import React from 'react';
import { Typography, Link as MuiLink } from '@mui/material';
import { typographyStyles, mainDivStyle, mainSectionStyle } from '../style';

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

const reactoCalcData = {
    text: 'ReactoCalc',
    url: 'http://calc.carlossousa.tech/',
    sourceName: 'GitHub',
    sourceURL: 'https://github.com/zebrajr/ReactoCalc'
}

const traveltracer = {
    text: 'Travel Tracer',
    url: 'https://travel.carlossousa.tech',
    sourceName: 'GitHub',
    sourceURL: 'https://github.com/zebrajr/traveltracer'
}

const statuspage = {
    text: 'Status Page',
    url: 'https://status.carlossousa.tech',
    sourceName: 'Gatus',
    sourceURL: 'https://github.com/TwiN/gatus'
}


function ProjectsText() {
    return (
        <div style={{ ...mainDivStyle}}>
            <section id={ sectionID } style={ mainSectionStyle }>
            <Typography variant="h4" style={ typographyStyles.largeBoldHeaderPrimary }>{ titleText }</Typography>
            <Typography variant="h9" style={ typographyStyles.subtleSubheading }>{ subTitleText }</Typography>
            <Typography variant="body1" paragraph style={ typographyStyles.colorfulEmphasis }>
                Let's start by the quickest, simplest (and one of the most useful for multiple reasons) - A <MuiLink href={ statuspage.url } target="_blank">{ statuspage.text }</MuiLink>.
                <br/>A <MuiLink href={ statuspage.sourceURL } target="_blank">{ statuspage.sourceName }</MuiLink> instance so I know if everything is running at a quick glance and to inform others (and myself) of all the services that I host and run, or at least the ones that are meant to be easy to find. 
            </Typography>
            <Typography variant="body1" paragraph style={ typographyStyles.colorfulEmphasis }>
                So, one of the many things I enjoy having (mostly for me to be fair) is my <MuiLink href={ wikipediaData.url } target="_blank">{ wikipediaData.text }</MuiLink>.
                <br/>Nothing fancy, just hosting <MuiLink href={ wikipediaData.sourceURL } target="_blank">{ wikipediaData.sourceName }</MuiLink> so I can keep some notes, references (maybe some guides?), and just random thoughts. 
            </Typography>
            <Typography variant="body1" paragraph>
                I also run an <MuiLink href={ archiveData.url } target="_blank">{ archiveData.text }</MuiLink> where I keep articles that I either reference or enjoy re-reading, and don't want them to be lost due to the natural state of the internet. 
                <br/>In case you want to have your own, it's called <MuiLink href={ archiveData.sourceURL } target="_blank">{ archiveData.sourceName }</MuiLink>. I have my issues with it, don't get me started on the topic.
            </Typography>
            <Typography variant="body1" paragraph>
                I'm still hosting a <MuiLink href={ tornIndexerData.url } target="_blank">{ tornIndexerData.text }</MuiLink> for <MuiLink href={ tornIndexerData.sourceURL } target="_blank">{ tornIndexerData.sourceName }</MuiLink>.
                <br/>I honestly stopped using it, like, 1 month after I finished the Proof of Concept (PoC), but some players still use it, so, guess it stays up.
                <br/>If for whatever reason you are interested in it ( don't code shame me :( ), you will find the Source Code in my GitHub.
            </Typography>
            <Typography variant="body1" paragraph>
                I'm also hosting a calculator, <MuiLink href={ reactoCalcData.url } target="_blank">{ reactoCalcData.text }</MuiLink>. Source code also available in <MuiLink href={ reactoCalcData.sourceURL } target="_blank">{ reactoCalcData.sourceName }</MuiLink>.
                <br/>It's a simple calculator that is useful for specific situations, mainly financial ones. Nothing fancy, just something that was put together (semi-)quickly.
            </Typography>
            <Typography variant="body1" paragraph>
                I also host this <MuiLink href={ traveltracer.url } target="_blank">{ traveltracer.text }</MuiLink>, source code in <MuiLink href={ traveltracer.sourceURL } target="_blank">{ traveltracer.sourceName }</MuiLink>.
                <br/>A one page application that shows Markers on a rendered GeoJSON file with Leaflet, to display a few of the places I either visited or want to visit. 
            </Typography>
            <Typography variant="body1" paragraph>
               I also host a few more services, but either I don't want or can't share publicly.
            </Typography>
            <Typography variant="body1" paragraph>
               Besides that, I like to run my own HomeLab, with all the whistles and bells (and the nerve destroying) that come from it.
               <br/>Nothing special, just a Proxmox with VMs and Containers, 3/2/1 Backup and so on, mainly for "Linux ISOs", learning & testing and stuff. 
            </Typography>
            </section>
        </div>
    );
}

export default ProjectsText;
