import { references } from '../data/references';
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const References = () => {
  return (
    <>
      {references.map(ref => (
        <Card sx={{ width: 300 }}>
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
    </>
  );
};

export default References;
