
import logo from "../assets/images/logo.png";
import "../assets/style/footer.css"
function Footer(){
    return(
        <div className="main-footer">
            <div className="top-footer">
            <div className="logo-icons">
                <img src={logo} alt="" />
            </div>
              <div className="p-content">
                <p>
                We are a fast growing full scale digital agency with multiple Certifications and Partnerships. Our team is proud to be featured in multiple publications globally
                </p>
              </div>
              <div>
                <h2>Information</h2>
                <ul>
                <li>About Company</li>
                <li>Blog</li>
                <li>Career</li>
                <li>Conatct Us</li>
                </ul>
              </div>

            </div>
            <div className="mid-footer">
                <div className="left-elements">
                    <div>
                    <h2>USA</h2>
                    <ul>
                        <li>Suite 220, 555 republic drive, Plano, Taxes. USA 75074</li>
                        <li>(469) 781-8845</li>
                        <li>info@pixarsart.com</li>
                    </ul>
                    <h2>See Location</h2>

                    </div>
                    <div>
                    <h2>USA</h2>
                    <ul>
                        <li>Suite 220, 555 republic drive, Plano, Taxes. USA 75074</li>
                        <li>(469) 781-8845</li>
                        <li>info@pixarsart.com</li>
                    </ul>
                    <h2>See Location</h2>

                    </div>
                   

                </div>
                <div className="middle-element">
                <div>
                    <h2>USA</h2>
                    <ul>
                        <li>Suite 220, 555 republic drive, Plano, Taxes. USA 75074</li>
                        <li>(469) 781-8845</li>
                        <li>info@pixarsart.com</li>
                    </ul>
                    <h2>See Location</h2>

                    </div>
                    <div>
                    <h2>USA</h2>
                    <ul>
                        <li>Suite 220, 555 republic drive, Plano, Taxes. USA 75074</li>
                        <li>(469) 781-8845</li>
                        <li>info@pixarsart.com</li>
                    </ul>
                    <h2>See Location</h2>

                    </div>

                </div>
                <div className="right-element">
                    <h1>Address Selection</h1>
                    <div className="adress-form">

                        <form action="">
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                            <div className="group">
                            <input type="text" />
                            <input type="text" />
                            </div>
                            <input type="text" />
                            <button className="form-btn">Visit</button>
                        </form>

                    </div>

                </div>

            </div>
            <div className="bottom-footer">
                <p>All rigts Reserved</p>
    
            </div>
            

        </div>

    )
}
export default Footer;