import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(getFormattedTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getFormattedTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function getFormattedTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#3f51b5",
        color: "white",
        padding: "10px 0",
        // position: "fixed",
        bottom: 0,
        width: "100%",
        borderRadius: "3px",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="body2">
          © {new Date().getFullYear()} Team 1 | Local Time: {currentTime}
        </Typography>
      </Container>
      <Button
        variant="contained"
        onClick={() => {
          navigate("/home/store/map");
        }}
      >
        Location
      </Button>
    </Box>
  );
};

export default Footer;
