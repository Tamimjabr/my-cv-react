import { Box, Card, CardContent, Typography } from '@mui/material'
import Porsche from '../img/josh-berquist-PljkQ_KSbMc-unsplash.jpg'
const DrivingLicense = () => {
  return (

    <Box
      sx={{
        minWidth: '100%',
        height: 400,
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundImage: `url(${Porsche})`, // Photo by <a href="https://unsplash.com/@bbtl?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Josh Berquist</a> on <a href="https://unsplash.com/s/photos/porsche?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <Typography variant="h4" sx={{ m: '0 0 rem 0', color: 'white' }}>
        Körkort
      </Typography>
      <Card sx={{
        minWidth: '50%', textAlign: 'center', backgroundColor: 'rgba(255, 255, 255, 0.9)'
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