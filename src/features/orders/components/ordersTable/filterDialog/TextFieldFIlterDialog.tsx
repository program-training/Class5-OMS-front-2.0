import { Box, TextField } from "@mui/material";
import { FC } from "react";

type TextFieldFilterDialogProps = {
  setDateRangeStart: React.Dispatch<React.SetStateAction<string>>;
  setDateRangeEnd: React.Dispatch<React.SetStateAction<string>>;
};

const TextFieldFilterDialog: FC<TextFieldFilterDialogProps> = ({
  setDateRangeEnd,
  setDateRangeStart,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        "& > :not(style)": { m: 1 },
        padding: 2,
      }}
    >
      <TextField
        label="Start Date"
        type="date"
        variant="outlined"
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(e) => setDateRangeStart(e.target.value)}
      />
      <TextField
        label="End Date"
        type="date"
        variant="outlined"
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(e) => setDateRangeEnd(e.target.value)}
      />
    </Box>
  );
};

export default TextFieldFilterDialog;
