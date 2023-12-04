import AdbIcon from "@mui/icons-material/Adb";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

const HeaderLogo = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
      <AdbIcon />
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
        Team 1
      </Typography>
    </Box>
  );
};

export default HeaderLogo;
