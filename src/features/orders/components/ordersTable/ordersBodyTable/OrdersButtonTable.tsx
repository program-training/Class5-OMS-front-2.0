import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import { FC } from "react";
import { OrderProps } from "../../../interfaces/orderProps";
import { useAppDispatch } from "../../../../../store/hooks";
import { setOrder } from "../../../ordersSlice";

const OrdersButtonTable: FC<OrderProps> = ({ order }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <>
      {order.status === "pending" && (
        <Button
          onClick={(event) => {
            event.stopPropagation();
            dispatch(setOrder(order));
            navigate("/oms/editOrderPage");
          }}
        >
          <EditIcon />
        </Button>
      )}
    </>
  );
};

export default OrdersButtonTable;
