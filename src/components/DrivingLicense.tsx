import { Box, Card, CardContent, Typography } from '@mui/material'
import { theme } from '../themes/material-ui-theme'
import { styled } from '@mui/material/styles';

const StyledContainer = styled('div')`
  background-color: ${theme.palette.primary.main};
  width: 40%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`

const DrivingLicense = () => {
  return (
    < StyledContainer >
      <Typography variant="h4" sx={{ color: 'white', m: '1rem auto 0' }}>
        Körkort
      </Typography>
      <Card sx={{
        minWidth: '50%', textAlign: 'center', backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '0.5rem',
        m: '0 auto 1rem auto'
      }}>
        <CardContent>
          <Typography variant="body2" sx={{ fontSize: '1.4rem' }} >
            B-körkort sedan 12-01-2016 <br />
            Tillgång till egen bil <br />
            Van vid körning vid båda sidor
          </Typography>
        </CardContent>
      </Card>
    </ StyledContainer>
  )
}

export default DrivingLicense