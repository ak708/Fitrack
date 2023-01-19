import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Example() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="C:\MLH\fitrack\fitrack\public\shrug.jpeg"
        title="Kettlebell Shrug"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Shrug
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Stand with your feet shoulder width apart holding the kettlebell with
          both hands in front of your thighs. Bend forward at the hips bringing
          the kettlebell to the floor while you slightly bend your knees,
          keeping your back straight. Holding the kettlebell in both hands
          engage your shoulder blades, as if you are trying to touch them
          together. Release the shrug.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">
          <a href="https://musclewiki.com/kettlebells/male/traps/kettlebell-silverback-shrug">
            Learn More
          </a>
        </Button>
      </CardActions>
    </Card>
  );
}
