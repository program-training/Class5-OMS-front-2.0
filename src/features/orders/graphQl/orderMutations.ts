import { gql } from "@apollo/client";

export const UPDATE_ORDER_DETAILS = gql`
  mutation UpdateOrderDetails($order: UpdateOrderDetailsInput!) {
    updateOrderDetails(order: $order) {
      _id
      cartItems {
        productId
        name
        description
        price
        quantity
      }
      orderTime
      status
      price
      shippingDetails {
        address
        userId
        contactNumber
        orderType
      }
    }
  }
`;

export const UPDATE_ORDER_STATUS = gql`
  mutation UpdateOrderStatus($order: UpdateOrderStatusInput!) {
    updateOrderStatus(order: $order) {
      _id
      cartItems {
        productId
        name
        description
        price
        quantity
      }
      orderTime
      status
      price
      shippingDetails {
        address
        userId
        contactNumber
        orderType
      }
    }
  }
`;
