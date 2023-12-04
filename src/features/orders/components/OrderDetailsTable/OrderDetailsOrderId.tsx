import Typography from "@mui/material/Typography";
import { useAppSelector } from "../../../../store/hooks";

const OrderDetailsOrderId = () => {
  const orderId = useAppSelector((state) => state.orders.order._id);
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Edit Order
      </Typography>
      <Typography variant="h6" gutterBottom>
        Order ID: {orderId}
      </Typography>
    </>
  );
};

export default OrderDetailsOrderId;
