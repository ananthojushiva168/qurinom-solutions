import React from "react";
import "../App.css";
const Videos = (props) => {
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
