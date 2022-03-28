import { useEffect } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { ListItemAvatar, Divider } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import { styled } from '@mui/material/styles';
import { theme } from '../themes/material-ui-theme';
import SocialMediaIcons from './SocialMediaIcons';
import Aos from 'aos'

const StyledList = styled(List)`
  width: 100%;
  max-width: 360px;
  background-color: ${theme.palette.primary.main};
  color: white;
  margin: 0;
  @media print {
    * {
      color: black;
    }
  }
`

const ContactInfo = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <StyledList >
      <ListItem data-aos='slide-left'>
        <ListItemAvatar>
          <Avatar>
            <HomeRoundedIcon />
          </Avatar>
        </ListItemAvatar>
        <p>Annerogatan 1B <br />333 30 Smålandsstenar <br /> Gislaved</p>
      </ListItem>
      <Divider />
      <ListItem data-aos='slide-right'>
        <ListItemAvatar>
          <Avatar>
            <LocalPhoneRoundedIcon />
          </Avatar>
        </ListItemAvatar>
        <p>0731070078</p>
      </ListItem>
      <Divider />
      <ListItem data-aos='slide-left'>
        <ListItemAvatar>
          <Avatar>
            <AlternateEmailRoundedIcon />
          </Avatar>
        </ListItemAvatar>
        <p>tamim.jabr@outlook.com</p>
      </ListItem>
      <Divider />
      <ListItem data-aos='slide-right'>
        <SocialMediaIcons fontSize='large'
          facebook="https://www.facebook.com/tamim.jabr"
          instagram='https://www.instagram.com/tamim.jabr/'
          github='https://github.com/Tamimjabr'
          linkedin='https://www.linkedin.com/in/tamim-jabr-2533bb1b9/' />
      </ListItem>
    </StyledList >
  )
}

export default ContactInfo 
