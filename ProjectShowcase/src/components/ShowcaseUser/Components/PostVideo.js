import React, { useState } from "react";
import ReactPlayer from "react-player";
import axios from 'axios'
import "../Form.css";
import { useNavigate } from "react-router-dom";
const PostVideo = (props) => {
  const navigate = useNavigate()
  const handlesubmit = async(e) =>{
    const VideoMetaData = {
      previewVideo,
      CompanyName,
      CompanyAddress,
      ProductBrand,
      ProductType,
      Category,
      ProductPrice,
      ProductDescription,
    };
    props.onDisplay(VideoMetaData);
    props.onModalClose(false);
    e.preventDefault();
    try{
    const response = await axios.post('http://localhost:5000/admin/products', {
      link:previewVideo, 
      companyName:CompanyName, 
      email:CompanyAddress,  
      brand:ProductBrand, 
      type:ProductType, 
      category:Category, 
      price:ProductPrice, 
      Description:ProductDescription,
  },{
    headers:{
      'Authorization':localStorage.getItem('token').replace(/"/g, '')
    }
  });
  setCompanyName("")
  setCompanyAddress("")
  setProductBrand("")
  setProductType("")
  setCategory("")
  setProductPrice("")
  setProductDescription("")
  setfileDisplay("")
  navigate('/dashboarduser')

}catch(error) {
  if (error.response) {
      console.log(error.response.data.msg);
  }
}

  }

  const [fileMeta, setfileMeta] = useState({});
  const [CompanyName, setCompanyName] = useState("");
  const [CompanyAddress, setCompanyAddress] = useState("");
  const [ProductBrand, setProductBrand] = useState("");
  const [ProductType, setProductType] = useState("");
  const [Category, setCategory] = useState("");
  const [ProductPrice, setProductPrice] = useState("");
  const [ProductDescription, setProductDescription] = useState("");
  const [fileDisplay, setfileDisplay] = useState(
    "No file currently selected for Upload"
  );

  const [previewVideo, setPreviewVideo] = useState(null);
  const FileChangeHandler = (e) => {
    // setSelected(true);
    console.log(e.target.files[0])
    const display =
      "File name " +
      e.target.files[0].name +
      " File size " +
      (e.target.files[0].size / 1000000).toFixed(3) +
      "MB";
    setfileDisplay(display);
    console.log(display);
    setfileMeta(e.target.files[0]);
    setPreviewVideo(URL.createObjectURL(e.target.files[0]));
    //console.log(e.target.files[0]);
  };
  const CancelUpload = () => {
    // setSelected(false);
    setfileMeta({});
    setPreviewVideo(null);
    setfileDisplay("No file currently selected for Upload");
    props.onModalClose(false);
  };

  return (
    <div
      onClick={() => {
     //   console.log("clicked");
        props.onModalClose(false);
      }}
      className="wrapper-form"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
       //   console.log("clicked2");
        }}
        className="form"
      >
        <h1>New Post</h1>
        <br></br>
        <div className="inputHolder">
          <div className="upload">Upload</div>
          <input
            required
            type="file"
            style={{ display: "none" }}
            id="video"
            onChange={FileChangeHandler}
            placeholder="choose file"
          ></input>
          <input disabled className="File" placeholder="Choose file"></input>
          <label className="LabelVideo" htmlFor="video">
            Browse
          </label>
        </div>
        <div className="fd">{fileDisplay}</div>

        <ReactPlayer
          className="VideoPlayer"
          url={previewVideo}
          width="300px"
          controls
          height="150px"
          playing={true}
        ></ReactPlayer>
        <br />
        <form
          onSubmit={(e) => {
            e.preventDefault();

            if (fileMeta.name === undefined) {
              alert("Select File");
              return;
            }
            const VideoMetaData = {
              previewVideo,
              CompanyName,
              CompanyAddress,
              ProductBrand,
              ProductType,
              Category,
              ProductPrice,
              ProductDescription,
            };
            props.onDisplay(VideoMetaData);
            props.onModalClose(false);
          }}
        >
          <div className="h4">Company Name*</div>
          <input
            value={CompanyName}
            className="inputStyle"
            onChange={(e) => {
              setCompanyName(e.target.value);
            }}
            required
          ></input>
          <div className="h4">Email Address*</div>
          <input
            value={CompanyAddress}
            type="email"
            className="inputStyle"
            onChange={(e) => {
              setCompanyAddress(e.target.value);
            }}
            required
          ></input>
          <div className="h4">Product Brand(with Model)*</div>
          <input
            value={ProductBrand}
            className="inputStyle"
            onChange={(e) => {
              setProductBrand(e.target.value);
            }}
            required
          ></input>
          <div className="h4">Product Type*</div>
          <input
            value={ProductType}
            className="inputStyle"
            onChange={(e) => {
              setProductType(e.target.value);
            }}
            required
          ></input>
          <div className="h4">Category*</div>
          <select
            className="inputStyle"
            value={Category}
            onChange={(e) => {
            //  console.log(e.target.value);
              setCategory(e.target.value);
            }}
          >
            <option value="shirt">shirt</option>
            <option value="shoes">shoes</option>
            <option value="pants">pants</option>
          </select>
          <div className="h4">Product Price*</div>
          <input
            value={ProductPrice}
            onChange={(e) => {
              setProductPrice(e.target.value);
            }}
            className="inputStyle"
            required
          ></input>
          <div className="h4">Product Description*</div>
          <textarea
            value={ProductDescription}
            onChange={(e) => {
              setProductDescription(e.target.value);
            }}
            className="textInput"
          ></textarea>

          <div className="Buttons">
            <input className="button-28" type="submit" value="Upload" />
            <button className="button-29" onClick={CancelUpload}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostVideo;
