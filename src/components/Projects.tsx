import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Link } from '@mui/material';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <>
      {
        projects.map(project => (
          < Card sx={{ maxWidth: '350px', width: '30%' }
          }>
            <CardActionArea>
              <CardMedia
                component="iframe"
                height="200"
                src={project.URL}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.swedishDescription}
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
        ))}
    </>
  );
};

export default Projects;
