import React, { ChangeEvent, MouseEvent, FC, useState } from "react";
import { Button, Input } from "antd";

import { post } from "../api";

type Props = {
  callback: (paquete: any) => void;
};

const AddPassenger: FC<Props> = ({ callback }) => {
  const [value, setValue] = useState({
    name: "",
    code: "",
  });

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    post("/passengers", {
      ...value,
      [value.code]: value.code.toUpperCase(),
    }).then((res) => callback(res));

    setValue({
      name: "",
      code: "",
    });
  };

  return (
    <>
      <form style={styles}>
        <Input
          onChange={handleInput}
          maxLength={15}
          placeholder="Gerald de Rivia"
          size="middle"
          value={value.name}
          name="name"
          style={{ margin: "0 12px" }}
        />

        <Input
          onChange={handleInput}
          size="middle"
          placeholder="A1B2C"
          value={value.code}
          name="code"
          style={{ margin: "0 12px", textTransform: "uppercase" }}
          maxLength={5}
        />

        <Button
          type="primary"
          onClick={handleSubmit}
          disabled={!value.name.length || !value.code.length}
          style={{ margin: "0 18px" }}
        >
          Crear Pasajero
        </Button>
      </form>
    </>
  );
};

const styles = {
  display: "flex",
  width: "30%",
  margin: "0 auto",
  justifyContent: "space-around",
  alignItems: "center",
};

export default AddPassenger;
