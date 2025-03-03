import brand1 from "../assets/images/GITEX.jpg";

import "../assets/style/subhero.css";

function SubHero() {
    return (
        <div className="sub-hero">
            <h4>FITNESS FUSION</h4>
            <div className="image-container">
                <div className="image">
                    <img src={brand1} alt="Slide 1" />
                </div>
                <div className="image">
                    <img src={brand1} alt="Slide 2" />
                </div>
                <div className="image">
                    <img src={brand1} alt="Slide 3" />
                </div>
                
            </div>
        </div>
    );
}

export default SubHero;