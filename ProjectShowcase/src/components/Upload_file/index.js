import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./index.css";
import {Link, useNavigate} from "react-router-dom"
import axios from "axios";
const UploadForm = () => {
    const navigate = useNavigate();
    const [msg, setMsg] = useState('');
    const [fileMeta, setfileMeta] = useState({});
    const [CompanyName, setCompanyName] = useState("");
    const [CompanyAddress, setCompanyAddress] = useState("");
    const [ProductBrand, setProductBrand] = useState("");
    const [ProductType, setProductType] = useState("");
    const [Category, setCategory] = useState("");
    const [ProductPrice, setProductPrice] = useState("");
    const [ProductDescription, setProductDescription] = useState("");
    const [fileDisplay, setfileDisplay] = useState("")
       // "No file currently selected for Upload"
        const UploadData = async (e) => {
            e.preventDefault();
            try {
                const response = await axios.patch('http://localhost:5000/admin/products/:id', {
                        CompanyName,
                        CompanyAddress,
                        ProductBrand,
                        fileMeta,
                        ProductType,
                        Category,
                        ProductPrice,
                        ProductDescription,
                });
                setCompanyName(e.target.value)
                setCompanyAddress(e.target.value)
                setProductBrand(e.target.value)
                setProductType(e.target.value)
                setCategory(e.target.value)
                setProductPrice(e.target.value)
                setProductDescription(e.target.value)
                setfileDisplay(e.target.value)
                setfileMeta(e.target.value)
                localStorage.setItem('token',JSON.stringify(response.data.accesstoken));
                localStorage.setItem('val',JSON.stringify(response.data.val));
                navigate('/')
    
      
            } catch (error) {
                if (error.response) {
                    setMsg(error.response.data.msg);
                }
            }
        }


    

    const [previewVideo, setPreviewVideo] = useState(null);
    const FileChangeHandler = (e) => {
        
        // setSelected(true);
        const display =
            "File name " +
            e.target.files[0].name +
            " File size " +
            (e.target.files[0].size / 1000000).toFixed(3) +
            "MB";
        setfileDisplay(display);
        setfileMeta(e.target.files[0]);
        setPreviewVideo(URL.createObjectURL(e.target.files[0]));
        console.log(e.target.files[0]);
    };
    const CancelUpload = () => {
        // setSelected(false);
        setfileMeta({});
        setPreviewVideo(null);
        setfileDisplay("No file currently selected for Upload");
    };

    return (
        <div className="form">
            <h1>New Post</h1>
            <br></br>
            <div className="inputHolder">
                
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
            <form onSubmit={UploadData} className="container form1">
            {/* <form
                onSubmit={(e) => {
                    e.preventDefault();

                    if (fileMeta.name === undefined) {
                        alert("Select File");
                        return;
                    }

                    console.log(
                        CompanyName,
                        CompanyAddress,
                        ProductBrand,
                        fileMeta,
                        ProductType,
                        Category,
                        ProductPrice,
                        ProductDescription
                    );
                }} 
            >*/}
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
                        console.log(e.target.value);
                        setCategory(e.target.value);
                    }}
                >
                    <option value="shirt">shirt</option>
                    <option value="shoes">shoes</option>
                    <option value="pants">pants</option>
                </select>
                <div className="h4">Product Price*</div>
                <input
                    type="number"
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
            {/* </form> */}
        </div>
    );
};

export default UploadForm;