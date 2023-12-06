import { useEffect, useState } from "react";
import { Table, TableContainer, Paper, Box, Container } from "@mui/material";
import OrderDetailsTableTop from "../OrderDetailsTable/OrderDetailsTableTop";
import OrderDetailsTableHead from "../OrderDetailsTable/OrderDetailsTableHead";
import OrderDetailsTableBody from "../OrderDetailsTable/OrderDetailsTableBody";
import OrderDetailsTableBottom from "../OrderDetailsTable/OrderDetailsTableBottom";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Order from "../../interfaces/order";
import NotFoundPage from "../../../layout/NotFoundPage/NotFoundPage";
import Product from "../../interfaces/product";
import { GET_ORDER_BY_ID } from "../../graphQl/orderQueries";

const OrderDetailsTable = () => {
  const { orderId } = useParams();
  console.log(orderId);

  // const cartItems = useAppSelector((state) => state.orders.order);
  const [order, setOrder] = useState<Order>();
  const [filteredItems, setFilteredItems] = useState<Product[]>([]);
  const { loading, error, data } = useQuery(GET_ORDER_BY_ID, {
    variables: { getOrderByIdId: orderId },
  });
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    if (data) {
      setOrder(data.getOrderById);
      setFilteredItems(data.getOrderById.cartItems);
      console.log(data);
    }
  }, [data]);
  useEffect(() => {
    if (order) {
      const filteredCartItems = order.cartItems.filter(
        (product: { name: string }) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredItems(filteredCartItems);
    }
  }, [searchTerm]);

  if (loading) return <p>Loading... </p>;
  if (error) return <p>{error.message}</p>;
  if (!loading && !data) return <NotFoundPage />;
  return (
    <Container>
      {order && (
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
            customerNumber={order._id}
            setSearchTerm={setSearchTerm}
          />
          <TableContainer
            component={Paper}
            sx={{ height: "100%", width: "100%" }}
          >
            <Table>
              <OrderDetailsTableHead />
              <OrderDetailsTableBody
                filteredCartItems={filteredItems}
                totalPrice={order.price}
                totalQuantity={order.cartItems.length}
              />
            </Table>
          </TableContainer>
          <OrderDetailsTableBottom />
        </Box>
      )}
    </Container>
  );
};

export default OrderDetailsTable;
