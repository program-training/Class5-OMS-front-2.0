import { useState } from "react";

export const useAlerts = () => {
  interface AlertInfo {
    type: "success" | "error";
    message: string;
  }
  const [alert, setAlert] = useState<AlertInfo | null>(null);

  const handleAlertClose = () => {
    setAlert(null);
  };

  const showAlert = (type: "success" | "error", message: string) => {
    setAlert({ type, message });
  };

  return { handleAlertClose, showAlert, alert, setAlert };
};
