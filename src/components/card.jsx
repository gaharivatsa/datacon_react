import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export const CardsComponent = (props) => {
    return (
    <Card variant="outlined" sx = {{background: 'rgb(221,74,226)', 
    backgroundImage: 'linear-gradient(90deg, rgba(221,74,226,1) 14%, rgba(32,99,196,1) 96%)'}}>
          <CardContent>
            <Typography variant="h5" component="div" sx ={{color:'white' , fontWeight:'bolder'}}>
              {props.title}
            </Typography>
            <Typography sx={{ mb: 1,mt:1,color:'white',fontWeight:'bold' }} variant = 'h6'>
              {props.subtitle}
            </Typography>
            <Typography variant="body1" sx ={{color:'white'}}>
              {props.content}
            </Typography>
          </CardContent>
        </Card>
    );
}