import GITEX from "../../assets/images/GITEX.jpg";

import "../../assets/style/components/sections/subhero.css";

function SubHero() {
    return (
        <div className="subHero">
            <h4>FITNESS FUSION</h4>
            <div className="imageContainer">
                <div className="image">
                    <img src={GITEX} alt="" />
                </div>
                <div className="image">
                    <img src={GITEX} alt="" />
                </div>
                <div className="image">
                    <img src={GITEX} alt="" />
                </div>
                
            </div>
        </div>
    );
}

export default SubHero;