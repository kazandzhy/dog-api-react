import React from "react";

import "./error-indicator.css";
import icon from "./very-sad-pug-and-rabbit.jpg";

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={icon} alt="error icon" />
      <span className="boom">BOOM!</span>
      <span>something has gone terribly wrong</span>
      <span>(but we already sent dogs to fix it)</span>
    </div>
  );
};

export default ErrorIndicator;
