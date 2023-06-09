import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Section from '../Section';

export default function EducationComponent() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Section id={"Education"}
    headTitle={"Education"}
    title={"Education"}
    >

    <div data-aos="fade-up" data-aos-duration="1000" className='px-6 py-6'>
      <Accordion style={{
        background:"inherit",
        borderBottom:"2px solid var(--logo-color)",
        color:"white"
      }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{
            color: "white"
          }}/>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
         
          </Typography>
          <Typography sx={{ color: 'white' }}> BACHLOR EDUCATION 2019 AD  </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Mahendra Multiple Campus
          Ratna highway,  Nepalgunj 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion   style={{
        // background:"#00628B",
        borderBottom:"2px solid var(--logo-color)",
        background:"inherit",
        color:"white"
      }} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{
            color: "white"
          }}/>}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          >
          {/* <Typography sx={{ width: '33%', flexShrink: 0 }}>Users</Typography> */}
          <Typography sx={{ color: 'white' }}>
          HIGN SCHOOL SECONDADRY EDUCATION  2017 AD 
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Holyland higher secondary school
          Ratna highway,  Nepalgunj 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion   style={{
        // background:"#00628B",
        
        background:"inherit",
        borderBottom:"2px solid var(--logo-color)",
        color:"white"
      }} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{
            color: "white"
          }}/>}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography 
         sx={{ color: 'white' }}
          >
             SLC 2019 AD 
          </Typography>
          {/* <Typography sx={{ color: 'text.secondary' }}>
            Filtering has been entirely disabled for whole web server
          </Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Mahendra Multiple Campus
          Ratna highway,  Nepalgunj 
          </Typography>
        </AccordionDetails>
      </Accordion>
          {/* 
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          >
          <Typography >HIGN SCHOOL SECONDADRY EDUCATION</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion> */}
    </div>
            </Section>
  );
}