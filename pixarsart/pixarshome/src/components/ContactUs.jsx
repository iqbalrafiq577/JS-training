

import "../assets/style/contact.css"
function ContactUs(){
    return(
        <div className="main-contact">
            <div className="contact-content">
                <h1>Questions? Get in touch.</h1>

                <p>What do you have in mind? An upgrade or something particular. Why don’t you give us your details and let us turn your imagination into reality. Fill in the details and get a quote.</p>
            </div>
            <div className="form-side">
                <form action="">
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    {/* <input type="checkbox" /> */}
                    <input type="submit" />
                </form>

            </div>
        </div>

    )
}
export default ContactUs;