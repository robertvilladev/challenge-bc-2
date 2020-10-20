import React, { VFC } from "react";
import { PageHeader } from "antd";

const Header: VFC = () => {
  return (
    <PageHeader
      title="Control de Pasajeros"
      subTitle="admin access (Rober Villa)"
      style={styles}
    />
  );
};

export default Header;

const styles = {
  background: "#141414",
  boxShadow: "0px 4px 15px -4px rgba(0, 0, 0, 0.75)",
};
