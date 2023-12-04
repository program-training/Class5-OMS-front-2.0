// import SignUpButton from "../signUpComponents/SignUpButton";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { setRememberMe } from "../../../token/tokenSlice";

const FooterSignIn = () => {
  const dispatch = useAppDispatch();
  const rememberMe = useAppSelector((store) => store.token.rememberMe);
  return (
    <>
      {" "}
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
        onChange={() => {
          dispatch(setRememberMe(!rememberMe));
          console.log(rememberMe);
        }}
      />
    </>
  );
};

export default FooterSignIn;
