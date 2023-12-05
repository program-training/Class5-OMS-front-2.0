import { useState, useEffect } from "react";
import {
  Table,
  TableContainer,
  Paper,
  Container,
  Box,
  TablePagination,
} from "@mui/material";
import SearchField from "../ordersTable/SearchField";
// import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import OrdersTableHead from "../ordersTable/OrdersTableHead";
import OrdersBodyTable from "../ordersTable/ordersBodyTable/OrdersBodyTable";
import useOrder from "../../hooks/useOrder";
import { filteredOrdersUtils } from "../../../utils/utils";
// import getAllOrders from "../../service/getAllOrders";
import Order from "../../interfaces/order";
import { useQuery } from "@apollo/client";
import { GET_ORDERS } from "../../../recipes/services/apollo/queries";

const OrdersTable = () => {
  // const { filteredOrders: orders } = useAppSelector((store) => store.orders);
  const [orders, setOrdersData] = useState<null | Order[]>(null);
  const { loading, error, data } = useQuery(GET_ORDERS);
  console.log(data.getAllOrdersFromMongoDB);

  // const dispatch = useAppDispatch();
  useEffect(() => {
    data && setOrdersData(data.getAllOrdersFromMongoDB);
    console.log(orders);
  }, [data, orders]);

  if (loading) return <p>Loading... </p>;
  if (error) return <p>{error.message}</p>;

  // const [searchTerm, setSearchTerm] = useState("");
  // const [page, setPage] = useState(0);
  // const [rowsPerPage, setRowsPerPage] = useState(5);
  // const { changeStatus } = useOrder(orders);
  // const { handleChangePage, handleChangeRowsPerPage } = filteredOrdersUtils(
  //   orders,
  //   searchTerm,
  //   page,
  //   setPage,
  //   rowsPerPage,
  //   setRowsPerPage
  // );

  if (loading) return <p>Loading... </p>;
  if (error) return <p>{error.message}</p>;
  return (
    <Container>
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <SearchField searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <TablePagination
          component="div"
          count={orders.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
        />
        <TableContainer component={Paper}>
          <Table>
            <OrdersTableHead />
            <OrdersBodyTable currentOrders={data} />
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default OrdersTable;
