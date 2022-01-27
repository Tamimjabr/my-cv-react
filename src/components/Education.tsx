
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import { Education as EducationType, educations } from '../data/education';
import { Divider } from '@mui/material';


const Education = () => {
  return (
    < List sx={{ width: '100%', maxWidth: 700, bgcolor: 'background.paper' }}>
      {educations.map((education: EducationType, index: number) => (
        <>
          < ListItem >
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
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
  );
};

export default Education;
