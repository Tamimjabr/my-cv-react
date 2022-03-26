import { useEffect } from 'react'
import Description from '../components/Description'
import DrivingLicense from '../components/DrivingLicense'
import Education from '../components/Education'
import JobExperience from '../components/JobExperience'
import ProgrammingSkills from '../components/ProgrammingSkills'
import Projects from '../components/Projects'
import References from '../components/References'
import { StyledContainer } from '../themes/styled-container'
import { styled } from '@mui/material/styles'
import Aos from 'aos'

const StyledSubContainer = styled('div')`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  @media only screen and (max-width: 880px){
    flex-flow: column nowrap;
    & > div{
      width: 100%;
    }
  }
`

const Homepage = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <StyledContainer>
      <Description />
      <JobExperience />
      <ProgrammingSkills />
      <Projects />
      <Education />
      <StyledSubContainer data-aos='slide-up'>
        <References />
        <DrivingLicense />
      </StyledSubContainer>
    </StyledContainer>
  )
}

export default Homepage
