import { Button } from "@mui/material";
import { FC } from "react";
import { SignInUpButtonInterface } from "../../interfaces/SignInUpButtonInterface";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import { useAlerts } from "../../hooks/useAlerts";
import SignInUpAlert from "../alert/SignInUpAlert";
import { useAppSelector } from "../../../../store/hooks";
import { useMutation } from "@apollo/client";
import { SIGN_UP_MUTATION } from "../../queries/signUpQuery";
// const URL = `${import.meta.env.VITE_BASE_URL}/users`;
const SignUpButton: FC<SignInUpButtonInterface> = ({
  text,
  isValid,
  watch,
}) => {
  const [signUpMutation] = useMutation(SIGN_UP_MUTATION);
  const navigate = useNavigate();
  const { alert, handleAlertClose, showAlert } = useAlerts();
  const isAdmin = useAppSelector((store) => store.users.isAdmin);
  return (
    <>
      <Button
        type="submit"
        onClick={async () => {
          try {
            const { data } = await signUpMutation({
              variables: {
                user: {
                  email: watch("email"),
                  password: watch("password"),
                  isAdmin: isAdmin,
                },
              },
            });
            const object = {
              email: watch("email"),
              password: watch("password"),
              isAdmin: isAdmin,
            };
            if (data.createUser.email === object.email) {
              showAlert(
                "success",
                "Sign up successful! Redirecting to sign in..."
              );

              setTimeout(() => {
                navigate("/oms/signIn");
              }, 2000);
            } else {
              showAlert("error", "Sign up failed. Please try again.");
            }
          } catch (error) {
            error instanceof Error &&
              showAlert("error", `Error: ${error.message}`);
            console.log(error);
          }
        }}
        // onClick={() => {
        //   const object = {
        //     email: watch("email"),
        //     password: watch("password"),
        //     isAdmin: isAdmin,
        //   };
        //   console.log(object);

        //   axios
        //     .post(`${URL}/signup/`, object)
        //     .then((res) => {
        //       console.log(res.data.email, object.email);

        //       if (res.data.email === object.email) {
        //         showAlert(
        //           "success",
        //           "Sign up successful! Redirecting to sign in..."
        //         );

        //         setTimeout(() => {
        //           navigate("/oms/signIn");
        //         }, 2000);
        //       } else {
        //         showAlert("error", "Sign up failed. Please try again.");
        //       }
        //     })
        //     .catch((error) => {
        //       showAlert("error", `Error: ${error.message}`);
        //       console.log(error);
        //     });
        // }}
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

export default SignUpButton;
