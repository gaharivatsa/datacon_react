import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import dataconlg from './media/datacon2023-high-resolution-logo-color-on-transparent-background.png'
import { CardsComponent } from "./components/card";

export default function CustomAppBar() {
  const con = [
    {
      title: 'Event 1',
      subtitle: 'Subtitle for Event 1',
      content: 'Description for Event 1 goes here.',
    },
    {
      title: 'Event 2',
      subtitle: 'Subtitle for Event 2',
      content: 'Description for Event 2 goes here.',
    },
    {
      title: 'Event 3',
      subtitle: 'Subtitle for Event 3',
      content: 'Description for Event 3 goes here.',
    },
    {
      title: 'Event 4',
      subtitle: 'Subtitle for Event 4',
      content: 'Description for Event 4 goes here.',
    },
  ];
  
  const scroller = () => {
    const elm = document.getElementById("1");
    if (elm) {
      elm.scrollIntoView({ behavior: "smooth" });
    }
  };



  return (
    <div style = {{margin:0,padding:0,boxSizing:'border-box'}}
    >
      <AppBar
        sx={{ ml: 0, padding: 0, backgroundColor: "whitesmoke"}}
        position="relative"
      >
        <Toolbar>
          <img src= {dataconlg} style = {{height:'1rem',width:'10rem',}}/>
          

          {/* Empty spacer to push buttons to the right */}
          <div style={{ flexGrow: 1 }}></div>

          {/* Event and Register buttons on the right */}
          <Button sx={{ color: "black" }} onClick={scroller}>
            Event
          </Button>
          <Button  sx={{ color: "black" }}>Register</Button>
        </Toolbar>
      </AppBar>

      {/* Content div */}
      <Container maxWidth="false" sx={{ backgroundColor: "blue" }}>
        <Container
          maxWidth="sm"
          sx={{
            backgroundColor: "",
            minHeight: "50vh", // Minimum height to span half the page
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "16px",
            textAlign: "center",
            gap:'2rem'

          }}
        >
          <Typography variant="h4" sx = {{color:'white', fontWeight:'bold'}}>SRM DataKon</Typography>
          <Typography variant="body1" sx = {{color:'white' , fontFamily : ''}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut
            fringilla libero. Vestibulum viverra quam id dui tempus, sit amet
            <br />
            blandit ligula venenatis. Sed ut urna non nunc dictum convallis.
            Maecenas euismod, dolor non luctus blandit, sem libero facilisis
            libero, vel elementum elit dolor in urna. Sed iaculis odio vel erat
            blandit, eget tincidunt justo volutpat.
          </Typography>
        </Container>
      </Container>
      <Container
        maxWidth="lg"
        id="1"
        sx={{
          minHeight: "80vh",
          backgroundColor: "",
          display: "flex",
          flexDirection: "column",
          gap:"2rem"
        }}
      >
        <Typography
          variant="h3"
          sx={{ textAlign: "center", pt: "1rem", pb: "1rem" }}
        >
          Events
        </Typography>
        {con.map((events) => (
          <CardsComponent title = {events.title} subtitle = {events.subtitle} content = {events.content}/>
        ) )}
      </Container>
    </div>
  );
}
