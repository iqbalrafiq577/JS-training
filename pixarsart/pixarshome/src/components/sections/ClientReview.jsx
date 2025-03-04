import React from "react";
import jose from "../../assets/images/joss.png";
import profile from "../../assets/images/image.png";
import "../../assets/style/components/sections/ClientReview.css";

function ClientReview() {
    return (
        <div className="ClientReview">
            <div className="reviewSide">
                <div className="comments">
                    <p>
                        Aimen and the team at Pixarsart are the best, period. Excellent communication, service, and execution. I have hired over 100 <br /> freelancers in my 7 years on the platform, and Aimen and team are THE BEST!
                    </p>
                    <h3>Jesse Croteau & Logan Lisle</h3>
                    <p>CNN Anchor/Founder of W.E. Can Lead</p>
                </div>
                <div className="profiles">
                    <div className="profile">
                        <img src={profile} alt="Logan" />
                        <div className="profileContent">
                        <h3>Logan</h3>
                        <p>Actor & Director</p>
                        </div>
                        
                    </div>
                    <div className="profile">
                        <img src={profile} alt="Isha Sesay" />
                        <div className="profileContent">
                        <h3>Logan</h3>
                        <p>Actor & Director</p>
                        </div>
                    </div>
                    <div className="profile">
                        <img src={profile} alt="Asad Mecci" />
                        <div className="profileContent">
                        <h3>Logan</h3>
                        <p>Actor & Director</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ClientReview;