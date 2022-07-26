import { SidePanelContainer,CloseButton } from "./sidePanel.styles";

const SidePanel = ({ onToggleSidePanel }) => {
 return (
  <SidePanelContainer className="sidepanel">
   <CloseButton href="javascript:void(0)" className="closebtn"
    onClick={onToggleSidePanel}>×</CloseButton>
   <a href="index.html">Home </a>
   <a href="#about">About</a>
   <a href="#service">Services</a>
   <a href="#vehicles">Our Vehicles</a>
   <a href="#testimonial">Testimonial</a>
   <a href="#contact">Contact</a>
  </SidePanelContainer>
 );
}

export default SidePanel;
