import React, {  } from 'react'
import '../../Customization/css/VideoPreview.css'
import { Button } from '@mui/material'
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import videos from "../../Customization/video/Requirements.mp4";

export default function VideoPreview(props) {
  console.log(props);
  return (
    <div className='preview'>
      <div className="video-card">
        <h5>{props.contentsArray[0]}</h5>
        <div style={{marginTop:'30px'}}>
          <Button className="playbtn" variant='contained' style={{backgroundColor:"#5146dd",borderRadius:"10px"}}><PlayArrowOutlinedIcon style={{fontSize:'60px'}} /></Button>
        </div>
        <div style={{marginTop:'30px'}}>
         <label>{props.contentsArray[1]}</label> 
        </div>
        <div style={{marginTop:"30px"}}>
          <Button  variant='contained' fullWidth style={{backgroundColor:"#5146dd"}}>{props.contentsArray[6]}</Button><p></p>
          <Button  variant='outlined' fullWidth color="">{props.contentsArray[8]}</Button>  
        </div>
      </div>
      <div className="video-display">
        <h1>{props.contentsArray[4]}</h1>
        <video src={videos} style={{width:'100%',height:'40vh'}} autoPlay></video>
      </div>
    </div>
  )
}
