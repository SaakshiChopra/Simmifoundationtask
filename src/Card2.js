import { Button, Card } from "antd";

const Card2 = ({ d }) => {
  return (
    <>
      <div>
        <Card
          hoverable
          style={{
            width: "350px",

            marginLeft: "20px",
            marginRight: "20px",
            opacity: "0.9",
          }}
          title={d.title}
        >
          <p style={{ fontSize: "25px" }}>{d.info}</p>
          <br />
          <Button>{d.bdata}</Button>
        </Card>
      </div>
    </>
  );
};
export default Card2;
