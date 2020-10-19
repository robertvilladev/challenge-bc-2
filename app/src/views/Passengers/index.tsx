import React, { FC, useEffect, useState } from "react";
import { Row, Col, Divider, Typography } from "antd";

import { get } from "../../api/index";
import { apiFetch } from "../../utils";

// Components
import Wrapper from "../../components/Wrapper";
import CardC from "../../components/Card";

const Home: FC = () => {
  const [passengers, setPassengers] = useState<apiFetch[]>([]);

  useEffect(() => {
    get("passengers").then((res) => setPassengers(res));
  }, [passengers.length]);

  console.log(passengers);

  return (
    <>
      <Wrapper>
        <Typography.Title level={2} style={{ textAlign: "center" }}>
          Lista de pasajeros
        </Typography.Title>

        <Divider />

        <Row style={{ width: "70%", margin: "0 auto" }}>
          {passengers.length &&
            passengers.map((passenger) => (
              <Col span={6} key={passenger.id}>
                <CardC
                  name={passenger.name}
                  code={passenger.code}
                  id={passenger.id}
                />
              </Col>
            ))}
        </Row>
      </Wrapper>
    </>
  );
};

export default Home;
