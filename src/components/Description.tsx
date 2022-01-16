import { FC } from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Box, Avatar } from '@mui/material';
import { useSpring, animated } from "react-spring";
import ProfileImg from '../img/mypic.png';
import ContactInfo from './ContactInfo';


const StyledDescriptionContaioner = styled('div')`
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  & a{
  text-decoration:none;
  }
  `

const StyledH4 = styled('h4')`
font-family: 'Gochi Hand', cursive;
font-family: 'Walter Turncoat', cursive;
color: #f5f5f5;
`

const StyledText = styled('p')`
  width: 70%;
  @media only screen and (max-width: 600px){
    width: 90%;
  }
`

const Description: FC = () => {
  const props = useSpring({
    delay: 300,
    config: { duration: 500 },
    from: {
      opacity: 0
    },
    to: async (next: any) => {
      await next({
        opacity: 1
      });
    }
  });
  return (
    <animated.div style={props}>
      <Box sx={{ width: '100%', height: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} sm={12} md={4} sx={{ backgroundColor: '#557C55', minHeight: '40vh' }}>
            <StyledDescriptionContaioner>
              <Avatar src={ProfileImg} alt="porfile-img" sx={{ width: 170, height: 170, m: '1rem auto' }} />
              <StyledH4>Tamim Jabr</StyledH4>
              <ContactInfo />
            </StyledDescriptionContaioner>
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
            <StyledDescriptionContaioner>
              <h3>Vem är jag?</h3>
              <StyledText>Tamim Jabr heter jag och är 26 år, en arbetsam kille med passion
                för programmering. Jag är en trevlig och social person som
                behärskar svenska, arabiska och engelska. Jag kan jobba ensamt men
                jag jobbar hellre i en grupp där strävar man tillsammans efter ett
                gemensamt mål. Jag kan prioritera och hålla mig lugn även när det
                finns mycket att göra. På min fritid springer jag eller tränar på
                gymmet.
              </StyledText>
            </StyledDescriptionContaioner>
          </Grid>
        </Grid>
      </Box>
    </animated.div>
  )
}

export default Description
