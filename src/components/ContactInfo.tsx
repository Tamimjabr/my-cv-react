import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { ListItemAvatar, Divider } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import { styled } from '@mui/material/styles';
import { theme } from '../themes/material-ui-theme';

const StyledList = styled(List)`
  width: 100%;
  max-width: 360px;
  background-color: ${theme.palette.primary.light};
  color: white;
  margin: 0;
  @media print {
    * {
      color: black;
    }
  }
`

const ContactInfo = () => {
  return (
    <StyledList >
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
    </StyledList >
  )
}

export default ContactInfo 
