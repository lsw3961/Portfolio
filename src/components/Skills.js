import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Skills() {

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            These are a few of my skills and different programs that I have picked up over the years.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <Accordion expanded={expanded === `${skill.title}`} onChange={handleChange(`${skill.title}`)}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={skill.title + "bh-content"}
                id={skill.title + "bh-header"}
                backgr
              >
                <Typography sx={{ color: 'text.secondary' }}>{skill.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {skill.content}
                </Typography>
              </AccordionDetails>
            </Accordion>

          ))}

        </div>
      </div>
    </section>
  );
}
