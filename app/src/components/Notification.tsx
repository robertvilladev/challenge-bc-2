import React, { FC } from "react";
import { Button, notification } from "antd";

import { INotifications } from "../utils";

const openNotification = (
  placement: "topLeft" | "topRight" | "bottomLeft" | "bottomRight" | undefined,
  onCliclk: (e?: any) => void,
  description: string
) => {
  onCliclk();
  notification.open({
    message: "Notificación",
    description: description,
    placement: placement,
    duration: 2,
  });
};

const Notification: FC<INotifications> = ({
  placement = "bottomLeft",
  onClick,
  disabled,
  description,
  name,
  danger,
}) => {
  return (
    <Button
      type="primary"
      danger={danger}
      disabled={disabled}
      style={{ margin: 12 }}
      onClick={(e) =>
        openNotification(placement, () => onClick(e), description)
      }
    >
      {name}
    </Button>
  );
};

export default Notification;
