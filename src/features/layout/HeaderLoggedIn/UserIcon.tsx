import { Box, Icon, Typography } from "@mui/material";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useAppSelector } from "../../../store/hooks";
const UserIcon = () => {
  const loggedUser = useAppSelector((store) => store.users.loggedUser);
  return (
    <>
      <Typography sx={{ margin: "10px", color: "lightblue", display: "flex" }}>
        {loggedUser &&
          (loggedUser.isadmin ? (
            <Box sx={{ display: "flex" }}>
              <Icon>
                <AdminPanelSettingsIcon />
              </Icon>
              ADMIN
            </Box>
          ) : (
            <Box sx={{ display: "flex" }}>
              <Icon sx={{ marginRight: "10px" }}>
                <AccountCircleIcon />
              </Icon>
              REGULAR USER
            </Box>
          ))}
      </Typography>
    </>
  );
};

export default UserIcon;
