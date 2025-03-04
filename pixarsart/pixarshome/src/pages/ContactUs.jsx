
import "../assets/style/pages/contact.css"
function ContactUs(){
    return(
        <div className="ContactUs">
            <div className="contactContent">
                <h1>Questions? Get in touch.</h1>
                <p>What do you have in mind? An upgrade or something particular. Why don’t you give us your details and let us turn your imagination into reality. Fill in the details and get a quote.</p>
            </div>
            <div className="formSide">
                <form action="">
                    <div className="inputs">
                    <div className="inputsLeft">
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Email"/>
                    <input type="text" placeholder="Phone" />
                    <input type="submit" />
                    </div>
                    <div className="inputsRight">
                    <textarea name="" id="" cols="60" rows="40" placeholder="Message"></textarea>
                    </div>
                    </div>
                  
                </form>

            </div>
        </div>

    )
}
export default ContactUs;