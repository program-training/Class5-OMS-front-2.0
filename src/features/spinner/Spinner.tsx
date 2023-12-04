import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { useAppSelector } from "../../store/hooks";
import { themeDark, themeLight } from "../themes/themes";

const Spinner: React.FC = () => {
  const themeMode = useAppSelector((store) => store.themeMode.themeMode);
  return (
    <>
      <ThemeProvider theme={themeMode ? themeLight : themeDark}>
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Spinner;
