import { ShoppingCartCheckoutOutlined } from "@mui/icons-material";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import Button from "@mui/material/Button";
import { OrderProps } from "../../../interfaces/orderProps";
import { FC } from "react";
import { cancelOrder, receivedOrder } from "../../../ordersSlice";
import { useAppDispatch } from "../../../../../store/hooks";
import editsOrderStatus from "../../../service/editsOrderStatus";
import useUpdateOrder from "../../../service/editsOrderDetails";

const OrdersCancelReceive: FC<OrderProps> = ({ order }) => {
  const dispatch = useAppDispatch();
  const { updateOrderStatus } = useUpdateOrder();
  const handleCancel = async (orderId: string) => {
    dispatch(cancelOrder(orderId));
    const res = await updateOrderStatus(orderId, "cancelled");
    console.log(res);
  };
  const handleReceive = async (orderId: string) => {
    dispatch(receivedOrder(orderId));
    const res = await updateOrderStatus(orderId, "received");
    console.log(res);
  };
  return (
    <>
      {order.status === "pending" && (
        <Button
          variant="outlined"
          sx={{
            margin: "2px",
            ":hover": {
              backgroundColor: "#FF2E2E",
              color: "aliceblue",
            },
          }}
          color="secondary"
          onClick={(event) => {
            event.stopPropagation();
            handleCancel(order._id);
          }}
        >
          cancel
          <DeleteForeverOutlinedIcon sx={{ marginLeft: "12px" }} />
        </Button>
      )}
      {order.shippingDetails?.orderType === "pickup" &&
        order.status === "pending" && (
          <Button
            sx={{
              margin: "5px",
              ":hover": {
                backgroundColor: "#66FF7F",
                color: "aliceblue",
              },
            }}
            variant="outlined"
            color="primary"
            onClick={(event) => {
              event.stopPropagation();
              handleReceive(order._id);
            }}
          >
            Receive
            <ShoppingCartCheckoutOutlined sx={{ marginLeft: "8px" }} />
          </Button>
        )}
    </>
  );
};

export default OrdersCancelReceive;
