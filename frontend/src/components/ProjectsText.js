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
  sourceURL: 'https://www.dokuwiki.org/',
};

const archiveData = {
  text: 'Archive',
  url: 'http://archive.carlossousa.tech/',
  sourceName: 'ArchiveBox',
  sourceURL: 'https://archivebox.io/',
};

const tornIndexerData = {
  text: 'Torn Player Indexer',
  url: 'http://torn.carlossousa.tech/',
  sourceName: 'Torn - Online RPG',
  sourceURL: 'https://www.torn.com/',
};

const reactoCalcData = {
  text: 'ReactoCalc',
  url: 'http://calc.carlossousa.tech/',
  sourceName: 'GitHub',
  sourceURL: 'https://github.com/zebrajr/ReactoCalc',
};

const traveltracer = {
  text: 'Travel Tracer',
  url: 'https://travel.carlossousa.tech',
  sourceName: 'GitHub',
  sourceURL: 'https://github.com/zebrajr/traveltracer',
};

const statuspage = {
  text: 'Status Page',
  url: 'https://status.carlossousa.tech',
  sourceName: 'Gatus',
  sourceURL: 'https://github.com/TwiN/gatus',
};

const lily58pro = {
  text: 'Lily58 Pro Keyboard',
  url: 'https://wiki.carlossousa.tech/doku.php?id=engineering:computer_science:projects:lily58_pro_diy_custom_keyboard',
  sourceName: 'QMK and ZMK Firmware',
  sourceURL: 'https://github.com/zebrajr/lily58_keyboard',
};

function ProjectsText() {
    return (
        <div style={mainDivStyle}>
        <section id={sectionID} style={mainSectionStyle}>
        <Typography variant="h4" style={typographyStyles.largeBoldHeaderPrimary}>
        {titleText}
        </Typography>
        <Typography variant="h9" style={typographyStyles.subtleSubheading}>
        {subTitleText}
        </Typography>
        <Typography variant="body1" paragraph style={typographyStyles.colorfulEmphasis}>
        Let's begin with one of the most useful projects - a <MuiLink href={statuspage.url} target="_blank">{statuspage.text}</MuiLink>. This <MuiLink href={statuspage.sourceURL} target="_blank">{statuspage.sourceName}</MuiLink> allows me to quickly check the status of my hosted services and provide transparency to others.
        </Typography>
        <Typography variant="body1" paragraph style={typographyStyles.colorfulEmphasis}>
        As a hardware and software enthusiast, I've built two <MuiLink href={lily58pro.url} target="_blank">{lily58pro.text}</MuiLink> - a wired version for home use and a wireless one for work. The <MuiLink href={lily58pro.sourceURL} target="_blank">{lily58pro.sourceName}</MuiLink> is available for those interested in creating their own Lily 58 Pro Keyboard variant.
        </Typography>
        <Typography variant="body1" paragraph style={typographyStyles.colorfulEmphasis}>
        I maintain a personal <MuiLink href={wikipediaData.url} target="_blank">{wikipediaData.text}</MuiLink>, primarily for my own use. This <MuiLink href={wikipediaData.sourceURL} target="_blank">{wikipediaData.sourceName}</MuiLink> serves as a repository for notes, references, guides, and random thoughts.
        </Typography>
        <Typography variant="body1" paragraph>
        I've also developed a <MuiLink href={traveltracer.url} target="_blank">{traveltracer.text}</MuiLink> - a single-page application using Leaflet to display markers on a GeoJSON file, showcasing places I've visited or wish to explore. The source code is available on <MuiLink href={traveltracer.sourceURL} target="_blank">{traveltracer.sourceName}</MuiLink>.
        </Typography>
        <Typography variant="body1" paragraph>
        My <MuiLink href={archiveData.url} target="_blank">{archiveData.text}</MuiLink> preserves articles I want to reference or revisit, preventing them from being lost to the transient nature of the internet. Powered by <MuiLink href={archiveData.sourceURL} target="_blank">{archiveData.sourceName}</MuiLink> (though I have my reservations about it).
        </Typography>
        <Typography variant="body1" paragraph>
        I host a specialized <MuiLink href={reactoCalcData.url} target="_blank">{reactoCalcData.text}</MuiLink>, a calculator designed for specific financial scenarios. The source code is available on <MuiLink href={reactoCalcData.sourceURL} target="_blank">{reactoCalcData.sourceName}</MuiLink>.
        </Typography>
        <Typography variant="body1" paragraph>
        I'm still maintaining a <MuiLink href={tornIndexerData.url} target="_blank">{tornIndexerData.text}</MuiLink> for <MuiLink href={tornIndexerData.sourceURL} target="_blank">{tornIndexerData.sourceName}</MuiLink>. Though I stopped using it shortly after the Proof of Concept (PoC), some players continue to find it useful.
        </Typography>
        <Typography variant="body1" paragraph>
        Several additional services remain undisclosed due to privacy or confidentiality reasons.
        </Typography>
        <Typography variant="body1" paragraph>
        My HomeLab is a comprehensive setup that includes:
        <br />• Proxmox with VMs and containers
        <br />• 3-2-1 backup strategy
        <br />Primarily used for experimentation, learning, and testing.
        </Typography>
        <Typography variant="body1" paragraph>
        These projects reflect my passion for technology, balancing personal curiosity with practical innovation.
        </Typography>
        </section>
        </div>
    );
}

export default ProjectsText;
