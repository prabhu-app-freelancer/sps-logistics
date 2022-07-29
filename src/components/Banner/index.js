import { ReadMore } from "../common.styles";
import QuoteForm from "./QuoteForm";

const Banner = () => {
 return (
  <section class="banner_main">
   <div id="banner1" class="carousel slide banner_slide" data-ride="carousel">
    <ol class="carousel-indicators">
     <li data-target="#banner1" data-slide-to="0" class="active"></li>
     <li data-target="#banner1" data-slide-to="1"></li>
     <li data-target="#banner1" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
     <div class="carousel-item active">
      <div class="container-fluid">
       <div class="carousel-caption">
        <div class="row">
         <div class="col-md-7 col-lg-5">
          <div class="text-bg">
           <h1>SPS Logistics</h1>
           <span>We provide road transport services PAN India and in the neighbouring countries of Bhutan, Nepal and at Bangladesh border with a commitment of timely delivery and safe handling. Since its inception in 1989, SPS Logistics Limited has been continuously adding value to it’s stakeholders by its services.</span>
           <ReadMore href="#contact">Contact Us</ReadMore>
          </div>
         </div>
         <div class="col-md-12 col-lg-7">
          <div class="row">
           <div class="col-md-6">
            <div class="ban_track">
             <figure><img src="images/track.png" alt="#" /></figure>
            </div>
           </div>
           <div class="col-md-6">
            <QuoteForm />
           </div>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
     <div class="carousel-item">
      <div class="container-fluid">
       <div class="carousel-caption">
        <div class="row">
         <div class="col-md-7 col-lg-5">
          <div class="text-bg">
           <h1>SPS Logistics Banner2</h1>
           <span>Contrary to popular belief, Lorem Ipsum is not simply random text. It has i</span>
           <ReadMore href="#contact">Contact Us</ReadMore>
          </div>
         </div>
         <div class="col-md-12 col-lg-7">
          <div class="row">
           <div class="col-md-6">
            <div class="ban_track">
             <figure><img src="images/track.png" alt="#" /></figure>
            </div>
           </div>
           <div class="col-md-6">
            <QuoteForm />
           </div>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
     <div class="carousel-item">
      <div class="container-fluid">
       <div class="carousel-caption">
        <div class="row">
         <div class="col-md-7 col-lg-5">
          <div class="text-bg">
           <h1>SPS Logistics Banner3</h1>
           <span>Contrary to popular belief, Lorem Ipsum is not simply random text. It has i</span>
           <ReadMore href="#contact">Contact Us</ReadMore>
          </div>
         </div>
         <div class="col-md-12 col-lg-7">
          <div class="row">
           <div class="col-md-6">
            <div class="ban_track">
             <figure><img src="images/track.png" alt="#" /></figure>
            </div>
           </div>
           <div class="col-md-6">
            <QuoteForm />
           </div>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
    <a class="carousel-control-prev" href="#banner1" role="button" data-slide="prev">
     <i class="fa fa-angle-left" aria-hidden="true"></i>
    </a>
    <a class="carousel-control-next" href="#banner1" role="button" data-slide="next">
     <i class="fa fa-angle-right" aria-hidden="true"></i>
    </a>
   </div>
  </section>
 );
}

export default Banner;
