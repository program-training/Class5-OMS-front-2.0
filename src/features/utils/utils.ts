import React from "react";
import Order from "../orders/interfaces/order";

export const filteredOrdersUtils = (
  orders: Order[],
  searchTerm: string,
  page: number,
  setPage: React.Dispatch<React.SetStateAction<number>>,
  rowsPerPage: number,
  setRowsPerPage: React.Dispatch<React.SetStateAction<number>>
) => {
  const filteredOrders = orders
    ? orders.filter((order) => {
        const searchValue = searchTerm.toLowerCase();
        return String(order.shippingDetails?.userId)
          .toLowerCase()
          .includes(searchValue);
      })
    : [];

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    console.log(event);
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const ordersData =
    rowsPerPage > 0
      ? filteredOrders.slice(
          page * rowsPerPage,
          page * rowsPerPage + rowsPerPage
        )
      : filteredOrders;

  return {
    filteredOrders,
    handleChangePage,
    handleChangeRowsPerPage,
    ordersData,
  };
};
