import React, { FC, ChangeEvent } from "react";
import { Input } from "antd";

import { ICustomInput } from "../utils";

const CustomInput: FC<ICustomInput> = ({
  value,
  setValue,
  data,
  placeholder,
  max,
  name,
  style,
}) => {
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValue({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <Input
      style={{ ...style, margin: "0 12px" }}
      placeholder={placeholder}
      onChange={handleInput}
      maxLength={max}
      value={value}
      name={name}
      size="middle"
    />
  );
};

export default CustomInput;
