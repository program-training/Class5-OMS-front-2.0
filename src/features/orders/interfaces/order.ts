import Product from "./product";
interface Order {
  _id: string;
  cartItems: Product[];
  orderTime: Date;
  status: string;
  price: number;
  shippingDetails: {
    address: string;
    userId: string;
    contactNumber: string;
    orderType: string;
  };
}
export default Order;
