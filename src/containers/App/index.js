import React from 'react';
import Loader from '../../components/Loader';
import SidePanel from '../../components/SidePanel';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import About from '../../components/About';
import Services from '../../components/Services';
import Vehicles from '../../components/Vehicles';
import Testimonial from '../../components/Testimonial';
import Choose from '../../components/Choose';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

const App = () => {
 const [isLoading, setIsLoading] = React.useState(false);
 const [isOpen, setIsOpen] = React.useState(false);

 React.useEffect(() => {
  setIsLoading(true);
  setTimeout(() => {
   setIsLoading(false);
  }, 2000);
 }, []);

 const handleSidePanel = () => {
  setIsOpen(!isOpen);
 }

 return (
  <>
   {
    isLoading ? <Loader /> :
     <>
      {isOpen && <SidePanel onToggleSidePanel={handleSidePanel} />}
      <Header onToggleSidePanel={handleSidePanel} />
      <Banner />
      <About />
      <Services />
      <Vehicles />
      <Testimonial />
      <Choose />
      <Contact />
      <Footer />
     </>
   }
  </>
 );
}

export default App;
