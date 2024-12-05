// import React, { useState } from "react";
// import "./login.css";

// const Login = () => {
//   const [number, setNumber] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const logins = (e) => {

//     e.preventDefault();
//     // try {
//     const myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");

//     const raw = JSON.stringify({
//       "Number": number,
//       "Email": email
//     });

//     const requestOptions = {
//       method: "POST",
//       headers: myHeaders,
//       body: raw,
//       redirect: "follow"
//     };

//     fetch("http://localhost:8080/Login", requestOptions)
//       .then((response) => response.json())
//       .then((result) => {
//         console.log(result)
//       })
//       .catch((error) => console.error(error));
//     // } catch (error) {

//     // }
//   }



//   const requestOtp = () => {
//     try {
//       const myHeaders = new Headers();
//       myHeaders.append("Content-Type", "application/json");

//       const raw = JSON.stringify({
//         "number": number
//       });

//       const requestOptions = {
//         method: "POST",
//         headers: myHeaders,
//         body: raw,
//         redirect: "follow"
//       };

//       fetch("http://localhost:8080/request-otp", requestOptions)
//         .then((response) => response.text())
//         .then((result) => console.log(result))
//         .catch((error) => console.error(error));
//     } catch (error) {

//     }
//   }

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h1 className="login-title">Agent Login</h1>
//         <p className="login-subtitle">
//           Hey, Enter your details to get sign in to your account
//         </p>
//         <form onSubmit={logins}>
//           {/* Input: Email / Phone */}
//           <div className="input-group">
//             <input
//               type="text"
//               placeholder="Enter Phone No"
//               value={number}
//               onChange={(e) => setNumber(e.target.value)}
//               className="input-field"
//             />
//           </div>
//           <div className="input-group">

//           </div>
//           {/* <div className="input-group">
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="Passcode"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="input-field"
//             />
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="password-toggle"
//             >
//               {showPassword ? "Hide" : "Show"}
//             </button>
//           </div> */}

//           {/* Troubleshooting */}
//           <div className="login-help">
//             <a href="#">Having trouble in sign in?</a>
//           </div>

//           {/* Submit Button */}
//           <button type="submit" className="login-button">
//             Sign in
//           </button>

//           {/* Divider */}
//           <div className="divider">
//             <span></span>
//             <p>Or Sign in with</p>
//             <span></span>
//           </div>

//           {/* Social Login */}
//           <div className="social-buttons">
//             <button className="social-button">
//               <img
//                 src="https://img.icons8.com/ios-filled/50/google-logo.png"
//                 alt="Google"
//               />
//             </button>
//             <button className="social-button">
//               <img
//                 src="https://img.icons8.com/ios-filled/50/apple-logo.png"
//                 alt="Apple"
//               />
//             </button>
//             <button className="social-button">
//               <img
//                 src="https://img.icons8.com/ios-filled/50/facebook-new.png"
//                 alt="Facebook"
//               />
//             </button>
//           </div>
//         </form>
//         <p className="login-footer">
//           Don’t have an account? <a href="#">Request Now</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;










import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Make sure to import the CSS
import "./login.css";
import Modal from 'react-bootstrap/Modal';
import OTPPage from "./OTPPAGE";

const Login = ({setNeww}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [number, setNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  // const navigate = useNavigate(); // Hook for navigation

  const requestOtp = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify({
      number: "+91" + number
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:8080/request-otp", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.orderId) { // Check if the OTP was sent successfully
          setOtpSent(true);
          toast.success("OTP sent successfully!");
          setNeww(1)
        } else {
          toast.error(result.message || "Failed to send OTP. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("An error occurred while sending OTP. Please try again later.");
      });
  };

  const submitOtp = () => {
    toast.success(`OTP entered: ${otp}`);
    // Here you can proceed with further verification or navigation logic
  };

  return (
    <>
          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>

          <img className='text-center' width={"50%"} src='https://members.tajhotels.com/v2/82507dd195585ef2ba8983753353e8af.jpg' alt='' />

        </Modal.Header>
        <Modal.Body>
          <OTPPage />
        </Modal.Body>

      </Modal>
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Agent Login</h1>
        <p className="login-subtitle">
          Enter your phone number to log in or sign up.
        </p>
        {!otpSent ? (
          <form>
            <div className="input-group">
              <input
                type="text"
                placeholder="Enter Phone No"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="input-field"
              />
              <button
                type="button"
                onClick={requestOtp}
                className="btn btn-danger otp-button"
              >
                Send OTP
              </button>
            </div>
          </form>
        ) : (
          <form>
            <div className="input-group">
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="input-field"
              />
              <button
                type="button mt-5"
                onClick={submitOtp}
                className="verify-button btn btn-primary "
               >
                Submit OTP
              </button>
            </div>
          </form>
        )}
        <ToastContainer/>
      </div>
    </div>
    </>
  );
};

export default Login;
