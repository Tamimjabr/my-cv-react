import { Box, Card, CardContent, Typography } from '@mui/material'
import { theme } from '../themes/material-ui-theme'
const DrivingLicense = () => {
  return (

    <Box
      sx={{
        minWidth: '100%',
        height: 300,
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: `${theme.palette.primary.main}`,
      }}
    >
      <Typography variant="h4" sx={{ color: 'white' }}>
        Körkort
      </Typography>
      <Card sx={{
        minWidth: '50%', textAlign: 'center', backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '0.5rem',
      }}>
        <CardContent>
          <Typography variant="body2" sx={{ fontSize: '1.4rem' }} >
            B-körkort sedan 12-01-2016 <br />
            Tillgång till egen bil <br />
            Van vid körning vid båda sidor
          </Typography>
        </CardContent>
      </Card>
    </Box >
  )
}

export default DrivingLicense