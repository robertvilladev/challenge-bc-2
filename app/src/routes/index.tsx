import React, { VFC, useState, useEffect } from "react";
import { Switch, BrowserRouter, Route, Redirect } from "react-router-dom";

// Components
import Header from "../components/Header";
import Passengers from "../views/Passengers";
import Passenger from "../views/Passenger";
import Loading from "../components/Loading";

const RoutesContainer: VFC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) return <Loading />;

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

export default RoutesContainer;
