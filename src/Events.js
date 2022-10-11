import Card3 from "./Card3";

let data = [
  {
    Ename: "Marathon Event ",
    location: "Delhi ",
    time: "22:25:00 - 23:25:00 ",
    calender: "2020-07-09 ",
    info: "Lorem Ipsum generator a baeeLorem Ipsum generator a baee Lorem Ipsum generator a baee Lorem Ipsum generator a baee Lorem Ipsum generator a baee ",
    imgLoc: "./images/ev1.jpg",
  },
  {
    Ename: "event-til ",
    location: "India",
    time: "02:13:00 - 02:43:00 ",
    calender: "2021-06-30 ",
    info: "event-descevent-descevent-descevent-descevent-descevent-descevent-descevent-descevent-descevent-descevent-descevent-descevent-descevent-descevent-descevent-desc ",
    imgLoc: "./images/ev2.jpeg",
  },
  {
    Ename: "Know your heart better By Dr. Rahul Katariya  ",
    location: "India",
    time: "16:00:00 - 17:00:00 ",
    calender: "2021-12-13 ",
    info: '"Know your heart better" Catch Dr. Rahul Katariya speak live on the topic cardiac pain on SIMMI foundation\'s official instagram handle. Link : https://instagram.com/simmifoundation/ #simmifounda',
    imgLoc: "./images/ev3.jpg",
  },
  {
    Ename: "Coronavirus and the country ",
    location: "Instagram",
    time: "15:00:00 - 15:30:00",
    calender: "2022-01-17",
    info: "The SIMMI FOUNDATION introduces Dr. Arnab Mandal! Dr. Mandal is an MBBS gold-medallist from RG Kar Medical College and is currently working as a house physician at the department of pediatrics in RG",
    imgLoc: "./images/ev4.jpeg",
  },
  {
    Ename: "Development and empowerment ",
    location: "Instagram",
    time: "16:00:00 - 16:30:00",
    calender: "2022-01-18",
    info: "Ms. Poonam Shroti addresses the unaddressed topic of disability and women empowerment, and the true face of rural development in the country",
    imgLoc: "./images/ev5.jpeg",
  },
  {
    Ename: "Wellness and health, a vital concept. ",
    location: "Google Meet",
    time: "18:00:00 - 18:30:00",
    calender: "2022-01-19",
    info: "Ms. Lade talks about the issues of liver disease and how Ayurveda can help in solving the modern problems of today",
    imgLoc: "./images/ev6.jpeg",
  },
  {
    Ename: "Mental Health and Motivation ",
    location: "Instagram",
    time: "15:00:00 - 15:30:00",
    calender: "2022-01-21",
    info: "Ms. Papiya talks about mental health and the stigma around it, and how to overcome difficulties in talking about it and treating it.",
    imgLoc: "./images/ev7.jpeg",
  },
  {
    Ename: " Rural Development ",
    location: "Instagram",
    time: "16:00:00 - 16:31:00",
    calender: "2022-01-21",
    info: "Mr. Dushyant talks about rural development, especially infrastructure and roadways",
    imgLoc: "./images/ev8.jpeg",
  },
  {
    Ename: "Understanding Archeology ",
    location: "Google Meet",
    time: "12:00:00 - 12:30:00",
    calender: "2022-01-22",
    info: "we dive with Ms. Neha into the field of archeology, as she explains the basics of archeology and the inner workings of libraries",
    imgLoc: "./images/ev9.jpeg",
  },
  {
    Ename: " Understanding Entrepreneurship ",
    location: "Instagram",
    time: "18:00:00 - 18:30:00 ",
    calender: "2022-01-22",
    info: 'Mr. Amman Khurana talks about his journey as an entrepreneur and how he became the "ultimate life coach"',
    imgLoc: "./images/ev10.jpeg",
  },
];
const Events = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: "url(./images/b1.webp)",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
            fontSize: "50px",
            fontWeight: "600",
            color: " #f58634",
          }}
        >
          Current and Upcoming events
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            padding: "20px",

            marginLeft: "300px",
          }}
        >
          {data.map((item) => (
            <Card3 d={item} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Events;
