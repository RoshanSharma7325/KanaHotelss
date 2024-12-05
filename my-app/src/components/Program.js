import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Program = () => {
  return (
    <div>
        <Navbar/>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12'> 
                <img style={{height:"400px",width:"100%"}} src='https://www.gingerhotels.com/resourcefiles/mainimages/ginger-neupass-benefits.png?version=11282024055725' alt=''/>
                </div>
            </div>
        </div>

        <div className='container mt-5 text-center '>
            <div className='row'>
                <div className='col-12'>
                    <h2 className='text-danger text-center'>Welcome to NeuPass Loyalty Program</h2>
                    <p className='text-light mt-5'>Ginger has now been on-boarded on the NeuPass Loyalty program. We welcome you to a world of enhanced privileges <br/> & benefits specially designed to make your experience even more rewarding. Get rewarded with NeuCoins (Loyalty <br/> Points) every time you book a getaway at our hotels.  You can access all benefits by quoting your mobile number.</p>

                    <button className='btn btn-danger mt-4'>ENROLL NOW</button>

                    <p className='mt-5 text-light'>For any queries or concerns, please contact us at  1800 20 8282 638 or email us at  customercare@tataneu.com <br/>
                    NeuCoins will be credited to your account within 7 days from checkout, provided the entire payment is completed. Terms <br/> & Conditions apply.</p>
                </div>
            </div>
        </div>

            <div className='container mt-5  text-center text-light p-5'>
                <div className='row'>
                    <div className='col-sm-12 col-md-6 col-lg-4 '>
                      <img src='https://www.gingerhotels.com/resourcefiles/rewards-icons/union-1.svg?version=11282024055725'alt=''/>
                      <p className='mt-3'>Exclusive Member Rates</p>  
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-4'>
                       <img src='https://www.gingerhotels.com/resourcefiles/rewards-icons/path-60.svg?version=11282024055725' alt=''/> 
                       <p className='mt-3'>Exclusive Member Benefits and Savings</p>
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-4'>
                       <img src='https://www.gingerhotels.com/resourcefiles/rewards-icons/union-3.svg?version=11282024055725' alt=''/> 
                       <p className='mt-3'>Earn 4% NeuCoins on Spends</p>
                    </div>
                </div>
            </div>

           <div className='container'>
            <div className='row'>
                <div className='col-12 text-center'>
                    <p className='text-danger' style={{fontSize:"40px"}}>Special Offers</p>
                
            </div>
            </div> 
            </div>


            <div className='p-3'>
           <div className='container mt-5 '>
            <div className='row'>
               <div className='col-sm-12 col-md-6 col-lg-4  p-3' style={{border:"1px solid"}}>
                    <img style={{width:"100%",height:"20rem"}} src='https://www.gingerhotels.com/resourcefiles/specialssnippetimages/member-special-new.jpg?version=11282024055725' alt=''/>
                    <p style={{fontSize:"20px"}} className='text-center text-danger mt-4'>Introductory Offer</p>
                    <button class="btn btn-danger mt-4" type="button">VIEW DETAILS</button>

            
               </div>
                <div className='col-sm-12 col-md-6 col-lg-4  p-3'style={{border:"1px solid"}}>
                <img style={{width:"100%",height:"20rem"}} src='https://www.gingerhotels.com/resourcefiles/specialssnippetimages/limited-period-escapes-jul-aug.jpg?version=11282024055725' alt=''/>
                    <p style={{fontSize:"20px"}} className='text-center text-danger mt-4'>Introductory Offer</p>
                    <button class="btn btn-danger mt-4" type="button">VIEW DETAILS</button>

                </div>
                <div className='col-sm-12 col-md-6 col-lg-4  p-3' style={{border:"1px solid"}}>
                <img style={{width:"100%",height:"20rem"}} src='https://www.gingerhotels.com/resourcefiles/specialssnippetimages/cyber-monday-offer-sale.jpg?version=11282024055725' alt=''/>
                    <p style={{fontSize:"20px"}} className='text-center text-danger mt-4'>Introductory Offer</p>
                    <button class="btn btn-danger mt-4" type="button">VIEW DETAILS</button>

                </div>
            </div>
           </div>
            </div>
         

           <Footer/>
        
      
    </div>
  )
}

export default Program
