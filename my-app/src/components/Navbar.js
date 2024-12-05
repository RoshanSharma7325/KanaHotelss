import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { NavLink } from 'react-router-dom';
import './Nav.css'
import Login from './Login';
import OTPPage from './OTPPAGE';
const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setNeww(0)
    setShow(true);
  }
  const [neww,setNeww] = useState(0);
  return (
    <>
     


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>

          <img className='text-center' width={"50%"} src='https://members.tajhotels.com/v2/82507dd195585ef2ba8983753353e8af.jpg' alt='' />

        </Modal.Header>
        <Modal.Body>
          {
            neww===0?<>
          <Login setNeww={setNeww} />
            </>:<OTPPage/>
          }
        </Modal.Body>

      </Modal>

      <div className='container-flulid'>
        <div className='row'>
          <div className='col-sm-12 col-md-6 col-lg-6'></div>
        
          <div className='col-sm-12 col-md-6 col-lg-6'>
            <div className='d-flex justify-content-end mb-2 mt-2 align-center'>
            <Button variant="primary" onClick={handleShow}>
                LOGIN / SIGN UP
              </Button>
              <div className="text-light me-3 mt-2" style={{ fontSize: '0.9rem' }}>
                <span style={{ display: 'inline-block', marginRight: '4px' }}>&#x23F0;</span> 
                1860-266-3333
              </div>
              <a href="#" className="text-danger fw-bold me-3 text-decoration-none mt-2" >MANAGE BOOKING</a>
            </div>
          </div>
        </div>


      </div>



      <div className="container-fluid  bg-dark text-bg-light">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <a className="navbar-brand text-light" href="#">Brand</a>
          <button className="navbar-toggler text-light bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav d-flex align-items-center ms-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link text-warning">
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link text-warning">
                  HOTELS
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/dinning" className="nav-link text-warning">
                  DINING
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/meeting" className="nav-link text-warning">
                  MEETINGS
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/program" className="nav-link text-warning">
                  MEMBERSHIP PROGRAM
                </NavLink>
              </li>
              <li className="nav-item">

                <NavLink to="/speacial" className="nav-link text-warning">
                  SPECIALS
                </NavLink>

              </li>
              <li className="nav-item dropdown">
                <NavLink
                  to="/guest"
                  className="nav-link dropdown-toggle text-warning"
                  id="guestDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  GUEST HOUSE
                </NavLink>
                <ul className="dropdown-menu bg-gold" aria-labelledby="guestDropdown">
                  <li style={{color:"bg-white"}}>
                    <NavLink to="/location" className="dropdown-item">
                      Jaipur
                    </NavLink>
                  </li>
             
                </ul>
              </li>

            </ul>
            <button className="btn btn-danger ms-lg-3" style={{ background: 'linear-gradient(to right, #ff6600, #ff0033)' }}>
              BOOK YOUR STAY
            </button>
          </div>
        </nav>
      </div>

    </>
  );
}

export default Navbar;
