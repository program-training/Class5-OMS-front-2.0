import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import useEditOrders from "../../hooks/useEditOrders";
import { editOrderForm } from "../../interfaces/editOrderForm";

interface useEditOrdersProps {
  formValues: editOrderForm;
  setFormValues: React.Dispatch<React.SetStateAction<editOrderForm>>;
}

const OrderDetailsButtons = ({
  formValues,
  setFormValues,
}: useEditOrdersProps) => {
  const { handleCancel, handleSave } = useEditOrders({
    formValues,
    setFormValues,
  });
  return (
    <Box
      sx={{
        mt: 3,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Button
        sx={{ margin: "2px" }}
        variant="contained"
        color="secondary"
        startIcon={<CancelIcon />}
        onClick={handleCancel}
      >
        Cancel
      </Button>
      <Button
        sx={{ m: "2px" }}
        variant="contained"
        color="primary"
        startIcon={<SaveIcon />}
        onClick={handleSave}
      >
        Save Changes
      </Button>
    </Box>
  );
};

export default OrderDetailsButtons;
