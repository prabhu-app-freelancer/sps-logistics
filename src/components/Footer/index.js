import { IconButton } from "../common.styles";

const Footer = () => {
 return (
  <footer>
   <div class="footer bottom_cross1">
    <div class="container">
     <div class="row">
      <div class="col-md-4">
       <ul class="location_icon">
        <li><IconButton className="footer-icon"><i class="fa fa-map-marker" aria-hidden="true"></i></IconButton> Address : Anna Nagar <br/> Tamilnadu, India
        </li>
        <li><IconButton className="footer-icon"><i class="fa fa-phone" aria-hidden="true"></i></IconButton>Phone :  +(91) 98735 67770</li>
        <li><IconButton className="footer-icon"><i class="fa fa-envelope" aria-hidden="true"></i></IconButton>Email : info@spslogistics.com</li>
       </ul>
       <form class="bottom_form">
        <h3>Newsletter</h3>
        <input class="enter" placeholder="Enter your email" type="text" name="Enter your email" />
        <button class="sub_btn">subscribe</button>
       </form>
      </div>
      <div class="col-md-8">
       <div class="map">
        <figure><img src="images/map.png" alt="#" /></figure>
       </div>
      </div>
     </div>
    </div>
    <div class="copyright">
     <div class="container">
      <div class="row">
       <div class="col-md-12">
        <p>© 2022 All Rights Reserved. Design by<a href="www.spssoftware.com"> SPS Software Pvt Ltd</a></p>
       </div>
      </div>
     </div>
    </div>
   </div>
  </footer>
 );
}

export default Footer;
