import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/FooterComponents/Footer";
import UserDetails from "../components/UserDetails/UserDetails";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <UserDetails/>
      <Footer />
    </div>
  );
};

export default HomePage;
