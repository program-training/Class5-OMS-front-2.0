import React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import HeaderLogo from "./HeaderLogo";
import NavigationMenu from "./NavigationMenu";
import UserMenu from "./UserMenu";
import { Box, IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setThemeMode } from "../../themes/themeModeSlice";

const HeaderLoggedIn = () => {
  const themeMode = useAppSelector((store) => store.themeMode.themeMode);
  const dispatch = useAppDispatch();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="fixed"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box sx={{ display: "flex" }}>
            <HeaderLogo />
            <NavigationMenu
              anchorElNav={anchorElNav}
              handleCloseNavMenu={handleCloseNavMenu}
              handleOpenNavMenu={handleOpenNavMenu}
            />
          </Box>
          <Box sx={{ display: "flex" }}>
            <IconButton
              sx={{ ml: 1, marginRight: "10px" }}
              onClick={() => {
                dispatch(setThemeMode(!themeMode));
              }}
              color="inherit"
            >
              {themeMode ? <Brightness4Icon /> : <Brightness7Icon />}
            </IconButton>
            <UserMenu
              anchorElUser={anchorElUser}
              handleCloseUserMenu={handleCloseUserMenu}
              handleOpenUserMenu={handleOpenUserMenu}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default HeaderLoggedIn;
