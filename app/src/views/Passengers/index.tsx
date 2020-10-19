import React, { VFC, useEffect, useState } from "react";
import { Row, Col, Divider, Typography } from "antd";

import { get } from "../../api/index";
import { apiFetch } from "../../utils";

// Components
import Wrapper from "../../components/Wrapper";
import CardC from "../../components/Card";
import Input from "../../components/AddPassenger";
import Loading from "../../components/Loading";

const Passengers: VFC = () => {
  const [passengers, setPassengers] = useState<apiFetch[]>([]);

  useEffect(() => {
    get("passengers").then((res) => setPassengers(res));
  }, []);

  if (!passengers.length) return <Loading />;

  return (
    <>
      <Wrapper>
        <Typography.Title level={3} style={{ textAlign: "center" }}>
          Agregar Pasajero
        </Typography.Title>

        <Input callback={setPassengers} />

        <Divider />

        <Typography.Title level={3} style={{ textAlign: "center" }}>
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

export default Passengers;
