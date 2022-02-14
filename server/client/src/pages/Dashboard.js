import React,{useEffect , useState} from 'react'

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Navbar from '../components/Navbar/Navbar';
import { isAuthenticated } from '../api';
import { Swiper, SwiperSlide } from "swiper/react";
import Axios from "axios"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./dashboard.css";

import { Autoplay, Pagination, Navigation } from "swiper";


const Dashboard = () => {
  const token = isAuthenticated().token
  const[image, setImages]=useState([])


  useEffect(() => {
    const getPlanets = async () => {
      const data = await Axios.get(`https://akabab.github.io/starwars-api/api/all.json`);
     setImages(data.data)
    };
    getPlanets();
  }, []);
  return (
 <>
 {
   token? (<>
   <Navbar/>
   <Box sx={{height:"130vh" , backgroundColor:"black" , color:"white"}}>
    <Grid conatiner spacing={2}> 
    <Grid item xs={12} bgcolor="#202020" textAlign="center"> 
    <Typography vairant="h6">All Your Star Wars Favourites Now Streaming On Disney +</Typography>
    </Grid>
    </Grid>
    <Grid conatiner p={3} >
      <Grid item xs={12}>
      <Swiper
         slidesPerView={2}
         loop={true}
         loopFillGroupWithBlank={true}
        spaceBetween={1}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <Box ml={5}>
        {
        image.map((img, i)=>(
          <SwiperSlide key={i}>
            <img src={img.image} alt="image" width="650" height="500"></img>
          </SwiperSlide>
        ))
      }
          </Box>
       
      </Swiper>
      </Grid>
    </Grid>
    

   </Box>
   </>):(<Typography variant='h3'>No Authorized</Typography>)
 }
 
 </>
  )
}

export default Dashboard