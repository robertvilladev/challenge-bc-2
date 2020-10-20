import React, { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Wrapper: FC<Props> = ({ children }) => {
  return <div style={styles}>{children}</div>;
};

const styles = {
  margin: "0 auto",
  marginTop: 18,
  width: "85%",
};

export default Wrapper;
