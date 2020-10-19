import React, { FC } from "react";

const Wrapper: FC = ({ children }) => {
  return <div style={styles}>{children}</div>;
};

const styles = {
  margin: "0 auto",
  marginTop: 18,
  width: "95%",
};

export default Wrapper;
