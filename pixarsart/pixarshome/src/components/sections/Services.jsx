
import "../../assets/style/components/sections/services.css"
import "../common/Button"
import SvgIcon from "../../assets/images/svg/Vector5.svg";
import Button from "../common/Button";
function Services(){
    return(
        <div className="Services">
            <div className="topHeading">
                <div className="serviceHeading">
                    <h3>SERVICES</h3>
                    <h2>Solutions We Provide</h2>
                </div>
                <div>
                <p>
                You have come to the Right Place PixarsArt is a <br /> Unified Platform for all things of Web & Mobile
                </p>
                </div>
                <div>
                <div>
                    <Button text="Contact Us"/>
                
                </div>
                </div>
               
            </div>
            <div className="belowContent">
                <div className="serviceBox">
                    <h1>1.</h1>
                    <h1>WEB DEVELOPMENT</h1>
                    <p>We are a team of Skilled Professionals developing your ideas <br /> into Reality. We are a team of Skilled Professionals...</p>
                    <img src={SvgIcon} alt="" />
                </div>
                <hr />
                <div className="serviceBox">
                    <h1>2.</h1>
                    <h1>WEB DEVELOPMENT</h1>
                    <p>We are a team of Skilled Professionals developing your ideas <br /> into Reality. We are a team of Skilled Professionals...</p>
                    <img src={SvgIcon} alt="" />
                </div>
                <hr />
                <div className="serviceBox">
                    <h1>3.</h1>
                    <h1>WEB DEVELOPMENT</h1>
                    <p>We are a team of Skilled Professionals developing your ideas <br /> into Reality. We are a team of Skilled Professionals...</p>
                    <img src={SvgIcon} alt="" />
                </div>
                <hr />
                <div className="serviceBox">
                    <h1>4.</h1>
                    <h1>WEB DEVELOPMENT</h1>
                    <p>We are a team of Skilled Professionals developing your ideas <br /> into Reality. We are a team of Skilled Professionals...</p>
                    <img src={SvgIcon} alt="" />
                </div>
                <hr />
                <div className="serviceBox">
                    <h1>5.</h1>
                    <h1>WEB DEVELOPMENT</h1>
                    <p>We are a team of Skilled Professionals developing your ideas <br /> into Reality. We are a team of Skilled Professionals...</p>
                    <img src={SvgIcon} alt="" />
                </div>
                <hr />

            </div>

        </div>

    )
}
export default Services;