import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import ScrollFloat from './components/ui/ScrollFloat';
import ProductsSection from "./components/ProductScreen/ProductScreen";
import AboutPage from "./components/AboutPage/AboutPage";
import Footer from "./components/Footer/Footer";

const Home = () => {
  
  return (
    <>
      <Navbar/>
      <HeroSection/> 
      <AboutPage/> 
      
      {/* Enhanced Our Products Section */}
      <div className="bg-gradient-to-br from-black via-gray-900 to-gray-800 py-20 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-gray-500/10 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gray-400/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-gray-600/10 rounded-full animate-pulse delay-500"></div>
        </div>
        <div className="text-4xl font-bold text-white text-center mb-12">Our Products</div>
          <ProductsSection/>
          <Footer/>
        
      </div>
      
    </>
  )
}

export default Home;