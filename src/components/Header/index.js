import { HeaderButton, LogoContainer } from "./header.styles";
import Icon from "../Icon";

const Header = ({ onToggleSidePanel }) => {
 return (
  <header>
   <div class="header">
    <div class="container-fluid">
     <div class="row">
      <div class="col-md-4 col-sm-4">
       <div class="logo">
        <LogoContainer href="/"><img src="images/logo.png" alt="#" /></LogoContainer>
       </div>
      </div>
      <div class="col-md-8 col-sm-8">
       <div class="right_bottun">
        <ul class="conat_info d_none ">
         <li><HeaderButton><Icon className="fa fa-user" aria-hidden="true"/></HeaderButton></li>
         <li><HeaderButton><Icon className="fa fa-search" aria-hidden="true"/></HeaderButton></li>
        </ul>
        <button className="openbtn" onClick={onToggleSidePanel}>
         <img src="images/menu_icon.png" alt="#" />
        </button>
       </div>
      </div>
     </div>
    </div>
   </div>
  </header>
 );
}

export default Header;
