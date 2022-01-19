import React from 'react'
import Description from '../components/Description'
import JobExperience from '../components/JobExperience'
import ProgrammingSkills from '../components/ProgrammingSkills'
import { StyledContainer } from '../themes/styled-container'

const Homepage = () => {
  return (
    <StyledContainer>
      <Description />
      <JobExperience />
      <ProgrammingSkills />
    </StyledContainer>
  )
}

export default Homepage
