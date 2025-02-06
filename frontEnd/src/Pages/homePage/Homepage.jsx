import Feature from "../../components/homePage/feature/Feature";
import Footer from "../../components/homePage/footer/Footer";
import Milestone from "../../components/homePage/milestone/Milestone";
import Navbar from "../../components/homePage/navBar/Navbar";
import Signup from "../../components/homePage/signUp/Signup";


const HomePage = () => {
  return (
    <>
    <Navbar />
    <Signup />
    <Feature />
    <Milestone />
    <Footer/>
    </>
  )
}

export default HomePage