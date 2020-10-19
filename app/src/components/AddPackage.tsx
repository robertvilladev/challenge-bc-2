import React, { FC, useState } from "react";
import { Select, Button, Alert } from "antd";

import { post, destroy } from "../api";
import { IPassenger } from "../utils";

type Props = {
  passengerId: number;
  total: number;
  setPackage: (paquete: IPassenger) => void;
};

const AddPackage: FC<Props> = ({ passengerId, total, setPackage }) => {
  const [category, setCategory] = useState<number | string>(0);

  const handlechange = async (value: number | string) => {
    setCategory(value);
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    post("packages", { category, passengerId }).then((res) => setPackage(res));
  };

  const handleDelete = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    destroy(`passengers/${passengerId}`).then((res) => setPackage(res));
  };

  return (
    <form style={{ display: "flex", justifyContent: "space-around" }}>
      <div>
        {total >= 3 ? (
          <Alert
            message="Ha alcanzado el máximo de paquetes disponibles"
            type="warning"
            showIcon
          />
        ) : (
          <>
            {" "}
            <Select defaultValue={"Tamaño"} onChange={handlechange}>
              <Select.Option value={1}>Grande</Select.Option>
              <Select.Option value={2}>Pequeño</Select.Option>
              <Select.Option value={3}>Prenda</Select.Option>
            </Select>
            <Button
              disabled={!category}
              onClick={handleSubmit}
              type="primary"
              style={{ margin: 12 }}
            >
              Agregar Paquete
            </Button>
          </>
        )}
      </div>

      <div>
        <Button
          disabled={total < 1}
          danger
          onClick={handleDelete}
          type="primary"
          style={{ margin: 12 }}
        >
          Eliminar Paquetes
        </Button>
      </div>
    </form>
  );
};

export default AddPackage;
