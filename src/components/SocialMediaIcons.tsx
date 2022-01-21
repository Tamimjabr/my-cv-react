import { FC } from 'react';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { styled } from '@mui/material/styles';


const StyledDiv = styled('div')`
  margin: 1rem 0;
  font-size: 1.5rem;
  width: 80%;
  text-align:center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  & > svg {
    background-color:white;
    border-radius: 50%;
    transition: all 0.5s ease-in-out;
    &:hover {
      background-color: white;
      border-radius: 50%;
      transform: scale(1.5);
      transform-origin: center;
      transition-duration: 1s;
      -webkit-box-shadow: 0px 0px 49px -4px #ffffff;
      -moz-box-shadow: 0px 0px 49px -4px #ffffff;
      box-shadow: 0px 0px 49px -4px #ffffff;
    }
  }
`

interface Props {
  fontSize?: 'small' | 'medium' | 'large';
}

const SocialMediaIcons: FC<Props> = ({ fontSize = 'large' }) => {
  return (
    <StyledDiv >
      <FacebookRoundedIcon fontSize={fontSize} sx={{ color: '#379ad6' }} />
      <GitHubIcon fontSize={fontSize} sx={{ color: 'black' }} />
      <InstagramIcon fontSize={fontSize} sx={{ color: '#9a37ac' }} />
      <LinkedInIcon fontSize={fontSize} sx={{ color: '#03a3ec' }} />
    </StyledDiv>
  )
};

export default SocialMediaIcons;
