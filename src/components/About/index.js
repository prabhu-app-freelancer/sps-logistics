import { ReadMore } from "../common.styles";

const About = () => {
 return (
  <div id="about" class="about ">
   <div class="container">
    <div class="row d_flex">
     <div class="col-md-6">
      <div class="about_right">
       <figure><img src="images/about.png" alt="#" /></figure>
      </div>
     </div>
     <div class="col-md-6">
      <div class="titlepage">
       <h2>About Us</h2>
       <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, There
       </p>
       <ReadMore href="#">Read More</ReadMore>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
}

export default About;
