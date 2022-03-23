import React, { useEffect, useState } from 'react';
import {AppBar,Toolbar,IconButton,Typography, Grid} from '@material-ui/core'
import {Menu} from '@material-ui/icons'
import axios from 'axios'
import { Button, Col, Container, Row} from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { useNavigate } from 'react-router-dom';
import InfiniteScroll from "react-infinite-scroll-component";
const useStyles = makeStyles((theme) => ({
  root:{
// width:"500px",
// height:"620px"
  },
 appBar:{
   backgroundColor:"black"
 },
 contactBox:{
   border:"1px solid black",
   height:"100px",
   padding:"20px"
 },
 image:{
   width:"40px",
   height:"40px",
   borderRadius:"50%"
 }
}));

export default function SimplePaper() {
const navigate=useNavigate()
const [name,setName]=useState([])
// const [name,setName]=useState(Array.from({ length: 20 }))
const [image,setImage]=useState("")
  useEffect(()=>{
    axios .get("https://randomuser.me/api/?results=100")
    .then((response) => {

      const image=response.data.results[1].picture.large;
      console.log("hghj"+JSON.stringify(response.data.results[1].picture.large));
      console.log("name is :"+JSON.stringify(name));
    console.log(response.data.results[1])
  setName(response.data.results)

    })
  },[])

  const  fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
     
      name.concat(Array.from({ length: 10 }))
    }, 1000);
  };
  const signout=()=>{
    navigate("/")
  }
  const classes = useStyles();

  return (
    <div className={classes.root}>
       
 <Grid container>
   <Grid item xs={2} lg={4} ></Grid>
  <Grid item xs={6} lg={4} >
  <AppBar  position="static" className={classes.appBar}>
  <Toolbar variant="dense">
     <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
       <Menu/>
     </IconButton>
     <Typography variant="h6" color="inherit">
       Contacts
     </Typography>
     <Button style={{marginLeft:"250px"}} className="primary" onClick={signout}>Sign Out</Button>
   </Toolbar>
 </AppBar>
 <InfiniteScroll
          dataLength={name.length}
          next={fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
 {name.sort((a, b) => a.name.first > b.name.first ? 1 : -1).map((u)=>(
    <Grid container className={classes.contactBox}>
    <Grid item xs={4} lg={2}>
      <img src={u.picture.large}className={classes.image}></img>
    </Grid>
    <Grid item xs={2}><p>{u.name.first}</p></Grid>
  </Grid>
 ))}
 </InfiniteScroll>
  </Grid>
  
<Grid item xs={2} lg={4}></Grid>
      </Grid>
    </div>
  );
}
