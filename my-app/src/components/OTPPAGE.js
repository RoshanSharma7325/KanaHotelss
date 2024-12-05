import React, { useState } from "react";

const OTPPage = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleChange = (e, index) => {
    let newOtp = [...otp];
    newOtp[index] = e.target.value;

    // Auto-focus to the next input field if the current input is valid (single digit)
    if (e.target.value.length === 1 && index < otp.length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }

    setOtp(newOtp);
  };

  const handleFocus = (e, index) => {
    e.target.select(); // Select text when input is focused
  };

  const handleSubmit = () => {
    const otpString = otp.join("");
    alert(`OTP Submitted: ${otpString}`);
    // You can validate OTP here, for example by comparing with a sent OTP.
  };

  return (
    <div style={styles.container}>
      <h2>Enter OTP</h2>

      {/* OTP Inputs (always visible) */}
      <div style={styles.otpInputsContainer}>
        {otp.map((digit, index) => (
          <input
            key={index}
            id={`otp-input-${index}`}
            type="text"
            value={digit}
            onChange={(e) => handleChange(e, index)}
            onFocus={(e) => handleFocus(e, index)}
            maxLength="1"
            style={styles.input}
          />
        ))}
      </div>

      {/* Submit OTP Button */}
      <button onClick={handleSubmit} style={styles.submitButton}>
        Submit OTP
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  otpInputsContainer: {
    display: "flex",
    gap: "10px",
  },
  input: {
    padding: "10px",
    width: "40px",
    fontSize: "18px",
    textAlign: "center",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  submitButton: {
    padding: "10px 20px",
    marginTop: "20px",
    backgroundColor: "#2196F3",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default OTPPage;
