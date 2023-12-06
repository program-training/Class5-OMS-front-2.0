import Product from "./product";

export type OrderStatus = "pending" | "sent" | "cancelled" |"received"


interface Order {
  __typename: string;
  _id: string;
  cartItems: Product[];
  orderTime: Date;
  status: OrderStatus;
  price: number;
  shippingDetails: {
    address: string;
    userId: string;
    contactNumber: string;
    orderType: string;
  };
}
export default Order;
