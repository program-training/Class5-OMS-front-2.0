import { useAppSelector } from "../../../../store/hooks";
import TextField from "@mui/material/TextField";

const OrderDetailsOrderTime = () => {
  const orderTime = useAppSelector((state) => state.orders.order.orderTime);
  return (
    <TextField
      disabled
      label="Order Time"
      fullWidth
      value={orderTime}
      InputProps={{
        readOnly: true,
      }}
      sx={{ mb: 2 }}
    />
  );
};

export default OrderDetailsOrderTime;
