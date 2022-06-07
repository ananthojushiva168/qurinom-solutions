import React from "react"
import "./index.css"

const Footer=()=>{

    return(
        <div>
        <footer class="new_footer_area bg_color" >
    <div class="new_footer_top">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6">
                    <div class="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s" >
                        <h3 class="f-title f_600 t_color f_size_18">Get in Touch</h3>
                        
                        <form action="#/" class="f_subscribe_two mailchimp" method="post" novalidate="true" _lpchecked="1">
                            <input type="text" name="EMAIL" class="form-control memail" placeholder="Email" />
                            <button class="btn btn_get btn_get_two" type="submit">Subscribe</button>
                            <p class="mchimp-errmessage" ></p>
                            <p class="mchimp-sucmessage" ></p>
                        </form>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s" >
                        <h3 class="f-title f_600 t_color f_size_18">Help</h3>
                        <ul class="list-unstyled f_list">
                            <li><a href="#/" class="col-bl">FAQ</a></li>
                            <li><a href="#/">Term &amp; conditions</a></li>
                            <li><a href="#/">Reporting</a></li>
                            <li><a href="#/">Documentation</a></li>
                            <li><a href="#/">Support Policy</a></li>
                            <li><a href="#/">Privacy</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s" >
                        <h3 class="f-title f_600 t_color f_size_18">Team Solutions</h3>
                        <div class="f_social_icon">
                            <a href="#/" class="fab fa-facebook" />
                            <a href="#/" class="fab fa-twitter" /> 
                            <a href="#/" class="fab fa-linkedin" />
                            <a href="#/" class="fab fa-pinterest" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer_bg">
            <div class="footer_bg_one"></div>
            <div class="footer_bg_two"></div>
        </div>
    </div>
    <div class="footer_bottom">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-sm-7">
                    <p class="mb-0 f_400">showcase All rights reserved.</p>
                </div>
                <div class="col-lg-6 col-sm-5 text-right">
                    <p>Made with <i class="icon_heart"></i> in <a href="#/">local stores</a></p>
                </div>
            </div>
        </div>
    </div>
    </footer>

        </div>
    )

}

export default Footer