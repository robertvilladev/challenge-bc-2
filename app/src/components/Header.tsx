import React, { VFC } from "react";
import { PageHeader } from "antd";

const Header: VFC = () => {
  return (
    <PageHeader
      title="Control de Vuelos"
      subTitle="admin access"
      style={styles}
    />
  );
};

export default Header;

const styles = {
  background: "#141414",
};
