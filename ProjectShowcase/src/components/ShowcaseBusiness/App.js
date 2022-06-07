import React, { useState } from "react";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Section from "./Components/Section";
import PostVideo from "./Components/PostVideo";
import Videos from "./Components/Videos";
import PreviewVideo from "./Components/PreviewVideo";
const DashBoardBusiness = () => {
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

export default DashBoardBusiness;
