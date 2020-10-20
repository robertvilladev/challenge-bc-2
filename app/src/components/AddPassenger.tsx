import React, { MouseEvent, FC, useState } from "react";
import { Button } from "antd";
import { post } from "../api";

import Input from "./Input";

type Props = {
  callback: (paquete: any) => void;
};

const AddPassenger: FC<Props> = ({ callback }) => {
  const [value, setValue] = useState<any>({
    name: "",
    code: "",
  });

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
      <div style={styles}>
        <Input
          max={15}
          value={value.name}
          setValue={setValue}
          data={value}
          placeholder="Gerald de Rivia"
          name="name"
        />

        <Input
          max={5}
          value={value.code}
          setValue={setValue}
          data={value}
          placeholder="A1B2C"
          name="code"
          style={{ textTransform: "uppercase" }}
        />

        <Button
          type="primary"
          onClick={handleSubmit}
          disabled={!value.name.length || !value.code.length}
          style={{ margin: "0 18px" }}
        >
          Crear Pasajero
        </Button>
      </div>
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
