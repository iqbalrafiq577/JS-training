
import logo from "../../assets/images/BookConsult.PNG";
import "../../assets/style/components/sections/bookconsultation.css";

function BookConsultation(){
    return(
        <div className="BookConsultation">
            <div className="contentSide">
                <h4>We Are geared Towards</h4>
                <h1>Versatility and offering you efficiency and the best quality services at every step</h1>
                <p>At Pixarsart our aim is to create the most effective online presence for your brand. We use the latest technology to provide you with the most intuitive solutions to cater to all your business needs. We want to see your business thrive.</p>
                <p>Our Team over at Pixarsart are committed to providing creative and innovative solutions in Web and App Development, UI/UX Design, Backend Development, Digital Product Development, Server Management, Continuous Integration and Continuous deployment as well as effective eCommerce solutions. We are progressively working with clients with legacy systems as well as progressive technologies.</p>
                <button className="consultBtn">Book Free Consultation →</button>
            </div>
            <div>
                <img src={logo} alt="" />

            </div>
        </div>

    )
}
export default BookConsultation;