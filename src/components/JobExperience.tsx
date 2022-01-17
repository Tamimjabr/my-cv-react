import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import { GREEN } from '../themes/color';
import { JOB_EXPERIENCE_ARRAY } from '../data/job-experience';


const JobExperience = () => {
  return (
    <>
      <Typography variant="h3" >
        Jobberfarenheter
      </Typography>
      <Timeline position="alternate">
        {
          JOB_EXPERIENCE_ARRAY.map((job, index) => (
            <>
              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: 'auto 0' }}
                  align="right"
                  variant="body2"
                  color="text.secondary"
                >
                  Jag har jobbat på Postnord i Smålandsstenar i mer än 5 år (från 25/2/2016), mina arbetsuppgifter: sortering och utdelning av post med bil till företag, hushåll och postombud
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot>
                    <FastfoodIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <Typography variant="h6" component="span">
                    Postnord
                  </Typography>
                  <Typography>Februari 2016 - 2022</Typography>
                </TimelineContent>
              </TimelineItem>
            </>))
        }
      </Timeline>

    </>
  )
}

export default JobExperience


  //     <TimelineOppositeContent
  //     sx={{ m: 'auto 0' }}
  //     variant="body2"
  //     color="text.secondary"
  //   >
  //     Jag har jobbat som röstmottagare i Gislaveds kommun, Valmyndigheten under valet 2018, där min huvudsakliga arbetsuppgift var att ta emot röster 25/8/2018-9/9/2018, samt under valet för europaparlamentet 2019.
  //   </TimelineOppositeContent>
  //   <TimelineSeparator>
  //     <TimelineConnector />
  //     <TimelineDot color="primary">
  //       <LaptopMacIcon />
  //     </TimelineDot>
  //     <TimelineConnector />
  //   </TimelineSeparator>
  //   <TimelineContent sx={{ py: '12px', px: 2 }}>
  //     <Typography variant="h6" component="span">
  //       Gislaveds kommun, Valmyndigheten
  //     </Typography>
  //     <Typography>Augusti 2018- September 2018</Typography>
  //   </TimelineContent>
  // </TimelineItem>