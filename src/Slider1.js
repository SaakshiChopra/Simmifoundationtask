import { Carousel } from "antd";

const Slider1 = () => {
  return (
    <>
      <Carousel
        autoplay
        style={{
          background: "lightgrey",
          height: "520px",
          width: "850px",
          boxShadow: "10px 10px 12px 8px lightgrey",
          marginLeft: "10px",
        }}
      >
        <div>
          <img
            style={{ lineHeight: "520px", height: "520px", width: "850px" }}
            src="./images/imga75b483924.jpg"
          />
        </div>
        <div>
          <img
            style={{ lineHeight: "520px", height: "520px", width: "850px" }}
            src="./images/img2.jpg"
          />
        </div>
        <div>
          <img
            style={{ lineHeight: "520px", height: "520px", width: "850px" }}
            src="./images/img3.jpg"
          />
        </div>
        <div>
          <img
            style={{ lineHeight: "520px", height: "520px", width: "850px" }}
            src="./images/img4.jpeg"
          />
        </div>
      </Carousel>
    </>
  );
};
export default Slider1;
