import { TableCell, TableHead, TableRow } from "@mui/material";

const OrderDetailsTableHead = () => {
  return (
    <TableHead>
      <TableRow sx={{ backgroundColor: "#6daab5" }}>
        <TableCell sx={{ fontSize: "20px", textAlign: "center" }}>
          Name
        </TableCell>
        <TableCell sx={{ fontSize: "20px", textAlign: "center" }}>
          Description
        </TableCell>
        <TableCell sx={{ fontSize: "20px", textAlign: "center" }}>
          Quantity
        </TableCell>
        <TableCell sx={{ fontSize: "20px", textAlign: "center" }}>
          Price
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default OrderDetailsTableHead;
