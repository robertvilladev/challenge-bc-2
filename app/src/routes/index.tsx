import React, { VFC, useState, useEffect } from "react";
import { Switch, BrowserRouter, Route, Redirect } from "react-router-dom";
import { Spin, Space } from "antd";

// Components
import Header from "../components/Header";
import Passengers from "../views/Passengers";
import Passenger from "../views/Passenger";

const RoutesContainer: VFC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading)
    return (
      <Space size="large" style={styles}>
        <Spin size="large" />
      </Space>
    );

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Passengers} />
        <Route exact path="/:id" component={Passenger} />

        <Route exact path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

const styles = {
  display: "flex",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
};

export default RoutesContainer;
