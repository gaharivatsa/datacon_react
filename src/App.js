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
import { useEffect , useState} from "react";
import axios from 'axios';
import dsbs from './media/dsbs_student-removebg-preview.png'
import soc from './media/soc-logo.png'
import srm from './media/srm logo fr.jpeg'
import srm_logo from './media/srm-logo.png'
import PhoneMenu from "./components/phone";
import EmailLink from "./components/email";
import InstagramLink from "./components/insta";
import MapComponent from "./components/map";
import dataconlogo from './media/DataKon__2_-removebg-preview.png'

export default function CustomAppBar() {
  const [con, setCon] = useState([]);
  useEffect(() => {
    // Define the API URL
    const apiUrl = 'https://datacon-one.vercel.app/api/getcontent';
    // Use Axios to make a GET request
    axios.get(apiUrl)
      .then((response) => {
        // Handle the response data here
        setCon(response.data)
        
      })
      .catch((error) => {
        // Handle any errors
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleregister = () => {
    const regist = 'https://forms.gle/7LUDvaukpCfZ6Cht7';
    const newTab = window.open(regist, '_blank');
    if (newTab) {
      newTab.focus();
    } else {
     
      window.location.href = regist;
    }
  };


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
        sx={{backgroundColor: "white"}}
        position="relative"
      >
        <Toolbar>
          <img src= {dataconlogo} style = {{height:'3rem',width:'15rem',position:'absolute',left:-15,top:10}}/>
          

          {/* Empty spacer to push buttons to the right */}
          <div style={{ flexGrow: 1 }}></div>

          {/* Event and Register buttons on the right */}
          <Button sx={{ color: "black",fontSize:'0.8rem' }} onClick={scroller}>
            Event
          </Button>
          <Button onClick={handleregister} sx={{ color: "black" ,fontSize:'0.8rem'}}>Register</Button>
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
            gap:'1rem'

          }}
        >
          <Typography variant="h4" sx = {{color:'white', fontWeight:'bold'}}>SRM DataKon</Typography>
          <Typography variant="h5" sx = {{color:'white' , fontFamily : ''}}>
          Where Tech Meets Talent
          </Typography>
          <Typography variant="h6" sx = {{color:'white' , fontFamily : ''}}>
          registration starts on : <span style={{fontSize:'1.2rem',fontWeight:'bold'}}>OCT 1</span> 
          </Typography> 
          <Typography variant="h6" sx = {{color:'white' , fontFamily : ''}}>
          registration ends by : <span style={{fontSize:'1.2rem',fontWeight:'bold'}}>OCT 20</span> </Typography>
         
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
      <Container maxWidth="lg" sx={{ minHeight: '50vh', display: 'flex', flexDirection: 'column' , gap:'5rem',mt:'5rem',mb:'5rem'}}>
  <Typography variant="h3" sx={{ textAlign: 'center' }}>Organizers</Typography>
          <Container maxWidth = 'lg' sx = {{display:'flex' , flexDirection:'row',flexWrap:'wrap',justifyContent:'center'}}>
          <img src={dsbs} style={{ height: '10rem',width:'12rem', margin: '1rem' }}></img>
    <img src={srm} style={{ height: '10rem',width:'15rem', margin: '1rem' }}></img>
    <img src={srm_logo} style={{ height: '10rem',width:'12rem', margin: '1rem' }}></img>
    <img src={soc} style={{ height: '10rem',width:'15rem', margin: '1rem' }}></img>
          </Container>
</Container>
<Container maxWidth = 'lg' sx = {{display: 'flex', flexDirection: 'column',minHeight:'30vh',gap:'2rem'}}>
          <Typography variant="h3" sx = {{textAlign:'center'}}>
            Contact Us
          </Typography>
          <Container maxWidth = 'lg' sx = {{
            display:'flex',flexDirection:'row',justifyContent:'center',gap:'3rem',alignItems:'center',flexWrap:'wrap'
          }}>
          <PhoneMenu/>
          <EmailLink/>
          <InstagramLink/>
          </Container>
</Container>
<Container maxWidth='lg' sx = {{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',minHeight:'30vh',gap:'2rem',marginTop:'3rem'}}>
<Typography variant="h3" sx = {{textAlign:'center'}}>Venue</Typography>
<Typography variant="h6">
SRMIST SRM Nagar, Kattankulathur, Chengalpattu District, Tamil Nadu - 603 203.
</Typography>
<Typography variant="h6">
FARADAY HALL , MECH BLOCK 
</Typography>
<MapComponent/>
</Container>
<div style= {{backgroundColor:'blue',width:'100%',height:'3rem',
display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:'3rem'}}>
  <Typography variant="h6" sx = {{color:'white'}}>© SRM DSBS DataKon 2023</Typography>
</div>
    </div>
  );
}
