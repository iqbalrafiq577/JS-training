
import "../../assets/style/components/sections/whowe.css"
import Button from "../common/Button";
function WhoWe(){
    return(
        <div className="who-we-are">
            <div className="main-heading">
              <div className="left-content">
                <h1>Who we are?</h1>
                <p>You get to work with some of the most talented web developers, designers, creative thinkers and innovators in our team. Website designing and development catered just for you.</p>
              </div>
              <div>
                <div>
                  <Button text="Contact Us"/>
                </div>
                
              </div>
            </div>
            <div className="who-content">
                <div>
                    <p>We value you and your brand. Analysis of your goals is a primary step in our work process. We want to get to know you and your business goals and then collaborate together to turn your ideas into reality.</p>
                </div>
                <div>
                    <p>We value you and your brand. Analysis of your goals is a primary step in our work process. We want to get to know you and your business goals and then collaborate together to turn your ideas into reality.</p>
                </div>
            </div>
        </div>

    )
}
export default WhoWe;