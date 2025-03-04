
import React from "react";
import "../../assets/style/components/common/button.css";

function Button({ text }) {
  return (
    <button className="commonBtn">
      {text}
    </button>
  );
}

export default Button;