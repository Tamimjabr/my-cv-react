import { FC } from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Box, Avatar } from '@mui/material';
import ProfileImg from '../img/mypic.png';
import ContactInfo from './ContactInfo';
import { theme } from '../themes/material-ui-theme';

const StyledDescriptionContaioner = styled('div')`
  margin:0;
  padding:0;
  width: 100%;
  height: 100%;
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
  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item className="animate__animated animate__backInLeft" xs={12} sm={12} md={4} sx={{ backgroundColor: `${theme.palette.primary.main}`, minHeight: '40vh' }}>
          <StyledDescriptionContaioner>
            <Avatar src={ProfileImg} alt="porfile-img" sx={{ width: 170, height: 170, m: '1rem auto' }} />
            <StyledH4>Tamim Jabr</StyledH4>
            <ContactInfo />
          </StyledDescriptionContaioner>
        </Grid>
        <Grid item className="animate__animated animate__backInRight" xs={12} sm={12} md={8}>
          <StyledDescriptionContaioner sx={{ backgroundColor: 'white' }}>
            <h3>Vem är jag?</h3>
            <StyledText>Tamim Jabr heter jag och är 26 år, är den lagspelande problemlösaren med passion
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
  )
}

export default Description
