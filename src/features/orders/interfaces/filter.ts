interface FilterDialogProps {
  open: boolean;
  onClose: () => void;
  selectedFilters: string[];
  setSelectedFilters: React.Dispatch<React.SetStateAction<string[]>>;
  filterStatus: string | null;
  setFilterStatus: React.Dispatch<React.SetStateAction<string | null>>;
  filterCustomer: boolean;
  dateRangeStart: string;
  setDateRangeStart: React.Dispatch<React.SetStateAction<string>>;
  dateRangeEnd: string;
  setDateRangeEnd: React.Dispatch<React.SetStateAction<string>>;
  handleApplyFilters: () => void;
}

export default FilterDialogProps;
