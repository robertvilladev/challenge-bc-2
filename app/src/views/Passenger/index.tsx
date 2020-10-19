import React, { FC, useEffect, useState } from "react";
import { Divider, List } from "antd";
import { Link, RouteComponentProps } from "react-router-dom";

import { get } from "../../api";
import { IPassenger, packageType } from "../../utils";

import Wrapper from "../../components/Wrapper";
import AddPackage from "../../components/AddPackage";
import Loading from "../../components/Loading";

interface RouteInfo {
  id: string;
}

interface ComponentProps extends RouteComponentProps<RouteInfo> {}

const Passenger: FC<ComponentProps> = ({ match }) => {
  const [passenger, setPassenger] = useState<IPassenger>();

  useEffect(() => {
    get(`passengers/${match.params.id}`).then((res) => setPassenger(res));
  }, [match.params.id]);

  if (!passenger) return <Loading />;

  return (
    <>
      <Wrapper>
        <Link to="/">
          <Divider orientation="left">Lista de pasajeros (click acá)</Divider>
        </Link>

        <Divider orientation="center">{passenger && passenger.name}</Divider>

        <List
          header={
            <div style={{ fontWeight: 800 }}>
              Bultos totales: {passenger.totalPackages}
            </div>
          }
          bordered
          dataSource={passenger.packages.map(
            (item: { category: number }) => item.category
          )}
          renderItem={(item: number) => (
            <List.Item>{packageType[item]} </List.Item>
          )}
        />

        <Divider />

        <AddPackage
          passengerId={passenger.id}
          total={passenger.totalPackages}
          setPackage={setPassenger}
        />
      </Wrapper>
    </>
  );
};

export default Passenger;
