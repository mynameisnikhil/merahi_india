import Carousel from "../components/Carousel";
import Booking from "../components/Booking";
import About from "../components/About";
import Features from "../components/Features";
import Destination from "../components/Destination";
import Services from "../components/Services";
import Packages from "../components/Packages";
import Registration from "../components/Registration";
import Team from "../components/Team";
import Testimonial from "../components/Testimonial";
import Blog from "../components/Blog";
import ContactPage from "./ContactPage";

const Home = () => (
  <>
    <Carousel />
    {/* <Booking /> */}
    <Packages />
    <Destination />
    <About />
    <Services />
    <Features />
    <Registration />
    {/* <ContactPage /> */}
    <Team />
    <Testimonial />
    <Blog />
  </>
);

export default Home;
