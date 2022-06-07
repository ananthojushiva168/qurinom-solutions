import React from "react"
import "./index.css"
import Footer from "../Footer"

const Delete=()=>{
    return(
        <div>
            <div class="container">
                <form action="action_page.php" class="container" id="con">
                <div class="form-group">
                    <button class="btn"><i class="fa fa-close"></i></button>
                </div>
                <div class="form-group">
                    <h1>Do you want to Delete this video?</h1>
                </div>
                <div class="form-group">
                    <button type="submit" class="yesbtn">Yes</button>
                    <button type="submit" class="nobtn">No</button>
                </div>
            </form>
        </div>

        <br />
        <br />
        <br />
        <br />

        <Footer />

        </div>
    )
}

export default Delete