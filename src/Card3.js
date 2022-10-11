import {
  ClockCircleOutlined,
  EnvironmentOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { Button, Card } from "antd";
const Card3 = ({ d }) => {
  return (
    <>
      <div>
        <Card
          hoverable
          style={{
            width: "350px",

            marginLeft: "20px",
            marginRight: "20px",
          }}
          cover={<img alt="error" src={d.imgLoc} />}
          title={d.Ename}
        >
          <p>
            <CalendarOutlined />
            &ensp;
            {d.calender}&ensp;&ensp;
            <ClockCircleOutlined />
            &ensp;
            {d.time}
          </p>

          <p>
            <EnvironmentOutlined />
            &ensp;
            {d.location}
          </p>
          <p style={{ fontSize: "15px" }}>{d.info}</p>
          <br />
          <Button>Read More</Button>
        </Card>
      </div>
    </>
  );
};
export default Card3;
