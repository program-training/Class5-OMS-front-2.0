import { TableCell, TableHead, TableRow } from "@mui/material";
import { useAppSelector } from "../../../../store/hooks";

const OrdersTableHead = () => {
  const themeMode = useAppSelector((state) => state.themeMode.themeMode);
  return (
    <TableHead>
      <TableRow
        sx={{
          backgroundColor: themeMode ? "#edba21" : "#6DAAB5",
          fontSize: "500px",
          textAlign: "center",
        }}
      >
        <TableCell sx={{ fontSize: "20px", textAlign: "center" }}>
          Order Date{" "}
        </TableCell>
        <TableCell sx={{ fontSize: "20px", textAlign: "center" }}>
          User ID
        </TableCell>
        <TableCell sx={{ fontSize: "20px", textAlign: "center" }}>
          Address
        </TableCell>
        <TableCell sx={{ fontSize: "20px", textAlign: "center" }}>
          Contact Number
        </TableCell>
        <TableCell sx={{ fontSize: "20px", textAlign: "center" }}>
          Order Type
        </TableCell>
        <TableCell sx={{ fontSize: "20px", textAlign: "center" }}>
          Price
        </TableCell>
        <TableCell sx={{ fontSize: "20px", textAlign: "center" }}>
          Status
        </TableCell>
        <TableCell sx={{ fontSize: "20px", textAlign: "center" }}>
          Action
        </TableCell>
        <TableCell sx={{ fontSize: "20px", textAlign: "center" }}>
          Edit order
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default OrdersTableHead;
