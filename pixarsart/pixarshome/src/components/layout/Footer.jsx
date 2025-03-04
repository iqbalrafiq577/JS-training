

import FooterLogo from "../../assets/images/logo/footerLogo.png";
import "../../assets/style/components/layout/footer.css";

function Footer(){
    return(
        <div className="footer">
            <div className="topFooter">
            <div className="logoIcons">
                <img src={FooterLogo} alt="" />
            </div>
              <div className="pContent">
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
            <div className="midFooter">
                <div className="leftElements">
                <div>
                    <h2>USA</h2>
                    <p>Suite 220, 555 republic drive, Plano, Taxes. USA 75074</p>
                    <p>(469) 781-8845</p>
                    <p>info@pixarsart.com</p>
                    <h3>See Location</h3>
                    </div>
                    <div>
                    <h2>USA</h2>
                    <p>Suite 220, 555 republic drive, Plano, Taxes. USA 75074</p>
                    <p>(469) 781-8845</p>
                    <p>info@pixarsart.com</p>
                    <h3>See Location</h3>

                    </div>
                </div>
                <div className="middleElement">
                <div>
                    <h2>USA</h2>
                    <p>Suite 220, 555 republic drive, Plano, Taxes. USA 75074</p>
                    <p>(469) 781-8845</p>
                    <p>info@pixarsart.com</p>
                    <h3>See Location</h3>

                    </div>
                    <div>
                    <h2>USA</h2>
                    <p>Suite 220, 555 republic drive, Plano, Taxes. USA 75074</p>
                    <p>(469) 781-8845</p>
                    <p>info@pixarsart.com</p>
                    <h3>See Location</h3>

                    </div>

                </div>
                <div className="rightElement">
                    <h1>Address Selection</h1>
                    <div className="adressForm">

                        <form action="">
                            <input type="text" placeholder="Address"/>
                            <input type="text" placeholder=""/>
                            <input type="text" placeholder="City"/>
                            <div className="group">
                            <input type="text" placeholder="State" />
                            <input type="text" placeholder="Zip" />
                            </div>
                            <input type="text" placeholder="Country" />
                            <button className="formBtn">Visit</button>
                        </form>

                    </div>

                </div>

            </div>
            <hr />
            <div className="bottomFooter">
                <p>All Rights Reserved © 2025, Pixarsart Studios LLC & Pixarsart Studios (PVT) LTD</p>
    
            </div>
            

        </div>

    )
}
export default Footer;