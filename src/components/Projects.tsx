import { useEffect } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Chip, Link } from '@mui/material';
import { projects } from '../data/projects';
import { styled } from '@mui/material/styles';
import { theme } from '../themes/material-ui-theme';
import Aos from 'aos'

const StyledProjectsContainer = styled('div')`
  width: 100%;
  background-color: ${theme.palette.primary.main};
  text-align: center;
`

const StyledDiv = styled('div')`
  width: 100%;
  text-align:center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
`

const Projects = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <StyledProjectsContainer data-aos='fade'>
      <Typography variant="h4" sx={{ m: '2rem 0 2rem 0', color: 'white' }}>
        Mina Projekt
      </Typography>
      <StyledDiv>
        {
          projects.map(project => (
            < Card sx={{ minWidth: '40%', maxWidth: '500px', borderRadius: '1rem', padding: '1rem', margin: '0 0 3rem' }}>
              <CardActionArea>
                <CardMedia
                  component="iframe"
                  height="300"
                  src={project.URL}
                  sx={{ borderRadius: '10px' }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.swedishDescription}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Tekniker: {project.techniques.map(tech => (
                      <Chip label={tech} sx={{ m: '0.3rem' }} />
                    ))}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link href={project.URL}>
                  <Button size="small" color="primary">
                    Besök
                  </Button>
                </Link>
              </CardActions>
            </ Card >
          ))
        }
      </StyledDiv >
    </StyledProjectsContainer>
  );
};

export default Projects;
