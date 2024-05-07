import ContactForm from "../components/ContactForm/ContactForm";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import GetStarted from "../components/GetStarted/GetStarted";
import Maps from "../components/Maps/Maps";

function ContactPage() {
  return (
    <div className="ContactPage">
      <Navigation />
      <ContactForm />
      <Maps />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default ContactPage;