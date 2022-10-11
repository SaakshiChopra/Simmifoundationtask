import { Button, Card } from "antd";

const { Meta } = Card;

const Card1 = ({ d }) => {
  return (
    <>
      <div>
        <Card
          hoverable
          style={{
            width: "350px",
            fontSize: "25px",
            marginLeft: "20px",
            marginRight: "20px",
          }}
          title={d.name}
          cover={<img alt="error" src={d.imageLoc} />}
        >
          <p>{d.info}</p>
          <br />
          <Button>Read More</Button>
        </Card>
      </div>
    </>
  );
};
export default Card1;
