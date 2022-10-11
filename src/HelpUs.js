import Card2 from "./Card2";

let data = [
  {
    title: "Collaborate",
    info: "Simmi Foundation serves in the collaboration with schools, colleges and other institutions.",
    bdata: "Collaborate with us ",
  },
  {
    title: "Donate Money",
    info: "Your donation will further our mission of ensuring a happy and healthy life of those in need.",
    bdata: "Donate now ",
  },
  {
    title: "Be a Volunteer",
    info: "Even the all-powerful Pointing has no control about the blind texts.",
    bdata: "Read More",
  },
];
const HelpUs = () => {
  return (
    <>
      <div
        style={{
          marginLeft: "300px",
          backgroundImage: "url(./images/helpus.jpeg)",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p
          style={{
            marginLeft: "400px",
            marginTop: "50px",
            fontSize: "40px",
            fontWeight: "600",
          }}
        >
          How Can You Help Us ?
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            padding: "20px",
            textAlign: "center",
            marginLeft: "10px",
          }}
        >
          {data.map((item) => (
            <Card2 d={item} />
          ))}
        </div>
      </div>
    </>
  );
};
export default HelpUs;
