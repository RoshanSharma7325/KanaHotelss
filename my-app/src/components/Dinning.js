import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Dinning = () => {



    const data = [
        {
            img: "https://www.gingerhotels.com/resourcefiles/hotelprofile/qmin-city-centre-noida.jpg",
            address: "Qmin, Mumbai Airport",
            address2: "Plot no 10 & 11, Nehru Road, Western Express Highway, Navpada, Vile Parle East, Mumbai, Maharashtra 400099",
            phone: "022-6996-7333"

        },
        {
            img: "https://www.gingerhotels.com/resourcefiles/meeting-snippet-image/ginger-nashik-meeting-room.jpg",
            address: "Qmin, Mumbai Airport",
            address2: "Plot no 10 & 11, Nehru Road, Western Express Highway, Navpada, Vile Parle East, Mumbai, Maharashtra 400099",
            phone: "022-6996-7333"

        },
        {
            img: "https://www.gingerhotels.com/resourcefiles/meeting-snippet-image/conference-room-ginger-1.jpg",
            address: "Qmin, Mumbai Airport",
            address2: "Plot no 10 & 11, Nehru Road, Western Express Highway, Navpada, Vile Parle East, Mumbai, Maharashtra 400099",
            phone: "022-6996-7333"

        },
        {
            img: "https://www.gingerhotels.com/resourcefiles/meeting-snippet-image/ginger-bharuch-meeting-room.jpg",
            address: "Qmin, Mumbai Airport",
            address2: "Plot no 10 & 11, Nehru Road, Western Express Highway, Navpada, Vile Parle East, Mumbai, Maharashtra 400099",
            phone: "022-6996-7333"

        },
        {
            img: "https://www.gingerhotels.com/resourcefiles/meeting-snippet-image/ginger-chandigarh-zirakpur-banquet-space.jpg",
            address: "Qmin, Mumbai Airport",
            address2: "Plot no 10 & 11, Nehru Road, Western Express Highway, Navpada, Vile Parle East, Mumbai, Maharashtra 400099",
            phone: "022-6996-7333"

        },
        {
            img: "https://www.gingerhotels.com/resourcefiles/meeting-snippet-image/ginger-chennai-omr-meeting-room.jpg",
            address: "Qmin, Mumbai Airport",
            address2: "Plot no 10 & 11, Nehru Road, Western Express Highway, Navpada, Vile Parle East, Mumbai, Maharashtra 400099",
            phone: "022-6996-7333"

        },
        {
            img: "https://www.gingerhotels.com/resourcefiles/hotelprofile/restaurant-at-ginger-jaipur.jpg",
            address: "Qmin, Mumbai Airport",
            address2: "Plot no 10 & 11, Nehru Road, Western Express Highway, Navpada, Vile Parle East, Mumbai, Maharashtra 400099",
            phone: "022-6996-7333"

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
                                <img src="https://www.gingerhotels.com/resourcefiles/mainimages/qmin-landing-page-creative.jpg?version=11272024051543" class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <img src="https://www.gingerhotels.com/resourcefiles/mainimages/dining-top-2.png?version=11272024051543" class="d-block w-100" alt="..." />

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

            <div className='container-fulid mt-5' style={{ background: "#211e1e" }}>
                <div className='row'>
                    <div className='col-12 text-center mt-5'>
                        <h2 className='text-danger'>Dining At Ginger</h2>
                        <h5 className='text-light mt-3'>Savour the Flavours and Spark Meaningful Connections</h5>
                        <p className='text-light mt-3'>At Ginger Hotels, our cosy dining spaces offer a wonderful culinary experience, catering to individuals seeking a peaceful moment or group celebrations. Enjoy freshly brewed coffee, refreshing beverages, and delectable treats. Our menu features exceptional flavours, curated by passionate chefs using high-quality ingredients. From comfort food to innovative creations, we have options for breakfast, lunch, and dinner. With attention to detail and attentive service, we create a delightful and memorable dining experience. Join us at Ginger for exceptional flavours and a warm welcoming atmosphere to make you feel right at home!
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
                                        <img style={{ height: "80%",width:"80%" }} src={datas.img} alt='datas' />
                                    </div>

                                    <div className='col-sm-12 col-md-6 col-lg-6 mt-5'>
                                        <h2 style={{ color: "yellow" }}>{datas.address}</h2>
                                        <p className='text-light'>{datas.address2}</p>
                                        <p className='text-light'>{datas.phone}</p>
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
                <Footer />
            </div>

        </div>
    )
}

export default Dinning
