import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { FC } from "react";

type OrderDetailsTableTopProps = {
  customerNumber: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

const OrderDetailsTableTop: FC<OrderDetailsTableTopProps> = ({
  customerNumber,
  setSearchTerm,
}) => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "10px",
          marginBottom: "20px",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Order Details
        </Typography>
        <Typography variant="h6" gutterBottom>
          Order ID: {customerNumber}
        </Typography>
      </Box>

      <Box sx={{ marginLeft: "10px", marginBottom: "20px" }}>
        <TextField
          label="Search By Name"
          variant="outlined"
          size="small"
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Box>
  );
};

export default OrderDetailsTableTop;
