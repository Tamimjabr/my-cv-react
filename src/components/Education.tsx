
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import { educations } from '../data/education';
import { Divider } from '@mui/material';

const Education = () => {
  return (
    < List sx={{ width: '100%', maxWidth: 700, bgcolor: 'background.paper' }}>
      {educations.map((education: any) => (
        <>
          < ListItem >
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={education.description} secondary={education.period} />
          </ ListItem>
          <Divider variant="middle" component="li" />
        </>
      )
      )}
    </List >
  );
};

export default Education;
