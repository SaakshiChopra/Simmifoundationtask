const Welcome = () => {
  return (
    <>
      <img
        src="./images/map-dark.png"
        width="720px"
        height="520px"
        style={{
          marginLeft: "30px",
          boxShadow: "10px 10px 12px 8px lightgrey",
        }}
      />
      <div
        style={{
          marginLeft: "15px",
          position: "absolute",
          top: "120px",
          left: "15px",
          backgroundColor: "black",
          color: "white",
          paddingLeft: "20px",
          paddingRight: "20px",
          opacity: "65%",
          fontFamily: "Arial",
          boxSizing: "border-box",
          fontSize: " 25px",
          width: "720px",
          height: "520px",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "40px" }}>
          Welcome to <c style={{ color: " #f58634" }}>SIMMI</c>
        </p>
        <p>
          Smart India Multi Management Institute is a pan India NGO registered
          in Haryana, India; carrying out welfare projects on education,
          healthcare, livelihood and women empowerment. We believe that unless
          members of the civil society are involved proactively in the process
          of development, sustainable change will not happen. Based on this,
          Simmi Foundation sensitizes and engages the civil society, making it
          an active partner in all its welfare initiatives.
        </p>
      </div>
    </>
  );
};
export default Welcome;
