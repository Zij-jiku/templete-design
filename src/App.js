import Banner from "./components/Banner/Banner";
import Favorit from "./components/Favorit/Favorit";
import Footer from "./components/Footer/Footer";
import Kota from "./components/Kota/Kota";
import Navbar from "./components/Navbar/Navbar";
import Properti from "./components/Properti/Properti";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import './index.css';

function App() {
  return (
    <div>
      <div className="bannerBg">
        <Navbar/>
        <Banner/>
      </div>
      <Properti/>
      <div className="bannerBg">
        <Favorit/>
      </div>
      <Kota/>
      <div className="bannerBg">
        <Footer/>
      </div>
      <SocialMedia/>

    </div>
  );
}
export default App;
