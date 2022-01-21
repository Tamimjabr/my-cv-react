import { FC } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
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
`

interface Props {
  fontSize?: 'small' | 'medium' | 'large';
}

const SocialMediaIcons: FC<Props> = ({ fontSize = 'large' }) => {
  return (
    <StyledDiv >
      <FacebookIcon fontSize={fontSize} />
      <GitHubIcon fontSize={fontSize} />
      <InstagramIcon fontSize={fontSize} />
      <LinkedInIcon fontSize={fontSize} />
    </StyledDiv>
  )
};

export default SocialMediaIcons;
