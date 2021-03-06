import { useEffect } from 'react'
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
import Aos from 'aos'

const StyledDiv = styled('div')`
  padding: 1rem 0;
  width: 100%;
  background-color: #F2FFE9;
  text-align:center;
`
const StyledListMobile = styled('ul')`
  /* display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center; */
  @media print {
  display:block;
}
`

const StyledList = styled(TimelineItem)`
  @media print {
  display:block;
  & li{
    break-inside: avoid;
  }
}
  `

const JobExperience = () => {
  const matches = useMediaQuery('(max-width:750px)');

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  const jobs = JOB_EXPERIENCE_ARRAY.map((job) => (
    <StyledList >
      <TimelineOppositeContent
        sx={{ m: 'auto 0', fontSize: '1rem' }}
        align="right"
        variant="body2"
        color="text.primary"
      >
        {job.description}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot variant='outlined'>
          <Avatar src={job.icon} sx={{ width: 30, height: 30 }} />
        </TimelineDot >
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: '12px', px: 2 }}>
        <Typography variant="h6" >
          {job.company} {job.position && `- ${job.position}`}
        </Typography>
        <Typography color='text.secondary'>{`${job.startDate} - ${job.endDate} `}</Typography>
      </TimelineContent>
    </StyledList>))

  const jobsMobile = JOB_EXPERIENCE_ARRAY.map((job) => (
    <StyledListMobile  >
      <TimelineContent sx={{ py: '12px', px: 2 }}>
        <Typography variant="h6" sx={{ textAlign: 'left' }}>
          {job.company} {job.position && `- ${job.position} `}
        </Typography>
        <Typography color='text.secondary'>{`${job.startDate} - ${job.endDate} `}</Typography>
      </TimelineContent>
      <TimelineSeparator>
        <Avatar src={job.icon} sx={{ width: 30, height: 30 }} />
      </TimelineSeparator>
      <TimelineOppositeContent
        sx={{ m: 'auto 0', fontSize: '1rem' }}
        align="right"
        variant="body2"
        color="text.primary"
      >
        {job.description}
      </TimelineOppositeContent>
    </StyledListMobile>
  ))

  return (
    <StyledDiv data-aos='slide-up'>
      <Typography variant="h4">
        Jobberfarenheter
      </Typography>
      <Timeline position={matches ? 'left' : 'alternate'}>
        {matches ?
          <ul>
            {jobsMobile}
          </ul> :
          jobs}
      </Timeline>
    </StyledDiv>
  )
}

export default JobExperience

