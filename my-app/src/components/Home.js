import React, { useState } from 'react';
import Navbar from './Navbar'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Footer from './Footer';
// import Foter from './Foter';

import './card.css'

const Home = () => {

  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
      <Navbar />
      <div className='container-fuild ms-2' style={{ boxSizing: 'border-box', width: '98.44%' }}  >
        <div className='row'>
          <div id="carouselExampleDark" class="carousel carousel-dark slide"  >
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="10000">
                <img src="https://www.gingerhotels.com/resourcefiles/homeimages/festivals-by-india.jpg?version=11102024233343" class="d-block w-100" alt="..." />
                {/* <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div> */}
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <img src="https://www.gingerhotels.com/resourcefiles/homeimages/soulful-abodes.png?version=11102024233343" class="d-block w-100" alt="..." />
                {/* <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div> */}
              </div>
              <div class="carousel-item" data-bs-interval="3000">
                <img src="https://www.gingerhotels.com/resourcefiles/homeimages/member-exclusive-offer-oct-23.jpg?version=11102024233343" class="d-block w-100" alt="..." />
                {/* <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div> */}

              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>

            </button>
          </div>
        </div>

      </div>


      <div className='container mt-3 text-center'>
        <div className='row'>
          <div className='col-lg-2 col-md-4 col-sm-12 text-warning '>
            <h5> Select City</h5>

          </div>
          <div className='col-lg-2 col-md-4 col-sm-12 text-warning'>
            <h5 className=' ms-4'> Select Hotel </h5>
          </div>


          <div className='col-lg-2 col-md-4 col-sm-12 text-warning'>
            <h5 className=' ms-4'> Check-In</h5>


          </div>
          <div className='col-lg-2 col-md-4 col-sm-12 text-warning'>
            <h5 className='ms-4'> Check-Out</h5>

          </div>
          <div className='col-lg-2 col-md-4 col-sm-12 text-warning'>
            <h5> Rooms</h5>


          </div>
          <div className='col-lg-2 col-md-4 col-sm-12 text-warning'>
            <h5 className='ms-4'> Rooms/Guests</h5>

          </div>
        </div>
      </div>
      {/* 
      <div className='container text-light text-center'>
        <div className='row'>
          <div className='col-sm-12 col-md-4 col-lg-2'>
            <h6>jaipur</h6>
          </div>
          <div className='col-sm-12 col-md-4 col-lg-2'>

          </div>
          <div className='col-sm-12 col-md-4 col-lg-2'>
            < DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            
          </div>
          <div className='col-sm-12 col-md-4 col-lg-2'>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
          </div>
          <div className='col-sm-12 col-md-4 col-lg-2'>

          </div>
          <div className='col-sm-12 col-md-4 col-lg-2'>

          </div>
        </div>
      </div> */}



      <div style={{ background: "#242423" }}>
        <div className='container text-center text-danger mt-5'>
          <div className='row'>
            <div className='col-12'>
              <h1 className='text-uppercase'>Experience <br />
                the new GINGER</h1>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h1 style={{ border: " 1px solid red", color: "red", width: "50px" }}></h1>
        </div>

        <div className='container text-center text-warning mt-3  '>
          <div className='row'>
            <div className='col-12'>
              <h3 className=''>Switch On To A New GINGER</h3>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='row'>
            <div className='col-12 text-center text-light'>
              <p>Whether you're meeting a long-lost friend, taking a pocket-friendly family trip, or looking to seize the perfect business pitch, we have got you covered. Introducing GINGER in a brand new avatar. Our hotels are all set to make your stay fuss free and surprisingly affordable.
                The Reimagined GINGER experience brings together attractive public areas as well as spots designed for solitude, allowing the smooth transition from one to the other. Our spaces come alive with vivacious high energy global local music and unique artwork installations. The rooms deliver an elevated stay experience with the perfect mix of aesthetics and functionality. The all-day diner at the hotel offers a variety of Global and Local selections of comfort food and doubles up as personal workstations. This is in addition to our signature sleep-and-shower experience that you will encounter in the 50+ hotels spread throughout the country.
                All in all, your stay with Ginger will be something you'll keep coming back to!.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ background: "#212529" }}>
        <div className='container-fulid '>
          <div className='row '>
            <div className='col-12 text-center text-danger'>
              <h1 className='mt-5'>Our Hotels</h1>
            </div>
          </div>
        </div>
      </div>



      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2px', width: '100%' }}>
              <div className='card bg-dark'>
                <img style={{ width: '100%' }} src="https://www.gingerhotels.com/resourcefiles/hotelprofile/ginger-chandigarh-zirakpur-new.jpg?version=11132024211551" alt="" />
                <div>
                  <p className='color   ms-2 '>GINGER HOTEL</p>
                  <p className='color   ms-2 '>jaipur</p>
                </div>
              </div>
              <div className='card bg-dark'>
                <img style={{ width: '100%' }} src="https://www.gingerhotels.com/resourcefiles/hotelprofile/ginger-chandigarh-omr.jpg?version=11132024211551" alt="" />
                <div>
                  <p className='color   ms-2 '>GINGER HOTEL</p>
                  <p className='color   ms-2 '>jaipur</p>
                </div>
              </div>
              <div className='card bg-dark'>
                <img style={{ width: '100%' }} src="https://www.gingerhotels.com/resourcefiles/hotelprofile/ginger-agartala-hotel-th.jpg?version=11132024211551" alt="" />
                <div>
                  <p className='color ms-2 '>GINGER HOTEL</p>
                  <p className='color ms-2 '>jaipur</p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2px', width: '100%' }}>
              <div className='card bg-dark'>
                <img style={{ width: '100%' }} src="https://www.gingerhotels.com/resourcefiles/hotelprofile/ginger-goa-candolim-hotelprofile.jpg?version=11132024211551" alt="" />
                <div>
                  <p className='color   ms-2 '>GINGER HOTEL</p>
                  <p className='color   ms-2 '>jaipur</p>
                </div>
              </div>
              <div className='card bg-dark'>
                <img style={{ width: '100%' }} src="https://www.gingerhotels.com/resourcefiles/hotelprofile/gangtok-fascard-new.jpg?version=11132024211551" alt="" />
                <div>
                  <p className='color  ms-2 '>GINGER HOTEL</p>
                  <p className='color   ms-2 '>jaipur</p>
                </div>
              </div>
              <div className='card bg-dark'>
                <img style={{ width: '100%' }} src="https://www.gingerhotels.com/resourcefiles/hotelprofile/ginger-delhi-chanakyapuri-profile-photo.png?version=11132024211551" alt="" />
                <div>
                  <p className='color    ms-2 '>GINGER HOTEL</p>
                  <p className='color   ms-2 '>jaipur</p>
                </div>
              </div>

            </div>
          </div>

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>



      {/* <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item pt-3 active">
            <div style={{ background: "#242423" }}>
              <div className='container text-center text-danger mt-5'>
                <div className='row'>
                  <div className='col-12'>
                    <h1 className='text-uppercase'>Experience <br />
                      the new GINGER</h1>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h1 style={{ border: " 1px solid red", color: "red", width: "50px" }}></h1>
              </div>

              <div className='container text-center text-warning mt-3  '>
                <div className='row'>
                  <div className='col-12'>
                    <h3 className=''>Switch On To A New GINGER</h3>
                  </div>
                </div>
              </div>

              <div className='container'>
                <div className='row'>
                  <div className='col-12 text-center text-light'>
                    <p>Whether you're meeting a long-lost friend, taking a pocket-friendly family trip, or looking to seize the perfect business pitch, we have got you covered. Introducing GINGER in a brand new avatar. Our hotels are all set to make your stay fuss free and surprisingly affordable.
                      The Reimagined GINGER experience brings together attractive public areas as well as spots designed for solitude, allowing the smooth transition from one to the other. Our spaces come alive with vivacious high energy global local music and unique artwork installations. The rooms deliver an elevated stay experience with the perfect mix of aesthetics and functionality. The all-day diner at the hotel offers a variety of Global and Local selections of comfort food and doubles up as personal workstations. This is in addition to our signature sleep-and-shower experience that you will encounter in the 50+ hotels spread throughout the country.
                      All in all, your stay with Ginger will be something you'll keep coming back to!.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div class="carousel-item pt-3">
            <div style={{ background: "#242423" }}>
              <div className='container text-center text-danger mt-5'>
                <div className='row'>
                  <div className='col-12'>
                    <h1 className='text-uppercase'>Experience <br />
                      the new GINGER</h1>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h1 style={{ border: " 1px solid red", color: "red", width: "50px" }}></h1>
              </div>

              <div className='container text-center text-warning mt-3  '>
                <div className='row'>
                  <div className='col-12'>
                    <h3 className=''>Switch On To A New GINGER</h3>
                  </div>
                </div>
              </div>

              <div className='container'>
                <div className='row'>
                  <div className='col-12 text-center text-light'>
                    <p>Whether you're meeting a long-lost friend, taking a pocket-friendly family trip, or looking to seize the perfect business pitch, we have got you covered. Introducing GINGER in a brand new avatar. Our hotels are all set to make your stay fuss free and surprisingly affordable.
                      The Reimagined GINGER experience brings together attractive public areas as well as spots designed for solitude, allowing the smooth transition from one to the other. Our spaces come alive with vivacious high energy global local music and unique artwork installations. The rooms deliver an elevated stay experience with the perfect mix of aesthetics and functionality. The all-day diner at the hotel offers a variety of Global and Local selections of comfort food and doubles up as personal workstations. This is in addition to our signature sleep-and-shower experience that you will encounter in the 50+ hotels spread throughout the country.
                      All in all, your stay with Ginger will be something you'll keep coming back to!.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div class="carousel-item pt-3">
            <div style={{ background: "#242423" }}>
              <div className='container text-center text-danger mt-5'>
                <div className='row'>
                  <div className='col-12'>
                    <h1 className='text-uppercase'>Experience <br />
                      the new GINGER</h1>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h1 style={{ border: " 1px solid red", color: "red", width: "50px" }}></h1>
              </div>

              <div className='container text-center text-warning mt-3  '>
                <div className='row'>
                  <div className='col-12'>
                    <h3 className=''>Switch On To A New GINGER</h3>
                  </div>
                </div>
              </div>

              <div className='container'>
                <div className='row'>
                  <div className='col-12 text-center text-light'>
                    <p>Whether you're meeting a long-lost friend, taking a pocket-friendly family trip, or looking to seize the perfect business pitch, we have got you covered. Introducing GINGER in a brand new avatar. Our hotels are all set to make your stay fuss free and surprisingly affordable.
                      The Reimagined GINGER experience brings together attractive public areas as well as spots designed for solitude, allowing the smooth transition from one to the other. Our spaces come alive with vivacious high energy global local music and unique artwork installations. The rooms deliver an elevated stay experience with the perfect mix of aesthetics and functionality. The all-day diner at the hotel offers a variety of Global and Local selections of comfort food and doubles up as personal workstations. This is in addition to our signature sleep-and-shower experience that you will encounter in the 50+ hotels spread throughout the country.
                      All in all, your stay with Ginger will be something you'll keep coming back to!.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div> */}

      {/* <div className='container'>
          <div className='row'>
            <div className='col-12 text-center'>
              <h2 className='text-danger mt-5'>Video</h2>
            </div>
          </div>
        </div> */}
      {/* <div style={{ position: 'relative', paddingTop: '56.25%', height: 0, overflow: 'hidden' }}>
      <iframe
        src="https://player.vimeo.com/video/892740910?autoplay=1&loop=1&title=0&byline=0&portrait=0&background=1"
        style={{
          position: 'absolute',
          top: 0,
          left: "8rem",
          width: '70%',
          height: '70%',
        }}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div> */}


      <div style={{ backgroundColor: '#1c1c1c', }}>
        <div className="container my-4">
          <div className="row">

            <div className="col-md-3 col-12 mb-3">
              <div className="d-flex flex-column align-items-center p-3" style={{ backgroundColor: '#1c1c1c', borderRadius: '8px' }}>
                <i className="fa fa-phone mb-2" style={{ color: '#FFA500', fontSize: '24px' }}></i>
                <h5 style={{ color: '#FFA500' }}>ANY ENQUIRIES</h5>
                <p className="text-light">Call us at <strong style={{ color: '#FFA500' }}>1860-266-3333</strong></p>
              </div>
            </div>


            <div className="col-md-3 col-12 mb-3">
              <div className="d-flex flex-column align-items-center p-3" style={{ backgroundColor: '#1c1c1c', borderRadius: '8px' }}>
                <i className="fa fa-envelope mb-2" style={{ color: '#FFA500', fontSize: '24px' }}></i>
                <h5 style={{ color: '#FFA500' }}>BUSINESS CONNECT</h5>
                <p className="text-light">
                  Leverage Business Connect for all your Corporate Travel needs with a wide range of hotels and exclusive benefits tailored to your business. Experience effortless booking and enjoy specialized privileges today. <a href="#" style={{ color: '#FF4500' }}>click here</a> to know more.
                </p>
              </div>
            </div>


            <div className="col-md-3 col-12 mb-3">
              <div className="d-flex flex-column align-items-center p-3" style={{ backgroundColor: '#1c1c1c', borderRadius: '8px' }}>
                <i className="fa fa-users mb-2" style={{ color: '#FFA500', fontSize: '24px' }}></i>
                <h5 style={{ color: '#FFA500' }}>MEETINGS & GROUP BOOKINGS</h5>
                <p className="text-light">
                  Wish to make a booking for 5 rooms or more? Please email your requirements to <a href="mailto:instabook@gingerhotels.com" style={{ color: '#FF4500' }}>instabook@gingerhotels.com</a>
                </p>
              </div>
            </div>


            <div className="col-md-3 col-12 mb-3">
              <div className="d-flex flex-column align-items-center p-3" style={{ backgroundColor: '#1c1c1c', borderRadius: '8px' }}>
                <i className="fa fa-file-alt mb-2" style={{ color: '#FFA500', fontSize: '24px' }}></i>
                <h5 style={{ color: '#FFA500' }}>TRAVEL AGENT ENQUIRIES</h5>
                <p className="text-light">Get customized package rates to suit your requirements</p>
                <button className="btn" style={{ backgroundColor: '#FF4500', color: '#fff' }}>REGISTER NOW</button>
              </div>
            </div>
          </div>
        </div>
        <Footer />



      </div>





    </div>

  );
};


export default Home
