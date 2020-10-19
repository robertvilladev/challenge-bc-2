import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";

type Props = {
  id: number;
  name: string;
  code: string;
};

const CardC: FC<Props> = ({ name, code, id }) => {
  return (
    <Link to={`/${id}`}>
      <Card hoverable style={styles}>
        <Card.Meta
          title={`Pasajero: ${name}`}
          description={`Boleto: ${code}`}
        />
      </Card>
    </Link>
  );
};

const styles = {
  width: "90%",
  margin: "2%",
};

export default CardC;
