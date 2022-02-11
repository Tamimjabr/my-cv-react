import { references } from '../data/references';
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { styled } from '@mui/material/styles';

const StyledContainer = styled('div')`
  padding: 1rem 0;
  background-color: #F2FFE9;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  & .card-holder{
    margin: 2rem 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
`



const References = () => {
  return (
    <StyledContainer>
      <Typography variant="h4">
        Referenser
      </Typography>
      <div className="card-holder">
        {references.map(ref => (
          <Card sx={{ width: '22rem', height: '12rem', maxWidth: 300 }}>
            <CardHeader
              avatar={<Avatar src={ref.icon} aria-label="reference" >{ref.icon} </Avatar>}
              title={ref.name}
              subheader={ref.position}
            />
            <CardContent>
              {ref.phone && <Typography variant="body2" color="text.secondary">
                tel: {ref.phone}
              </Typography>}
              {ref.email && <Typography variant="body2" color="text.secondary">
                e-post: {ref.email}
              </Typography>}
            </CardContent>
          </Card>
        ))}
      </div>
    </StyledContainer>
  );
};

export default References;