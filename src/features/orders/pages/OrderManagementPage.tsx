import OrdersTable from "../components/pages/OrdersTable";
import { useAppSelector } from "../../../store/hooks";
import { Container } from "@mui/material";

const OrderManagementPage = () => {
  const themeMode = useAppSelector((store) => store.themeMode.themeMode);

  return (
    <Container
      className="page-container"
      sx={{
        marginTop: "80px",
        backgroundColor: themeMode ? "white" : "black",
        borderRadius: 8,
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
      }}
    >
      <OrdersTable />
    </Container>
  );
};

export default OrderManagementPage;
