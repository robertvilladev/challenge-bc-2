import React, { FC, useState } from "react";
import { Select, Alert } from "antd";

import { post, destroy } from "../api";
import { IPassenger } from "../utils";

import Input from "./Input";
import Notification from "./Notification";

type Props = {
  passengerId: number;
  total: number;
  setPackage: (paquete: IPassenger) => void;
};

const AddPackage: FC<Props> = ({ passengerId, total, setPackage }) => {
  const [category, setCategory] = useState<number | string>(0);
  const [input, setInput] = useState<any>({
    name: "",
  });

  const handlechange = (value: string): void => setCategory(value);

  const handleSubmit = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    post("packages", { category, passengerId, name: input.name }).then((res) =>
      setPackage(res)
    );

    setInput({
      name: "",
    });
  };

  const handleDelete = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    destroy(`passengers/${passengerId}`).then((res) => setPackage(res));
  };

  return (
    <form style={style}>
      <div style={style}>
        {total >= 3 ? (
          <Alert
            message="Ha alcanzado el máximo de paquetes disponibles"
            type="warning"
            showIcon
          />
        ) : (
          <>
            <Select defaultValue={"Tamaño"} onChange={handlechange}>
              <Select.Option value={1}>Grande</Select.Option>
              <Select.Option value={2}>Pequeño</Select.Option>
              <Select.Option value={3}>Prenda</Select.Option>
            </Select>

            <Input
              max={15}
              name="name"
              placeholder="Mochila, Prendas..."
              setValue={setInput}
              data={input}
              value={input.name}
            />

            <Notification
              onClick={handleSubmit}
              disabled={!category || !input.name}
              name="Agregar Paquete"
              placement="bottomLeft"
              description="Paquete agregado correctamente"
            />
          </>
        )}
      </div>

      <div>
        <Notification
          onClick={handleDelete}
          disabled={total < 1}
          name="Eliminar Paquetes"
          placement="bottomLeft"
          description="Paquetes eliminados correctamente"
          danger
        />
      </div>
    </form>
  );
};

const style = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
};

export default AddPackage;
