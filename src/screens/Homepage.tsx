import React from 'react'
import Description from '../components/Description'
import JobExperience from '../components/JobExperience'
import { StyledContainer } from '../themes/styled-container'

const Homepage = () => {
  return (
    <StyledContainer>
      <Description />
      <JobExperience />
    </StyledContainer>
  )
}

export default Homepage
