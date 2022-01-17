import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import Typography from '@mui/material/Typography';
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
                  {job.description}
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
                    {job.company}
                  </Typography>
                  <Typography>{`${job.startDate} - ${job.endDate}`}</Typography>
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