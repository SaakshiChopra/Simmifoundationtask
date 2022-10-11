import Card1 from "./Card1";
let data = [
  {
    imageLoc: "./images/education.jpg",
    name: "Education",
    info: "We provide free academic education, scholarship, training and other incentives to the children.",
  },
  {
    imageLoc: "./images/livelihood.jpg",
    name: "Livelihood",
    info: "We implement various schemes to provide livelihood and uplift the poor in society.",
  },
  {
    imageLoc: "./images/healthcare.jpg",
    name: "Healthcare",
    info: "We are increasing awareness on Sanitization and providing people with access to better nutrition, clean water and toilets.",
  },
  {
    imageLoc: "./images/women empowerment.jpg",
    name: "Women and Youth Empowerment",
    info: "We focus on providing equal opportunities for women in the work field.",
  },
];
const Objectives = () => {
  return (
    <>
      <p
        style={{
          textAlign: "center",
          marginTop: "50px",
          fontSize: "40px",
          fontWeight: "600",
          color: " #f58634",
        }}
      >
        OBJECTIVES
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: "20px",
          textAlign: "center",
          marginLeft: "40px",
        }}
      >
        {data.map((item) => (
          <Card1 d={item} />
        ))}
      </div>
    </>
  );
};
export default Objectives;
