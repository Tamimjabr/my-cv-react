import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Typography, Avatar, useMediaQuery } from '@mui/material';
import { JOB_EXPERIENCE_ARRAY } from '../data/job-experience';
import { styled } from '@mui/material/styles';

const StyledDiv = styled('div')`
  padding: 1rem 0;
  width: 100%;
  background-color: #F2FFE9;
  text-align:center;
`

const JobExperience = () => {

  return (
    <StyledDiv>
      <Typography variant="h4" >
        Jobberfarenheter
      </Typography>
      <Timeline position="alternate">
        {
          JOB_EXPERIENCE_ARRAY.map((job, index) => (
            <>
              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: 'auto 0', fontSize: '1rem' }}
                  align="right"
                  variant="body2"
                  color="text.primary"
                >
                  {job.description}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot variant='outlined'>
                    <Avatar src={job.icon} sx={{ width: 30, height: 30 }} />
                  </TimelineDot >
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <Typography variant="h6" component="span">
                    {job.company}
                  </Typography>
                  <Typography color='text.secondary'>{`${job.startDate} - ${job.endDate}`}</Typography>
                </TimelineContent>
              </TimelineItem>
            </>))
        }
      </Timeline>
    </StyledDiv>
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