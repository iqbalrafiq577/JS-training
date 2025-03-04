import React from "react";
import "../../assets/style/components/sections/certification.css";

// Import all images
import aws from "../../assets/images/certification/aws.png";
import googlePartner from "../../assets/images/certification/googlePartner.png";
import shopify from "../../assets/images/certification/shop.png";
import wix from "../../assets/images/certification/Wix.png";
import squareSpace from "../../assets/images/certification/squareSpace.png";
import famoso from "../../assets/images/certification/famoso.png";
import flush from "../../assets/images/certification/flush.png";
import bigBanyan from "../../assets/images/certification/bigBanyan.png";
import Disciple from "../../assets/images/certification/Disciple.png";
import todd from "../../assets/images/certification/todd.png";




function Certification() {
  const images = [
    aws,
    googlePartner,
    shopify,
    wix,
    squareSpace,
    famoso,
    flush,
    bigBanyan,
    Disciple,
    todd,
  ];

  return (
    <div className="Certification">
      <div className="content">
        <h1>Partners And Certifications</h1>
      </div>
      <div className="boxes">
        {images.map((image, index) => (
          <div className="box" key={index}>
            <img src={image} alt={`Partner or Certification ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certification;