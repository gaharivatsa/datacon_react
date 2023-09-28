import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export const CardsComponent = (props) => {
    return (
    <Card variant="outlined">
          <CardContent>
            <Typography variant="h4" component="div">
              {props.title}
            </Typography>
            <Typography sx={{ mb: 1 }} variant = 'h5' color="text.secondary">
              {props.subtitle}
            </Typography>
            <Typography variant="body1">
              {props.content}
            </Typography>
          </CardContent>
        </Card>
    );
}