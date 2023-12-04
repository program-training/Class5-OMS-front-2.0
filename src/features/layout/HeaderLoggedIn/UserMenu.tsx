import React from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { deleteToken } from "../../../services/localStorageService";
import { setToken } from "../../token/tokenSlice";
import { setLoading } from "../../spinner/spinnerSlice";
import UserIcon from "./UserIcon";

interface UserMenuProps {
  anchorElUser: HTMLElement | null;
  handleCloseUserMenu: () => void;
  handleOpenUserMenu: (event: React.MouseEvent<HTMLElement>) => void;
}

const UserMenu: React.FC<UserMenuProps> = ({
  anchorElUser,
  handleCloseUserMenu,
  handleOpenUserMenu,
}) => {
  const settings = ["Logout"];
  const loggedUser = useAppSelector((store) => store.users.loggedUser);
  const dispatch = useAppDispatch();
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar
            alt={loggedUser ? (loggedUser.email as string) : ""}
            src="/static/images/avatar/2.jpg"
          />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <Typography sx={{ margin: "10px", color: "lightblue" }}>
          {loggedUser && (loggedUser.email as string)}
        </Typography>
        <UserIcon />
        {settings.map((setting) => (
          <MenuItem
            key={setting}
            onClick={() => {
              handleCloseUserMenu();
              if (setting === "Logout") {
                try {
                  dispatch(setLoading(true));
                  setTimeout(() => {
                    deleteToken();
                    dispatch(setToken("loggedout"));
                    dispatch(setLoading(false));
                  }, 1000);
                } catch (error) {
                  console.log(error);
                }
              }
            }}
          >
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default UserMenu;
