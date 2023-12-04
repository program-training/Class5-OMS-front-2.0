// With God's Help
import { Alert, AlertTitle } from "@mui/material";
import { FC } from "react";
import { SignUpAlertInterface } from "../../interfaces/SignUpAlertInterface";
const SignInUpAlert: FC<SignUpAlertInterface> = ({
  alert,
  handleAlertClose,
}) => {
  return (
    <>
      {alert && (
        <Alert onClose={handleAlertClose} severity={alert.type} sx={{ mt: 2 }}>
          <AlertTitle>
            {alert.type === "success" ? "Success" : "Error"}
          </AlertTitle>
          {alert.message}
        </Alert>
      )}
    </>
  );
};

export default SignInUpAlert;
