import { Button } from "@mui/material";
import { FC } from "react";
import { SignInUpButtonInterface } from "../../interfaces/SignInUpButtonInterface";
import { useNavigate } from "react-router-dom";
import { useAlerts } from "../../hooks/useAlerts";
import axios from "axios";
import SignInUpAlert from "../alert/SignInUpAlert";
import {
  getToken,
  setLocalStorageToken,
} from "../../../../services/localStorageService";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { setToken } from "../../../token/tokenSlice";
import { setLoggedUser } from "../../usersSlice";
// import { useToken } from "../../../token/hooks/useToken";
const URL = `${import.meta.env.VITE_BASE_URL}/users/login`;
const SignInButton: FC<SignInUpButtonInterface> = ({
  text,
  isValid,
  watch,
}) => {
  const navigate = useNavigate();
  const rememberMe = useAppSelector((store) => store.token.rememberMe);
  const { alert, handleAlertClose, showAlert } = useAlerts();
  const dispatch = useAppDispatch();
  const object = {
    email: watch("email"),
    password: watch("password"),
  };
  return (
    <>
      <Button
        type="submit"
        onClick={() => {
          axios
            .post(URL, object)
            .then((res) => {
              console.log(res.data.resInfoObj.user.email, object.email);

              if (res.data.resInfoObj.user.email === object.email) {
                dispatch(setToken("loggedin"));
                dispatch(setLoggedUser(res.data.resInfoObj.user));
                console.log(res.data.resInfoObj.user);

                if (rememberMe) {
                  setLocalStorageToken(res.data.resInfoObj.token);
                }
                console.log(getToken());
                showAlert(
                  "success",
                  "Sign in successful! Redirecting to orders page..."
                );

                setTimeout(() => {
                  navigate("/oms/orders");
                }, 2000);
              } else {
                showAlert(
                  "error",
                  "Sign in failed. Incorrect email or password. Please try again."
                );
              }
            })
            .catch((error) => {
              showAlert("error", `Error: ${error.message}`);
              console.log(error);
            });
        }}
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        disabled={!isValid}
      >
        {text}
      </Button>
      <SignInUpAlert alert={alert} handleAlertClose={handleAlertClose} />
    </>
  );
};

export default SignInButton;
