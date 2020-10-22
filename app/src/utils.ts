import { Dispatch } from "react";

export type apiFetch = {
  id: number;
  name: string;
  code: string;
  totalPackages: number;
};

export interface IPassenger {
  id: number;
  name: string;
  code: string;
  packages: any;
  totalPackages: number;
}

export interface INotifications {
  placement?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  description: string;
  disabled: boolean;
  danger?: boolean;
  name: string;
}

export interface ICustomInput {
  setValue: Dispatch<any>;
  max: number;
  placeholder: string;
  name: string;
  value: string;
  data: object;
  style?: object;
}

export const packageType = ["", "Grande ", "Pequeño ", "Prendas "];
