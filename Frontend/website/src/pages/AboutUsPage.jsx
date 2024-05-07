import Hexa from "../components/hexa/hexa";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import GetStarted from "../components/GetStarted/GetStarted";
import Infos from "../components/infos/infos";


function AboutUsPage() {
  return (
    <div className="AboutUsPage">
      <Navigation />
        <Hexa />
        <Infos />
      <GetStarted />
      
      <Footer />
    </div>
  );
}

export default AboutUsPage;