import { Button } from "@mui/material";
import { FC } from "react";
import { SignInUpButtonInterface } from "../../interfaces/SignInUpButtonInterface";
import { useNavigate } from "react-router-dom";
import { useAlerts } from "../../hooks/useAlerts";
import SignInUpAlert from "../alert/SignInUpAlert";
import {
  getToken,
  setLocalStorageToken,
} from "../../../../services/localStorageService";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { setToken } from "../../../token/tokenSlice";
import { setLoggedUser } from "../../usersSlice";
import { useMutation } from "@apollo/client";
import { LOGIN_MUTATION } from "../../queries/loginQuery";
const SignInButton: FC<SignInUpButtonInterface> = ({
  text,
  isValid,
  watch,
}) => {
  const [loginMutation] = useMutation(LOGIN_MUTATION);
  const navigate = useNavigate();
  const rememberMe = useAppSelector((store) => store.token.rememberMe);
  const { alert, handleAlertClose, showAlert } = useAlerts();
  const dispatch = useAppDispatch();

  const onClick = async () => {
    try {
      const { data } = await loginMutation({
        variables: {
          user: {
            email: watch("email"),
            password: watch("password"),
          },
        },
      });
      if (data.login.resInfoObj.user.email) {
        dispatch(setToken("loggedin"));
        dispatch(setLoggedUser(data.login.resInfoObj.user));
        console.log(data.login.resInfoObj.user);

        if (rememberMe) {
          setLocalStorageToken(data.login.resInfoObj.token);
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
    } catch (error) {
      error instanceof Error && showAlert("error", `Error: ${error.message}`);
      console.log(error);
    }
  };
  return (
    <>
      <Button
        type="submit"
        onClick={onClick}
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
