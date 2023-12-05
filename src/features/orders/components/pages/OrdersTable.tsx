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
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import OrdersTableHead from "../ordersTable/OrdersTableHead";
import OrdersBodyTable from "../ordersTable/ordersBodyTable/OrdersBodyTable";
import useOrder from "../../hooks/useOrder";
import { filteredOrdersUtils } from "../../../utils/utils";
import { useQuery } from "@apollo/client";
import { GET_ORDERS } from "../../../recipes/services/apollo/queries";
import { setOrders } from "../../ordersSlice";

const OrdersTable = () => {
  const { filteredOrders: orders } = useAppSelector((store) => store.orders);
  // const [orders, setOrdersData] = useState<Order[]>([]);
  const { loading, error, data } = useQuery(GET_ORDERS);

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!loading) {
      // setOrdersData(data.getAllOrdersFromMongoDB);
      dispatch(setOrders(data.getAllOrdersFromMongoDB));
      console.log(orders, "table");
    }
  }, [loading]);

  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const { changeStatus } = useOrder(orders);
  const { handleChangePage, handleChangeRowsPerPage, ordersData } =
    filteredOrdersUtils(
      orders,
      searchTerm,
      page,
      setPage,
      rowsPerPage,
      setRowsPerPage
    );
  useEffect(() => {
    const timeoutId = setTimeout(changeStatus, 10000);
    return () => clearTimeout(timeoutId);
  }, [orders]);
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
            {orders.length && <OrdersBodyTable currentOrders={ordersData} />}
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default OrdersTable;
