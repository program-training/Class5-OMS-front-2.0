// With God's Help

import { Checkbox, FormControlLabel } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { setIsAdmin } from "../../usersSlice";

const IsAdminComponent = () => {
  const dispatch = useAppDispatch();
  const isAdmin = useAppSelector((store) => store.users.isAdmin);
  return (
    <>
      {" "}
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Admin"
        id="admin"
        onChange={() => {
          dispatch(setIsAdmin(!isAdmin));
        }}
      />
    </>
  );
};

export default IsAdminComponent;
