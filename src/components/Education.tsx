
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Education as EducationType, educations } from '../data/education';
import { Divider, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

const Education = () => {
  return (
    <>
      <Typography variant="h4" sx={{ m: '2rem 0 2rem 0', wordBreak: 'break-word' }}>
        Utbildning
      </Typography>
      < List sx={{ width: '100%', maxWidth: 700, bgcolor: 'background.paper' }}>
        {educations.map((education: EducationType, index: number) => (
          <>
            < ListItem >
              <ListItemAvatar>
                <Avatar src={education.icon} sx={{ width: 40, height: 40 }}>
                  <SchoolIcon />
                </Avatar>
              </ListItemAvatar>
              <div>
                <ListItemText primary={education.title} secondary={education.period} primaryTypographyProps={{
                  color: 'primary.dark',
                  fontWeight: '700',
                }} />
                <ListItemText primary={education.description} />
              </div>
            </ ListItem>
            {index !== educations.length - 1 && <Divider />}
          </>
        )
        )}
      </List >
    </>
  );
};

export default Education;
