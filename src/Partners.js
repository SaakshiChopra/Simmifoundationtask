import { Carousel } from "antd";

const Partners = () => {
  return (
    <>
      <div>
        <h2
          style={{
            color: "#f58634",
            textAlign: "center",
            fontSize: "40px",
            fontWeight: "600",
          }}
        >
          OUR PARTNERS
        </h2>
        <Carousel
          autoplay
          style={{
            height: "220px",
            width: "250px",
            textAlign: "center",
            marginLeft: "730px",
          }}
        >
          <div>
            <a
              href="https://www.simsree.org/simsree-library-restoration-fund/"
              tabindex="-1"
            >
              <img
                style={{ height: "120px", width: "120px", marginLeft: "70px" }}
                src="./images/p3.png"
              />
            </a>
            <br />
            <p>SIMSREE, Mumbai</p>
          </div>
          <div>
            <a href="https://sgtbkhalsadu.ac.in/" tabindex="-1">
              <img
                style={{ height: "120px", width: "120px", marginLeft: "70px" }}
                src="./images/p1.png"
              />
            </a>
            <br />
            <p>Shri Guru Teg Bahadur Khalsa College, DU</p>
          </div>
          <div>
            <a href="https://mccblr.edu.in/" tabindex="-1">
              <img
                style={{ height: "120px", width: "120px", marginLeft: "70px" }}
                src="./images/p2.png"
              />
            </a>
            <br />
            <p>Mount Carmel College, Bangalore</p>
          </div>
          <div>
            <a
              href="https://www.amity.edu/raipur/?utm_source=google&utm_medium=local-listing&utm_campaign=organic"
              tabindex="-1"
            >
              <img
                style={{ height: "120px", width: "120px", marginLeft: "70px" }}
                src="./images/p4.png"
              />
            </a>
            <br />
            <p>Amity University</p>
          </div>
          <div>
            <a href="https://igu.ac.in/2021/" tabindex="-1">
              <img
                style={{ height: "120px", width: "120px", marginLeft: "70px" }}
                src="./images/p5.png"
              />
            </a>
            <br />
            <p> IGU Meerpur University, Haryana</p>
          </div>
          <div>
            <a href="https://www.lpu.in/" tabindex="-1">
              <img
                style={{ height: "120px", width: "120px", marginLeft: "70px" }}
                src="./images/p6.png"
              />
            </a>
            <br />
            <p> LPU, Punjab</p>
          </div>
          <div>
            <a href="https://www.mirandahouse.ac.in/" tabindex="-1">
              <img
                style={{ height: "120px", width: "120px", marginLeft: "70px" }}
                src="./images/p7.png"
              />
            </a>
            <br />
            <p>Miranda House, DU</p>
          </div>
          <div>
            <a href="https://www.upes.ac.in/" tabindex="-1">
              <img
                style={{ height: "120px", width: "120px", marginLeft: "70px" }}
                src="./images/p8.png"
              />
            </a>
            <br />
            <p>UPES, Dehradun</p>
          </div>
        </Carousel>
      </div>
    </>
  );
};
export default Partners;
