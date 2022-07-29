const QuoteForm = () => {
 return (
  <form class="transfot">
   <div class="col-md-12">
    <span>Professional Services</span>
    <h3>Get your transport quote</h3>
   </div>
   <div class="col-md-12">
    <input class="transfot_form" placeholder="Location" type="text" name="Location" />
   </div>
   <div class="col-md-12">
    <input class="transfot_form" placeholder="To destination" type="text" name="To destination" />
   </div>
   <div class="col-md-12">
    <input class="transfot_form" placeholder="Email" type="text" name="Email" />
   </div>
   <div class="col-md-12">
    <input class="transfot_form" placeholder="Contact Number" type="text" name="Contact Number" />
   </div>
   <div class="col-md-12">
    <button class="get_now">Get Now quote</button>
   </div>
  </form>
 );
}

export default QuoteForm;
