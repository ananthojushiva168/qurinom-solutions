import React, { useState } from "react";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Section from "./Components/Section";
import PostVideo from "./Components/PostVideo";
import Videos from "./Components/Videos";
import PreviewVideo from "./Components/PreviewVideo";
import { useEffect } from "react";
import jwt from "jsonwebtoken"
import {useNavigate} from 'react-router-dom';
const DashBoardUser = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    console.log(ProductInfo)
    var token = localStorage.getItem('token')
    token = token.replace(/"/g, '');
    console.log(token)
    if(token){
      const user = jwt.decode(token)
      if(!user){
        localStorage.removeItem('token')
        navigate('/')
      }

    }
  })
  const [ModalClose, setModalClose] = useState(false);
  const [displayVideos, setdisplayVideos] = useState([]);
  const [ProductInfo,setProductInfo]=useState(false);
  const [data1,setData]=useState();
  const VideoDetails = (data) => {
    
    setdisplayVideos((prev)=>[...prev,data]);
  };
  const FetchVideoDetails=(data)=>{
    console.log(data);
    setData(data);
  }
  return (
    <>
      <NavBar />
     
      <Section TotalVids={displayVideos.length} onModalClose={setModalClose} />
      {ModalClose && (
        <PostVideo onDisplay={VideoDetails} onModalClose={setModalClose} />
      )}
      <Videos onFetch={FetchVideoDetails} onPreviewModal={setProductInfo} VideoDetails={displayVideos}></Videos>
      {ProductInfo &&<PreviewVideo Data={data1} onPreviewModal={setProductInfo} />}
      <Footer />
    </>
  );
};

export default DashBoardUser;
