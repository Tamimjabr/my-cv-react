import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { ListItemAvatar, Divider } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { GREEN } from '../themes/color';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';

const ContactInfo = () => {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: `${GREEN}`, color: 'white' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <HomeRoundedIcon />
          </Avatar>
        </ListItemAvatar>
        <p>Annerogatan 1B <br />333 30 Smålandsstenar <br /> Gislaved</p>
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LocalPhoneRoundedIcon />
          </Avatar>
        </ListItemAvatar>
        <p>0731070078</p>
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AlternateEmailRoundedIcon />
          </Avatar>
        </ListItemAvatar>
        <p>tamim.jabr@outlook.com</p>
      </ListItem>
    </List >
  )
}

export default ContactInfo 
