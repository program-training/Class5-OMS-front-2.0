import { gql } from "@apollo/client";

export const GET_ORDERS = gql`
  query GetAllOrdersFromMongoDB {
    getAllOrdersFromMongoDB {
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

export const GET_ORDER_BY_ID = gql`
  query GetOrderById($getOrderByIdId: ID!) {
    getOrderById(id: $getOrderByIdId) {
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
