import React from "react";
import BackGroun3 from "../../img/BackGroun3.png";
import BL from "../../img/BigLight.png";
import ML from "../../img/MiniLight.png";
import SL from "../../img/ShadowLight.png";
function Contact() {
  return (
     <section id="contactUs">
       <div className="img">
          <img src={BL} alt="" />
       <img src={ML} alt="" />
       <img src={SL} alt="" />
       </div>
        <div className="container">
          <div className="content">
            <div className="icontent">
              <h3>Contact Us</h3>
             <form action="">
               <input type="text" />
               <input type="text" />
               <input type="text" />
               <input type="submit" value="Send"/>
             </form>
            </div>
             
          </div>
        </div>
      
        
    </section>    
  );
}

export default Contact;