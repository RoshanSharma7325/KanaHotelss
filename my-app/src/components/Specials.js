import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Specials = () => {
  return (
    <div>
        <Navbar/>
     <div className='container text-center mt-5'>
        <div className='row'>
            <div className='col-12'>
                <h2 className='text-danger'>SPECIALS</h2>
                <h3 className='text-light'>Check Out Best Hotel Deals</h3>
                <p className='text-light'>Check out our fantastic deals that will offer you more bang for your buck. In addition, look out for our deals on new hotel openings and holiday <br/> specials.</p>
                <p className='text-light'>Enough to make you sway? </p>
            </div>
        </div>
     </div>

    <div>
    <div className='container mt-5 text-center' >
        <div className='row '>
            <div className='col-sm-12 col-md-6 col-lg-4 p-3' style={{backgroundColor:"#141112", }}>
                <img style={{width:"100%"}} src='https://www.gingerhotels.com/resourcefiles/specialssnippetimages/cyber-monday-offer-sale.jpg?version=11282024055725'alt=''/>
                <h6 className='text-danger mt-4 '>Cyber Monday Offer</h6>
                <p className='text-light'>Flat 20% Savings On Breakfast Inclusive <br/> Stays</p>
                <p className='text-light'>Earn 4% NeuCoins (Members Only <br/> Offer)</p>
                <div class="d-grid gap-2 d-md-flex justify-content-center " >
                    <button className='btn btn-danger '>VIEW DETAILS</button>
                    <button className='btn btn-danger'>BOOK NOW</button>
                </div>
                

            </div>
            <div className='col-sm-12 col-md-6 col-lg-4 p-3' style={{backgroundColor:"#141112"}}>
            <img style={{width:"100%"}} src='https://www.gingerhotels.com/resourcefiles/specialssnippetimages/ginger-noida-133-intro-offer.jpg?version=11282024055725'alt=''/>
                <h6 className='text-danger mt-4 '>New Beginnings</h6>
                <p className='text-light'>30% Savings on Breakfast Inclusive <br/> Stays</p>
                <p className='text-light'>Members Exclusive Offer</p>
                <p className='text-light'>Earn 4% NeuCoins (Reward Points)</p>
                <div class="d-grid gap-2 d-md-flex justify-content-center">
                    <button className='btn btn-danger '>VIEW DETAILS</button>
                    <button className='btn btn-danger'>BOOK NOW</button>
                </div>
                
            </div>
            <div className='col-sm-12 col-md-6 col-lg-4 p-3' style={{backgroundColor:"#141112"}}>
            <img style={{width:"100%"}} src='https://www.gingerhotels.com/resourcefiles/specialssnippetimages/member-exclusive-offer-new.jpg?version=11282024055725'alt=''/>
                <h6 className='text-danger mt-4 '>Cyber Monday Offer</h6>
                <p className='text-light'>Flat 20% Savings On Breakfast Inclusive <br/> Stays</p>
                <p className='text-light'>Earn 4% NeuCoins (Members Only <br/> Offer)</p>
                <div class="d-grid gap-2 d-md-flex justify-content-center">
                    <button className='btn btn-danger '>VIEW DETAILS</button>
                    <button className='btn btn-danger'>BOOK NOW</button>
                </div>
                
            </div>
        </div>
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
                <Footer />
            </div>

    </div>
  )
}

export default Specials
