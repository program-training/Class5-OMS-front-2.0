import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import FilterDialogProps from "../../../interfaces/filter";
import FormControlFilterDialog from "./FormControlFilterDialog";
import TextFieldFilterDialog from "./TextFieldFIlterDialog";

const FilterDialog: React.FC<FilterDialogProps> = ({
  open,
  onClose,
  selectedFilters,
  setSelectedFilters,
  filterStatus,
  setFilterStatus,
  setDateRangeStart,
  setDateRangeEnd,
  handleApplyFilters,
}) => {
  const handleFilterSelectionChange = (filter: string) => {
    setSelectedFilters((prevFilters) => {
      if (prevFilters.includes(filter)) {
        return prevFilters.filter((f) => f !== filter);
      } else {
        return [...prevFilters, filter];
      }
    });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle sx={{ textAlign: "center" }}>Filter Orders</DialogTitle>
      <DialogContent>
        <FormGroup sx={{ alignItems: "center" }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedFilters.includes("status")}
                onChange={() => handleFilterSelectionChange("status")}
              />
            }
            label="Status"
          />

          {selectedFilters.includes("status") && (
            <FormControlFilterDialog
              filterStatus={filterStatus}
              setFilterStatus={setFilterStatus}
            />
          )}

          <FormControlLabel
            control={
              <Checkbox
                checked={selectedFilters.includes("dateRange")}
                onChange={() => handleFilterSelectionChange("dateRange")}
              />
            }
            label="Date Range"
          />
          {selectedFilters.includes("dateRange") && (
            <TextFieldFilterDialog
              setDateRangeEnd={setDateRangeEnd}
              setDateRangeStart={setDateRangeStart}
            />
          )}
        </FormGroup>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleApplyFilters} color="primary">
          Apply Filters
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FilterDialog;
