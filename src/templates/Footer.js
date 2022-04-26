import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faGoogle } from "@fortawesome/free-brands-svg-icons"

function Footer() {
    return (
        <>
        {/* footer */}
        <div className="footer_agileinfo_topf py-5">
            <div className="container py-md-5">
                <div className="row">
                    <div id="Footerlogo" className="col-lg-3 footer_wthree_gridf mt-lg-5">
                        <h1> <a href="index.html">dofllamingo</a></h1><label className="sub-des">Online shop</label>
                    </div>
                    <div className="col-lg-3 footer_wthree_gridf mt-md-0 mt-4">
                        <ul className="footer_wthree_gridf_list">
                            <li>
                                <a href="index.html"><span aria-hidden="true"><FontAwesomeIcon icon={faAngleRight} /></span> Home</a>
                            </li>
                            <li>
                                <a href="about.html"><span aria-hidden="true"><FontAwesomeIcon icon={faAngleRight} /></span> About</a>
                            </li>
                            <li>
                                <a href="shop.html"><span aria-hidden="true"><FontAwesomeIcon icon={faAngleRight} /></span> Shop</a>
                            </li>
                            <li>
                                <a href="shop.html"><span aria-hidden="true"><FontAwesomeIcon icon={faAngleRight} /></span> Collections</a>
                            </li>
    
                        </ul>
                    </div>
                    <div className="col-lg-3 footer_wthree_gridf mt-md-0 mt-sm-4 mt-3">
                        <ul className="footer_wthree_gridf_list">
                            <li>
                                <a href="single.html"><span aria-hidden="true"><FontAwesomeIcon icon={faAngleRight} /></span> Extra Page</a>
                            </li>
    
                            <li>
                                <a href="#"><span aria-hidden="true"><FontAwesomeIcon icon={faAngleRight} /></span> Terms & Conditions</a>
                            </li>
                            <li>
                                <a href="single.html"><span aria-hidden="true"><FontAwesomeIcon icon={faAngleRight} /></span> Shop Single</a>
                            </li>
                            <li>
                                <a href="contact.html"><span aria-hidden="true"><FontAwesomeIcon icon={faAngleRight} /></span> Contact Us</a>
                            </li>
                        </ul>
                    </div>
    
                    <div className="col-lg-3 footer_wthree_gridf mt-md-0 mt-sm-4 mt-3">
                        <ul className="footer_wthree_gridf_list">
                            <li>
                                <a href="login.html"><span aria-hidden="true"><FontAwesomeIcon icon={faAngleRight} /></span> Login </a>
                            </li>
    
                            <li>
                                <a href="register.html"><span aria-hidden="true"><FontAwesomeIcon icon={faAngleRight} /></span> Register</a>
                            </li>
                            <li>
                                <a href="#"><span aria-hidden="true"><FontAwesomeIcon icon={faAngleRight} /></span> Privacy & Policy</a>
                            </li>
    
                        </ul>
                    </div>
                </div>
    
                <div className="w3ls-fsocial-grid">
                    <h3 className="sub-w3ls-headf">Follow Us</h3>
                    <div className="social-ficons">
                        <ul>
                            <li><a href="#"><span className="fa fa-facebook"><FontAwesomeIcon icon={faFacebook} /></span> Facebook</a></li>
                            <li><a href="#"><span className="fa fa-twitter"><FontAwesomeIcon icon={faTwitter} /></span> Twitter</a></li>
                            <li><a href="#"><span className="fa fa-google"><FontAwesomeIcon icon={faGoogle} /></span> Google</a></li>
                        </ul>
                    </div>
                </div>
                <div className="move-top text-center mt-lg-4 mt-3">
                    <a href="#home"><span aria-hidden="true"><FontAwesomeIcon icon={faAngleDoubleUp} /></span></a>
                </div>
            </div>
        </div>
        {/* footer */}
        </>
    );
  }
  
  export default Footer;