import React from "react";
import { Typography, Button, Container, Paper } from "@mui/material";
import TicTacToe from "./TicTacToe";
const NotFoundPage: React.FC = () => {
  const handleRefresh = () => {
    window.location.reload();
  };
  const handleGoHome = () => {
    window.location.href = "/home";
  };
  return (
    <Container maxWidth="md" style={{ marginTop: "40px", minHeight: "80vh" }}>
      <Paper elevation={2} style={{ padding: "45px", textAlign: "center" }}>
        <img
          src="https://blog.thomasnet.com/hs-fs/hubfs/shutterstock_774749455.jpg?width=480&name=shutterstock_774749455.jpg"
          alt="404"
          style={{ maxWidth: "80%" }}
        />
        <Typography variant="h5" style={{ marginTop: "16px", color: "#333" }}>
          Oops! It looks like you're lost.
        </Typography>
        <Typography
          variant="body1"
          style={{ marginBottom: "16px", color: "#555" }}
        >
          The page you are looking for might be under construction or does not
          exist.
        </Typography>
        <Button variant="contained" color="primary" onClick={handleRefresh}>
          Refresh Page
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleGoHome}
          style={{ marginLeft: "8px" }}
        >
          Go back to Home
        </Button>
        <Typography
          variant="body2"
          style={{ marginTop: "16px", color: "#777" }}
        >
          While you wait, find a friend and play with him:
          <TicTacToe />
        </Typography>
      </Paper>
    </Container>
  );
};
export default NotFoundPage;
