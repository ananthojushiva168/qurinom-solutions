import React,{useEffect, useState} from "react";
import axios from "axios";
import "../App.css";
const Videos = (props) => {
  const [VideoDletails, setVideodetail] = useState([])
  useEffect(()=>{
    async function VideoPlay(){
      console.log(props.Data)
      try{
        const response = await axios.get('http://localhost:5000/admin/products',{
          headers:{
            'Authorization':localStorage.getItem('token').replace(/"/g, '')
          }}
          )
          console.log(response.data.products)
          setVideodetail(response.data.puroducts) 
      }catch(error){
        console.log(error.response.data);
      }
    }
    VideoPlay();
  })
  return (
    
    <div className="Videos-wrapper">
     
      {props.VideoDetails.map((video,index) => {
        
        return (
          <div>
         
          <video key={index} onClick={()=>{
              props.onFetch(video)
              props.onPreviewModal(true)
             
              
          }}  src={video.previewVideo} width="200" height="320"  style={{objectFit:"cover",cursor:"pointer"}} />
          </div>
        )
      })}
    </div>
  );
};

export default Videos;
