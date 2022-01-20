import Description from '../components/Description'
import JobExperience from '../components/JobExperience'
import ProgrammingSkills from '../components/ProgrammingSkills'
import Projects from '../components/Projects'
import { StyledContainer } from '../themes/styled-container'

const Homepage = () => {
  return (
    <StyledContainer>
      <Description />
      <JobExperience />
      <ProgrammingSkills />
      <Projects />
    </StyledContainer>
  )
}

export default Homepage
