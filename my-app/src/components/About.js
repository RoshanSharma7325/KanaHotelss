import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const About = () => {

  const data = [
    {
      img : "https://www.gingerhotels.com/resourcefiles/hotel-profile-listing/ginger-chandigarh-zirakpur-over-view.jpg?version=11282024055725",
      address: "Ginger Chandigarh, Zirakpur",
      map:"Dhillon Plaza, Chattbir Rd, Bir Chhat, Zirakpur, Chandigarh - 140603",
      call:"01762665866",
      Railway:"Railway Station - 3.4 Km",
      button:"VIEW DETAILS",


      img1 : "https://www.gingerhotels.com/resourcefiles/hotel-profile-listing/qmin-at-ginger-chennai-omr.jpg?version=11282024055725",
      map1:"No 10, OMR Toll Plaza, Navalur, Tamil Nadu, Chennai - 600130",
      address1: "Ginger Chennai OMR",
      call1:"044 6909 3233",
      Railway1:"Railway Station - 32 Kms",



      img2 : "https://www.gingerhotels.com/resourcefiles/hotel-profile-listing/ginger-coimbatore-airport-5.jpg?version=11282024055725",
      address2: "Ginger Coimbatore Airport, Avinashi Road",
      map2:"574/2B2, 574/9, Avinashi Road, Civil Aerodrome Post, Peelamedu, Kalapatti Village, Coimbatore - 641014",
      call2:"0422-353-1533",
      Railway2:"Railway Station - 10.7 Km"
    },
    {
      img : "https://www.gingerhotels.com/resourcefiles/hotel-profile-listing/ginger-delhi-chanakyapuri-10.jpg?version=11282024055725",
      address: "Ginger Chandigarh, Zirakpur",
      map:"Dhillon Plaza, Chattbir Rd, Bir Chhat, Zirakpur, Chandigarh - 140603",
      call:"01762665866",
      Railway:"Railway Station - 3.4 Km",
      button:"VIEW DETAILS",


      img1 : "https://www.gingerhotels.com/resourcefiles/hotel-profile-listing/ginger-diu-jalandar-beach-luxe-queen-room-sea-view-th.jpg?version=11282024055725",
      map1:"No 10, OMR Toll Plaza, Navalur, Tamil Nadu, Chennai - 600130",
      address1: "Ginger Chennai OMR",
      call1:"044 6909 3233",
      Railway1:"Railway Station - 32 Kms",



      img2 : "https://www.gingerhotels.com/resourcefiles/hotel-profile-listing/new-7a.jpg?version=11282024055725",
      address2: "Ginger Coimbatore Airport, Avinashi Road",
      map2:"574/2B2, 574/9, Avinashi Road, Civil Aerodrome Post, Peelamedu, Kalapatti Village, Coimbatore - 641014",
      call2:"0422-353-1533",
      Railway2:"Railway Station - 10.7 Km"
    },
    {
      img : "https://www.gingerhotels.com/resourcefiles/hotel-profile-listing/gangtok-fascard.jpg?version=11282024055725",
      address: "Ginger Chandigarh, Zirakpur",
      map:"Dhillon Plaza, Chattbir Rd, Bir Chhat, Zirakpur, Chandigarh - 140603",
      call:"01762665866",
      Railway:"Railway Station - 3.4 Km",
      button:"VIEW DETAILS",


      img1 : "https://www.gingerhotels.com/resourcefiles/hotel-profile-listing/ginger-goa-candolim-hotel-profile-listing7.jpg?version=11282024055725 ",
      map1:"No 10, OMR Toll Plaza, Navalur, Tamil Nadu, Chennai - 600130",
      address1: "Ginger Chennai OMR",
      call1:"044 6909 3233",
      Railway1:"Railway Station - 32 Kms",



      img2 : "https://www.gingerhotels.com/resourcefiles/hotel-profile-listing/ginger-coimbatore-airport-5.jpg?version=11282024055725",
      address2: "Ginger Coimbatore Airport, Avinashi Road",
      map2:"574/2B2, 574/9, Avinashi Road, Civil Aerodrome Post, Peelamedu, Kalapatti Village, Coimbatore - 641014",
      call2:"0422-353-1533",
      Railway2:"Railway Station - 10.7 Km"
    },
    {
      img : "https://www.gingerhotels.com/resourcefiles/hotel-profile-listing/main-fascard.jpg?version=11282024055725",
      address: "Ginger Chandigarh, Zirakpur",
      map:"Dhillon Plaza, Chattbir Rd, Bir Chhat, Zirakpur, Chandigarh - 140603",
      call:"01762665866",
      Railway:"Railway Station - 3.4 Km",
      button:"VIEW DETAILS",


      img1 : "https://www.gingerhotels.com/resourcefiles/hotel-profile-listing/ginger-goa-hotel-th-1aq.jpg?version=11282024055725",
      map1:"No 10, OMR Toll Plaza, Navalur, Tamil Nadu, Chennai - 600130",
      address1: "Ginger Chennai OMR",
      call1:"044 6909 3233",
      Railway1:"Railway Station - 32 Kms",



      img2 : "https://www.gingerhotels.com/resourcefiles/hotel-profile-listing/reception-at-ginger-sirnagar.jpg?version=11282024055725",
      address2: "Ginger Coimbatore Airport, Avinashi Road",
      map2:"574/2B2, 574/9, Avinashi Road, Civil Aerodrome Post, Peelamedu, Kalapatti Village, Coimbatore - 641014",
      call2:"0422-353-1533",
      Railway2:"Railway Station - 10.7 Km"
    },
    
  ]


  return (
    <div>
        <Navbar/>
      <div className='container-fluid' style={{backgroundColor:"#333"}}>
        <div className='row'>
          <div className='col-12 text-center mt-5'>
            <h1 className='text-danger'>Ginger Hotels</h1>
            <h3 className='text-light mt-3'>Experience One of the Most Trusted Hotel Chains in India</h3>
            <p className='text-light'>Ginger Hotels is a pioneer, multiple award-winning and most trusted chain of lean luxe hotels in India. One of the leading brands in the <br/> hospitality segment, Ginger has rapidly grown in major urban and semi-urban cities across India to be an ideal choice for leisure and business <br/> travelers.</p>

            <p className='text-light'>Explore a new city in India with Ginger Hotels, where you can experience a unique blend of comfort, efficiency, convenience and affordability in <br/> warm, smart and interactive social spaces at surprisingly affordable prices.</p>

            <button className="btn" style={{ backgroundColor: '#f8470f', color: '#fff',marginBottom:"50px" }}>DOWNLOAD BROCHURE</button>
          </div>
        </div>

      </div>

      <div className='container mt-5'>
        <div className='row'>
         {
          data.map((datas, index) => {
            return(
              <>
               <div className='col-sm-12 col-md-6 col-lg-4'>
               <img style={{width:"100%"}} src={datas.img} alt='datas' />
               <h6 className='mt-4' style={{ color: "yellow" }}>{datas.address}</h6>
               <p className='text-light'>{datas.map}</p>
               <p style={{color:"yellow"}}>{datas.call}</p>
               <p className='text-light'>{datas.Railway}</p>
               <div className='d-flex'>
               <button className="btn mt-4" style={{ backgroundColor: '#f8470f', color: '#fff',marginBottom:"50px" }}>{datas.button}</button>
               
               </div>

            </div>
            <div className='col-sm-12 col-md-6 col-lg-4'>
            <img style={{width:"100%"}} src={datas.img1} alt='datas' />
            <h6 className='mt-4'  style={{ color: "yellow" }}>{datas.address1}</h6>
            <p className='text-light'>{datas.map1}</p>
            <p style={{color:"yellow"}}>{datas.call1}</p>
            <p className='text-light'>{datas.Railway1}</p>
            <button className="btn mt-4" style={{ backgroundColor: '#f8470f', color: '#fff',marginBottom:"50px" }}>{datas.button}</button>
            
            </div>
            <div className='col-sm-12 col-md-6 col-lg-4'>
            <img style={{width:"100%"}} src={datas.img2} alt='datas' />
            <h6 className='mt-4'  style={{ color: "yellow" }}>{datas.address2}</h6>
            <p className='text-light'>{datas.map2}</p>
            <p style={{color:"yellow"}}>{datas.call2}</p>
            <p className='text-light'>{datas.Railway2}</p>
            <button className="btn " style={{ backgroundColor: '#f8470f', color: '#fff',marginBottom:"50px" }}>{datas.button}</button>
            </div>

              
              </>
            )
          })
         }
        </div>
      </div>


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
                <Footer/>
            </div>


    </div>
  )
}

export default About
