import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import AdbIcon from "@mui/icons-material/Adb";
import { Typography, Box, IconButton } from "@mui/material";
import { HeaderNav } from "./HeaderNav";
import { useNavigate } from "react-router-dom";
import HeaderButtons from "./HeaderButtons";
import HeaderSignInButton from "./HeaderSignInButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setThemeMode } from "../../themes/themeModeSlice";

const pages = ["Home", "Orders"];

const Header = () => {
  const navigate = useNavigate();
  const themeMode = useAppSelector((store) => store.themeMode.themeMode);
  const dispatch = useAppDispatch();
  return (
    <AppBar position="fixed" sx={{ width: "100%" }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box sx={{ display: "flex" }}>
            <AdbIcon
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
              }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              onClick={() => {
                navigate("/oms");
              }}
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Team 1 OMS
            </Typography>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <HeaderNav pages={pages} />
          </Box>

          <HeaderButtons pages={pages} />
          <Box sx={{ marginLeft: "auto", display: "flex" }}>
            <HeaderSignInButton />
            <IconButton
              sx={{ ml: 1 }}
              onClick={() => {
                dispatch(setThemeMode(!themeMode));
              }}
              color="inherit"
            >
              {themeMode ? <Brightness4Icon /> : <Brightness7Icon />}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
