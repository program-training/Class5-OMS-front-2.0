import React, { useState } from "react";
import {
  TextField,
  Box,
  Container,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useAppSelector } from "../../../../store/hooks";
import useEditOrders from "../../hooks/useEditOrders";
import { editOrderForm } from "../../interfaces/editOrderForm";
import OrderDetailsOrderId from "../OrderDetailsTable/OrderDetailsOrderId";
import OrderDetailsOrderTime from "../OrderDetailsTable/OrderDetailsOrderTime";
import OrderDetailsButtons from "../OrderDetailsTable/OrderDetailsButtons";

const EditOrderPage: React.FC = () => {
  const cartItem = useAppSelector(
    (state) => state.orders.order.shippingDetails
  );

  const [formValues, setFormValues] = useState<editOrderForm>({
    address: cartItem.address,
    contactNumber: cartItem.contactNumber,
    orderType: cartItem.orderType,
  });
  const { handleDeliveryMethodChange } = useEditOrders({
    formValues,
    setFormValues,
  });

  return (
    <Container
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box sx={{ mt: 10, textAlign: "center" }}>
        <OrderDetailsOrderId />
      </Box>

      <Grid container spacing={2} sx={{ mt: 3 }}>
        <Grid item xs={12}>
          <OrderDetailsOrderTime />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Address"
            fullWidth
            value={formValues.address}
            onChange={(e) =>
              setFormValues({ ...formValues, address: e.target.value })
            }
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Contact Number"
            fullWidth
            value={formValues.contactNumber}
            onChange={(e) =>
              setFormValues({
                ...formValues,
                contactNumber: e.target.value,
              })
            }
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="deliveryMethodLabel">Delivery Method</InputLabel>
            <Select
              labelId="deliveryMethodLabel"
              value={formValues.orderType}
              onChange={(e) =>
                handleDeliveryMethodChange(e.target.value as string)
              }
            >
              <MenuItem value="standard">Standard</MenuItem>
              <MenuItem value="express">Express</MenuItem>
              <MenuItem value="pickup">Pickup</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <OrderDetailsButtons
        formValues={formValues}
        setFormValues={setFormValues}
      />
    </Container>
  );
};
export default EditOrderPage;
