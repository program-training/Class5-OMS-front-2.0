import React from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

interface NavigationMenuProps {
  anchorElNav: HTMLElement | null;
  handleCloseNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
  handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({
  handleOpenNavMenu,
}) => {
  const pages = ["Home", "Orders"];
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex" }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
        sx={{ display: { xs: "flex", md: "none" } }}
      >
        <MenuIcon />
      </IconButton>
      {pages.map((page) => (
        <Button
          key={page}
          onClick={() => {
            navigate(
              page === "Orders"
                ? "/oms/orders"
                : page === "Home"
                ? "/oms"
                : `/${page.toLowerCase()}`
            );
          }}
          color="inherit"
          sx={{ mx: 2, display: { xs: "flex", md: "flex" } }}
        >
          {page}
        </Button>
      ))}
    </Box>
  );
};

export default NavigationMenu;
