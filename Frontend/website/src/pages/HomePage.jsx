import Hero from "../components/Hero/Hero";
import 'bootstrap/dist/css/bootstrap.min.css';
import GetStarted from "../components/GetStarted/GetStarted";
import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navigation/Navigation";
import Speciality from "../components/Speciality/Speciality";
import Pos from "../components/Pos/Pos";



function HomePage() {
  return (
    <div className="HomePage">
      
      <Navigation />
      <Hero />
      <Speciality />
      {/* <Footer2 /> */}
      <Pos />
      

      <GetStarted />
      <Footer />

      
      

    </div>
  );
}

export default HomePage;