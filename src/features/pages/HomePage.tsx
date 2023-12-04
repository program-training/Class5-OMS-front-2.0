import { Box, Container, CssBaseline, Typography } from "@mui/material";

const HomePage = () => {
  return (
    <>
      <Container>
        <CssBaseline />
        <Typography
          variant="h3"
          sx={{
            marginTop: "250px",
            marginBottom: "10px",
            textAlign: "center",
          }}
        >
          TEAM 1 OMS
        </Typography>
        <Box
          sx={{
            display: "flex",
            maxWidth: "700px",
            marginBottom: "60px",
            marginTop: "10px",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></Box>
      </Container>
    </>
  );
};
export default HomePage;
