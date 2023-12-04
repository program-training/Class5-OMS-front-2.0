import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const OrderDetailsTableBottom = () => {
  const navigate = useNavigate();
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "flex-end",
        marginRight: "10px",
        marginBottom: "20px",
      }}
    >
      <Box style={{ marginRight: "20px" }}></Box>

      <Box>
        <Button
          variant="contained"
          sx={{ margin: "20px" }}
          onClick={() => navigate("/oms/orders")}
        >
          Go Back
        </Button>
      </Box>
    </Box>
  );
};

export default OrderDetailsTableBottom;
