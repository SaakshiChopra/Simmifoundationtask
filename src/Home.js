import Events from "./Events";
import Footer1 from "./Footer1";
import HelpUs from "./HelpUs";
import Navbar1 from "./Navbar1";
import Objectives from "./Objectives";
import Partners from "./Partners";
import Slider1 from "./Slider1";
import Welcome from "./Welcome";

const Home = () => {
  return (
    <>
      <div>
        <Navbar1 />
        <div1 style={{ display: "grid", columnGap: "5px" }}>
          <div2 style={{ gridColumn: "1", gridRow: "1" }}>
            <Welcome />
          </div2>
          <div3 style={{ gridColumn: "2", gridRow: "1" }}>
            <Slider1 />
          </div3>
        </div1>
        <Objectives />
        <HelpUs />
        <Events />
        <Partners />
        <Footer1 />
      </div>
    </>
  );
};
export default Home;
