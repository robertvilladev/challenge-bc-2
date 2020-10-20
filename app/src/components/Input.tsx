import React, { FC, ChangeEvent, Dispatch } from "react";
import { Input } from "antd";

type Props = {
  value: string;
  data: object;
  placeholder: string;
  max: number;
  name: string;
  style?: object;
  setValue: Dispatch<any>;
};

const CustomInput: FC<Props> = ({
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
