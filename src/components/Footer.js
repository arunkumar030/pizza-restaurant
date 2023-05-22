import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import "../styles/Footer.css";


 function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
               <h3 className='h3'>Follow us</h3>
            <InstagramIcon/><TwitterIcon/><FacebookIcon/><LinkedInIcon/> </div>
            <p className='para'>Order a delicious pizza on the go, anywhere, anytime. Pizza Hut is happy to assist you with your home delivery. Every time you order, you get a hot and fresh pizza delivered at your doorstep in less than thirty minutes.
             <br/>*T&C Apply..
             Hurry up and place your order now!</p>
       
    </div>
  )
}
export default Footer;