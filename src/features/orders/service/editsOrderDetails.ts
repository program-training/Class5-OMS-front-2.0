import axios from "axios";
import { editOrderForm } from "../interfaces/editOrderForm";
import { OrderStatus } from "../interfaces/order";
import { useMutation } from "@apollo/client";
import {
  UPDATE_ORDER_DETAILS,
  UPDATE_ORDER_STATUS,
} from "../graphQl/orderMutations";

const useUpdateOrder = () => {
  const [detailsMutation] = useMutation(UPDATE_ORDER_DETAILS);
  const [statusMutation] = useMutation(UPDATE_ORDER_STATUS);

  const updateOrderStatus = async (
    orderId: string,
    orderStatus: OrderStatus
  ) => {
    try {
      const { data } = await statusMutation({
        variables: { order: { orderId, status: orderStatus } },
      });
      if (!data.updateOrderStatus) throw new Error("failed");

      return data.updateOrderStatus;
    } catch (error) {
      console.log(error);
    }
  };

  const updateOrderDetailsFunc = async (
    orderId: string,
    orderDetails: editOrderForm
  ) => {
    try {
      const { data } = await detailsMutation({
        variables: { order: { ...orderDetails, orderId } },
      });
      if (!data.updateOrderStatus) throw new Error("failed");
      return data.updateOrderDetails;
    } catch (error) {
      console.log(error);
    }
  };

  return { updateOrderDetailsFunc, updateOrderStatus };
};

export default useUpdateOrder;
