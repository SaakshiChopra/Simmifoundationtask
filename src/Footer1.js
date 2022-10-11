import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneFilled,
} from "@ant-design/icons";
const Footer1 = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#252525",
          color: "#f8f9fa",
          fontSize: "20px",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <div style={{ display: "grid", columnGap: "5px" }}>
          <div1 style={{ gridColumn: "1", gridRow: "1" }}>
            <h3 style={{ color: "#f8f9fa" }}>ABOUT US</h3>
            <p>
              We envisions to develop a society based on legitimate rights,
              <br />
              equity, justice, honesty, social sensitivity and a culture of
              <br />
              service in which all are self-reliant.
            </p>
          </div1>
          <div2 style={{ gridColumn: "2", gridRow: "1" }}>
            <h3 style={{ color: "#f8f9fa" }}>INITIATIVES</h3>
            <p>Khel Sangathan</p>
            <p>Sukoon Parikram</p>
            <p>Simmi Olympiads</p>
            <p>Kalaakaar Manch</p>
            <p>Sanskritik Setu</p>
            <p>Sambhav Madad</p>
          </div2>
          <div3 style={{ gridColumn: "3", gridRow: "1" }}>
            <h3 style={{ color: "#f8f9fa" }}>HAVE QUESTIONS?</h3>
            <p>
              <EnvironmentOutlined />
              &ensp; 479, Baspadamka, Tehsil Pataudi, Gurugram, Haryana -
              122503, India.
            </p>
            <p>
              <PhoneFilled />
              &ensp;(+91) 70152 - 95025
            </p>
            <p>
              <MailOutlined />
              &ensp;support@simmifoundation.org
            </p>
          </div3>
        </div>
        <br />

        <div4 style={{ marginLeft: "-80px" }}>
          <img src="./images/logo.png" height="70px" />
          &ensp;&ensp;
          <img src="./images/NITI-Aayog-logo.png" height="70px" />
          <br />
          <h3 style={{ color: "#f8f9fa" }}>
            Our Registration number : 085953/2020 Niti Aayog (Govt. Of India )
            Unique Id : HR/2020/0258148
          </h3>
        </div4>
      </div>
    </>
  );
};
export default Footer1;
