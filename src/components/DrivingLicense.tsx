import { Box, Card, CardContent, Typography } from '@mui/material'

const DrivingLicense = () => {
  return (

    <Box
      sx={{
        minWidth: '100%',
        height: 300,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: 'primary.main',
      }}
    >
      <Typography variant="h4" sx={{ m: '0 0 1rem 0', color: 'white' }}>
        Körkort
      </Typography>
      <Card sx={{ width: '50%', textAlign: 'center' }}>
        <CardContent>
          <Typography variant="body2" sx={{ fontSize: '1.4rem' }} >
            B-körkort sedan 12-01-2016 <br />
            Tillgång till egen bil <br />
            Van vid körning vid båda sidor
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default DrivingLicense