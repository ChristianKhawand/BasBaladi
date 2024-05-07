
import 'bootstrap/dist/css/bootstrap.min.css';

import LoginForm from "../components/LoginForm/LoginForm";
//import LoginForm1 from "./components/LoginForm1/LoginForm1";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";

function LoginPage() {
  return (
    <div className="LoginPage">
      
      <Navigation />
      <LoginForm />
      

    </div>
  );
}

export default LoginPage;