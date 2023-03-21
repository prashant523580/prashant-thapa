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

    <div className='px-6 py-6'>
      <Accordion style={{
        background:"#00628B",
        color:"white"
      }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color='info'/>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          >
          {/* <Typography sx={{ width: '33%', flexShrink: 0 }}>
            General settings
          </Typography> */}
          <Typography sx={{ color: 'white' }}>BACHLOR EDUCATION</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  style={{
        background:"#00628B",
        color:"white"
      }} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="info"/>}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          >
          {/* <Typography sx={{ width: '33%', flexShrink: 0 }}>Users</Typography> */}
          <Typography sx={{ color: 'white' }}>
          HIGN SCHOOL SECONDADRY EDUCATION
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
            varius pulvinar diam eros in elit. Pellentesque convallis laoreet
            laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  style={{
        background:"#00628B",
        color:"white"
      }} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary
          expandIcon={<ExpandMoreIcon color="light"/>}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography 
         sx={{ color: 'white' }}
          >
             SLC
          </Typography>
          {/* <Typography sx={{ color: 'text.secondary' }}>
            Filtering has been entirely disabled for whole web server
          </Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
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