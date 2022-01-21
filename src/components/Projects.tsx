import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Link } from '@mui/material';
import { projects } from '../data/projects';
import { styled } from '@mui/material/styles';
import { theme } from '../themes/material-ui-theme';

const StyledProjectsContainer = styled('div')`
  width: 100%;
  background-color: ${theme.palette.primary.light};
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
  return (
    <StyledProjectsContainer>
      <Typography variant="h4" sx={{ m: '2rem 0 2rem 0' }}>
        Mina Projekt
      </Typography>
      <StyledDiv>
        {
          projects.map(project => (
            < Card sx={{ minWidth: '80%', maxWidth: '500px' }}>
              <CardActionArea>
                <CardMedia
                  component="iframe"
                  height="300"
                  src={project.URL}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.swedishDescription}
                    {`\nTekniker: ${project.techniques.join(', ')}`}
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
