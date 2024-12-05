import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Meeting = () => {



    const data = [
        {
            img: "https://www.gingerhotels.com/resourcefiles/meeting-snippet-image/conference-room-ginger.jpg",
            address: "Ginger Ahmedabad, RTO Circle",
            address2: "Khejur Bagan, Airport Road, Barjala Mouja, Agartala - 799006",
            max: "Max. Guest Capacity: 70"

        },
        {
            img: "https://www.gingerhotels.com/resourcefiles/meeting-snippet-image/ginger-nashik-meeting-room.jpg",
            address: "Ginger Ahmedabad, RTO Circle",
            address2: "Khejur Bagan, Airport Road, Barjala Mouja, Agartala - 799006",
            max: "Max. Guest Capacity: 70"

        },
        {
            img: "https://www.gingerhotels.com/resourcefiles/meeting-snippet-image/conference-room-ginger-1.jpg",
            address: "Ginger Ahmedabad, RTO Circle",
            address2: "Khejur Bagan, Airport Road, Barjala Mouja, Agartala - 799006",
            max: "Max. Guest Capacity: 70"

        },
        {
            img: "https://www.gingerhotels.com/resourcefiles/meeting-snippet-image/ginger-indore-meeting-room.jpg",
            address: "Ginger Ahmedabad, RTO Circle",
            address2: "Khejur Bagan, Airport Road, Barjala Mouja, Agartala - 799006",
            max: "Max. Guest Capacity: 70"

        },
        {
            img: "https://www.gingerhotels.com/resourcefiles/meeting-snippet-image/ginger-bharuch-meeting-room.jpg",
            address: "Ginger Ahmedabad, RTO Circle",
            address2: "Khejur Bagan, Airport Road, Barjala Mouja, Agartala - 799006",
            max: "Max. Guest Capacity: 70"

        },
        {
            img: "https://www.gingerhotels.com/resourcefiles/meeting-snippet-image/ginger-chandigarh-zirakpur-banquet-space.jpg",
            address: "Ginger Ahmedabad, RTO Circle",
            address2: "Khejur Bagan, Airport Road, Barjala Mouja, Agartala - 799006",
            max: "Max. Guest Capacity: 70"

        },
    ]
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
                            <img src="https://www.gingerhotels.com/resourcefiles/mainimages/meeting-top.jpg?version=11282024055436" class="d-block w-100" alt="..." />
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


        <div className='container mt-5 text-center'>
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


        <div className='container-fulid mt-5' style={{ background: "rgb(27, 27, 27)" }}>
            <div className='row'>
                <div className='col-12 text-center mt-5'>
                    <h2 className='text-danger'>MEETINGS & EVENTS</h2>
                    <h5 className='text-light mt-3'>Transform Your Events with Ginger Hotels</h5>
                    <p className='text-light mt-3'>Elevate your events at Ginger Hotels pan India. Discover versatile and stylish spaces, and tailored packages for seamless meetings and events. Whether it's a corporate conference, social get-together, or intimate celebration, our dedicated team ensures a hassle-free experience. Well-equipped meeting rooms, comfortable seating, and delectable catering options set the stage for success. Nestled in a prime location, Ginger offers convenience for attendees. Experience unparalleled service and create lasting memories. Celebrate your next event with us and let our smart facilities and hospitality inspire success.
                    </p>
                </div>
            </div>
        </div>
        <div className='container mt-5'>
            <div className='row'>
                {
                    data.map((datas, index) => {
                        return (
                            <>
                                <div className='col-sm-12 col-md-6 col-lg-6'>
                                    <img style={{ height: "80%" }} src={datas.img} alt='datas' />
                                </div>

                                <div className='col-sm-12 col-md-6 col-lg-6 mt-5'>
                                    <h2 style={{ color: "gold" }}>{datas.address}</h2>
                                    <p className='text-light'>{datas.address2}</p>
                                    <p  style={{ color: "gold" }} className=''>{datas.max}</p>
                                    <button type="button" class="btn btn-danger">KNOW MORE</button>
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

export default Meeting
