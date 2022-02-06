import Description from '../components/Description'
import Education from '../components/Education'
import JobExperience from '../components/JobExperience'
import ProgrammingSkills from '../components/ProgrammingSkills'
import Projects from '../components/Projects'
import References from '../components/References'
import { StyledContainer } from '../themes/styled-container'

const Homepage = () => {
  return (
    <StyledContainer>
      <Description />
      <JobExperience />
      <ProgrammingSkills />
      <Projects />
      <Education />
      <References />
    </StyledContainer>
  )
}

export default Homepage
