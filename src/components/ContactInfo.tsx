import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { GREEN } from '../themes/color';

const ContactInfo = () => {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: `${GREEN}` }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            img1
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            img2
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Work" secondary="Jan 7, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            img 3
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Vacation" secondary="July 20, 2014" />
      </ListItem>
    </List >
  )
}

export default ContactInfo 
