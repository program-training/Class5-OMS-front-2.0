import axios from "axios";
const URL = `${import.meta.env.VITE_BASE_URL}/orders`;

const editsOrderDetails = (
  orderId: string,
  orderStatus: Record<string, unknown>
) => {
  axios
    .put(`${URL}/${orderId}`, orderStatus)
    .then(() => {
      console.log("Success");
    })
    .catch((error) => {
      console.error(
        error.message,
        "Error connecting to the orders status server"
      );
    });
};

export default editsOrderDetails;
