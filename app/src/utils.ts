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

export const packageType = [
  "",
  "Paquete grande ( carry-on)",
  "Paquete pequeño (cartera, mochila o bolso pequeño)",
  "Prendas (abrigos o mantas)",
];
