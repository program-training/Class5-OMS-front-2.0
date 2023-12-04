import { useState } from "react";
import { Table, TableContainer, Paper, Box, Container } from "@mui/material";
import { useAppSelector } from "../../../../store/hooks";
import OrderDetailsTableTop from "../OrderDetailsTable/OrderDetailsTableTop";
import OrderDetailsTableHead from "../OrderDetailsTable/OrderDetailsTableHead";
import OrderDetailsTableBody from "../OrderDetailsTable/OrderDetailsTableBody";
import OrderDetailsTableBottom from "../OrderDetailsTable/OrderDetailsTableBottom";

const OrderDetailsTable = () => {
  const cartItems = useAppSelector((state) => state.orders.order);

  const customerNumber = cartItems._id;
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCartItems = cartItems.cartItems.filter(
    (product: { name: string }) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          marginTop: 10,
          textAlign: "center",
        }}
      >
        <OrderDetailsTableTop
          customerNumber={customerNumber}
          setSearchTerm={setSearchTerm}
        />
        <TableContainer
          component={Paper}
          sx={{ height: "100%", width: "100%" }}
        >
          <Table>
            <OrderDetailsTableHead />
            <OrderDetailsTableBody filteredCartItems={filteredCartItems} />
          </Table>
        </TableContainer>
        <OrderDetailsTableBottom />
      </Box>
    </Container>
  );
};

export default OrderDetailsTable;
