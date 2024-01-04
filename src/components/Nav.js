import React, { useState } from "react";
import {
  Button,
  IconButton,
  useMediaQuery,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
// import { Link } from "react-router-dom";

function NavButton({ href, children, size, ...props }) {
  return (
    <Button component="a" href={href} sx={{ mx: 1 }} size={size} {...props}>
      <Typography variant={"h6"}>{children}</Typography>
    </Button>
  );
}

const navLinks = [
  { href: "/", text: "HOME" },
  { href: "/about", text: "ABOUT" },
  { href: "/menu", text: "MENU" },
  { href: "/bookings", text: "RESERVATION" },
  { href: "/order", text: "ORDER ONLINE" },
  { href: "/login", text: "LOGIN" },
  // Add more links as needed
];

function Nav() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <nav>
      {isMobile ? (
        <>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleDrawerToggle}
            aria-label="Open navigation menu"
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={handleDrawerToggle}
            aria-label="Navigation menu"
          >
            <List>
              {navLinks.map((link, index) => (
                <ListItemButton
                  component="a"
                  href={link.href}
                  key={index}
                  aria-label={"link to " + link.text}
                >
                  <ListItemText primary={link.text} />
                </ListItemButton>
              ))}
            </List>
          </Drawer>
        </>
      ) : (
        navLinks.map((link, index) => (
          <NavButton
            href={link.href}
            color="inherit"
            key={index}
            aria-label={"link to" + link.text}
          >
            {link.text}
          </NavButton>
        ))
      )}
    </nav>
  );
}

export default Nav;
