import React from 'react'
import "./style.css"
// import "./1 style.css"
const EditPage = () =>{
    return(
      <div className="Editpage" style={{background: '#e5e5e5'}}>
      <form action="action_page.php"  className="container" id="con">
        <div className="form-group">
          <button className="btn"><i className="fa fa-close" /></button>
        </div>
        <div className="form-group">
          <h3 className="heading"><b>Edit Info</b></h3>
        </div>
        <div className="form-group" style={{marginTop: '-45px'}}>
          <label htmlFor="name" style={{fontSize: '22px'}}><b>Product Brand(with Model)*</b></label><br />
          <input type="type" placeholder="Product Name" name="name" id="name" style={{width: '80%', height: '38px'}} required /><br />
        </div>
        <div className="form-group">
          <label htmlFor="Product" style={{fontSize: '22px'}}><b>Product Type*</b></label><br />
          <input type="type" placeholder="Type" name="Product" id="Product" style={{width: '80%', height: '38px'}} required /><br />
        </div>
        <div className="form-group">
          <label htmlFor="category" style={{fontSize: '22px'}}><b>Category</b></label><br />
          <select id="category" name="category" style={{width: '80%', paddingRight: '25px'}}>
            <option value="select category">Select Category</option>
            <option value="#">Shoes</option>
            <option value="#" />
            <option value="#" />
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="Price" style={{fontSize: '22px'}}><b>Product Price*</b></label><br />
          <input type="type" placeholder="Product Name" name="Price" id="Price" style={{width: '80%', height: '38px'}} required /><br />
        </div>
        <div className="form-group">
          <label htmlFor="description" style={{fontSize: '22px'}}><b>Product Description*</b></label><br />
          <textarea id="description" name="description" style={{width: '80%', height: '100px'}} defaultValue={""} />
        </div>
        <div className="form-group">
          <button type="submit" className="updatebtn">Update</button>
          <button type="submit" className="cancelbtn">Cancel</button>
        </div>
      </form>
    </div>

    )
} 
export default EditPage;