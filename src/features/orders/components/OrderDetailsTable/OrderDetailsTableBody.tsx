import { TableBody, TableCell, TableRow, Typography } from "@mui/material";
import { FC } from "react";
import Product from "../../interfaces/product";
import { useAppSelector } from "../../../../store/hooks";

type OrderDetailsTableBodyProps = {
  filteredCartItems: Product[];
  totalQuantity: number;
  totalPrice: number;
};

const OrderDetailsTableBody: FC<OrderDetailsTableBodyProps> = ({
  filteredCartItems,
  totalQuantity,
  totalPrice,
}) => {
  const themeMode = useAppSelector((state) => state.themeMode.themeMode);

  return (
    <TableBody>
      {filteredCartItems.map((product: Product, i: number) => (
        <TableRow
          key={i}
          sx={{
            backgroundColor: themeMode
              ? i % 2 === 0
                ? "#f5f5f5"
                : "#e6e6ff"
              : i % 2 === 0
              ? "#3a3a3b"
              : "#262729",
          }}
        >
          <TableCell sx={{ textAlign: "center" }}> {product.name}</TableCell>
          <TableCell sx={{ textAlign: "center" }}>
            {product.description}
          </TableCell>
          <TableCell sx={{ textAlign: "center" }}>{product.quantity}</TableCell>
          <TableCell sx={{ textAlign: "center" }}>{product.price}</TableCell>
        </TableRow>
      ))}
      <TableRow>
        <TableCell colSpan={2}></TableCell>
        <TableCell>
          <Typography
            variant="subtitle1"
            gutterBottom
            style={{ alignSelf: "flex-start" }}
          >
            Total Quantity: {totalQuantity}
          </Typography>
        </TableCell>
        <TableCell>
          <Typography
            variant="subtitle1"
            gutterBottom
            style={{ alignSelf: "flex-start" }}
          >
            Total Price: ${totalPrice}
          </Typography>
        </TableCell>
      </TableRow>
    </TableBody>
  );
};

export default OrderDetailsTableBody;
