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
  facebook: string;
  github: string;
  instagram: string;
  linkedin: string;
}

const SocialMediaIcons: FC<Props> = ({ fontSize = 'large', facebook, github, instagram, linkedin }) => {
  return (
    <StyledDiv >
      <a href={facebook} target='_blank' rel="noreferrer">
        <FacebookRoundedIcon fontSize={fontSize} sx={{ color: '#50b2f0' }} />
      </a>
      <a href={github} target='_blank' rel="noreferrer">
        <GitHubIcon fontSize={fontSize} sx={{ color: 'black' }} />
      </a>
      <a href={instagram} target='_blank' rel="noreferrer">
        <InstagramIcon fontSize={fontSize} sx={{ color: '#9831aa' }} />
      </a>
      <a href={linkedin} target='_blank' rel="noreferrer">
        <LinkedInIcon fontSize={fontSize} sx={{ color: '#ffffff' }} />
      </a>
    </StyledDiv>
  )
};

export default SocialMediaIcons;
