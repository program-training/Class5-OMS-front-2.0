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
