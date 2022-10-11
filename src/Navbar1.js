import { Affix, Menu } from "antd";
const Navbar1 = () => {
  return (
    <>
      <div>
        <Affix offsetTop={5}>
          <Menu
            mode="horizontal"
            style={{
              fontWeight: "400",
              fontSize: "x-large",
              padding: "10px",
              fontStyle: "oblique",
            }}
          >
            <Menu.Item
              style={{
                fontWeight: "bold",
                fontSize: "xx-large",
                fontStyle: "normal",
              }}
            >
              <img
                style={{ width: "50px", height: "50px" }}
                src="./images/logo.png"
              />
              &#160; Simmi Foundation
            </Menu.Item>
            &ensp;&ensp;&ensp;&ensp;&ensp;
            <Menu.Item>Home</Menu.Item>
            <Menu.Item>About</Menu.Item>
            <Menu.Item>Donate</Menu.Item>
            <Menu.Item>Blog</Menu.Item>
            <Menu.Item>Gallery</Menu.Item>
            <Menu.Item>Volunteer</Menu.Item>
            <Menu.Item>Events</Menu.Item>
            <Menu.Item>Careers</Menu.Item>
            <Menu.Item>Contact</Menu.Item>
          </Menu>
          <p
            style={{
              fontSize: "15px",
              padding: "10px",
              backgroundColor: "#f8f9fa",
            }}
          >
            {" "}
            Smart India Multi Management Institute! &ensp; स्मार्ट इंडिया
            बहुद्देश्यीय प्रबन्धन संस्थान! &ensp; Registration number :
            085953/2020 &ensp; Niti Aayog (Govt. Of India ) Unique Id :
            HR/2020/0258148
          </p>
        </Affix>
      </div>
    </>
  );
};
export default Navbar1;
