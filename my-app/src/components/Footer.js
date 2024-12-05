import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-dark text-light ">
            <div className="container ">
                <div className="row">
                    <div className=" col-lg-3 col-md-6 col-sm-12 mb-4 mt-5">
                        <h5 className="text-warning">Helpful</h5>
                        <ul className="list-unstyled ">
                            <li><a href="#" className="text-light text-decoration-none">Contact Us</a></li>
                            <li><a href="#" className="text-light text-decoration-none">FAQs</a></li>
                            <li><a href="#" className="text-light text-decoration-none">FAQs for Tokenization</a></li>
                            <li><a href="#" className="text-light text-decoration-none">Privacy Policy</a></li>
                            <li><a href="#" className="text-light text-decoration-none">Site Map</a></li>
                            <li><a href="#" className="text-light text-decoration-none">Tata.com</a></li>
                            <li><a href="#" className="text-light text-decoration-none">IHCL</a></li>
                        </ul>
                    </div>
                   

                    <div className="col-lg-3 col-md-6 col-sm-12 mb-4 mt-5 text-center">
                        <h5 className="text-warning">Connect With Us</h5>
                        <div className="d-flex justify-content-center mb-3  mt-4">
                            <a href="#" className="text-light mx-2"><FaFacebook size={32} /></a>
                            <a href="#" className="text-light mx-2"><FaTwitter size={32} /></a>
                            <a href="#" className="text-light mx-2"><FaLinkedin size={32} /></a>
                            <a href="#" className="text-light mx-2"><FaInstagram size={32} /></a>
                        </div>
                        <button className="btn btn-warning text-dark mt-3">Sign Up for Email Offers</button>
                    </div>
                    <div className="   col-lg-3 col-md-6 col-sm-12 mb-4 mt-5 ">
                        <h5 className="text-warning">Popular Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-light text-decoration-none">Hotels</a></li>
                            <li><a href="#" className="text-light text-decoration-none">Ginger Promise</a></li>
                            <li><a href="#" className="text-light text-decoration-none">Specials</a></li>
                            <li><a href="#" className="text-light text-decoration-none">Reviews</a></li>
                            <li><a href="#" className="text-light text-decoration-none">News</a></li>
                            <li><a href="#" className="text-light text-decoration-none">Blog</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 mb-4 mt-5 ">
                        <h5 className="text-warning">Information</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-light text-decoration-none">About Us</a></li>
                            <li><a href="#" className="text-light text-decoration-none">Awards</a></li>
                            <li><a href="#" className="text-light text-decoration-none">Partner With Us</a></li>
                            <li><a href="#" className="text-light text-decoration-none">Careers</a></li>
                            <li><a href="#" className="text-light text-decoration-none">Diversity</a></li>
                            <li><a href="#" className="text-light text-decoration-none">Volunteering</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
