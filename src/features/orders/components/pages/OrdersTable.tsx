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
import getAllOrders from "../../service/getAllOrders";

const OrdersTable = () => {
  const { filteredOrders: orders } = useAppSelector((store) => store.orders);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllOrders());
    console.log(orders);
  }, []);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const { changeStatus } = useOrder(orders);
  const { handleChangePage, handleChangeRowsPerPage, data } =
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
