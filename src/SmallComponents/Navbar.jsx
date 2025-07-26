import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { logo } from "../images"; // Adjust your path

const navItems = [
  "Home",
  "Referral",
  "About",
  "Why $CHEEMSON",
  "Roadmap",
  "How to Buy",
  "FAQ",
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#30398B", px: { xs: 0, md: 5 } }}
        elevation={0}
      >
        <Toolbar sx={{ justifyContent: "space-between", flexWrap: "wrap" }}>
          {/* Left: Logo + Text */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <img src={logo} alt="Logo" style={{ height: 40 }} />
            <Typography variant="h6" sx={{ color: "#fff", fontWeight: 600 }}>
              $CHEEMSON
            </Typography>
          </Box>

          {/* Mobile: Menu Icon */}
          {isMobile ? (
            <IconButton
              edge="end"
              color="inherit"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon sx={{ color: "#fff" }} />
            </IconButton>
          ) : (
            // Desktop: Nav Items + Buttons
            <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
              {navItems.map((item) => (
                <Typography
                  key={item}
                  variant="body1"
                  sx={{ cursor: "pointer", color: "#90CAF9" }}
                >
                  {item}
                </Typography>
              ))}
              <Button
                variant="outlined"
                sx={{ color: "#fff", borderColor: "#fff" }}
              >
                Switch Language
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#30398B",
                  color: "#90CAF9",
                  "&:hover": { backgroundColor: "#e0e0e0" },
                }}
                startIcon={<AccountBalanceWalletIcon />}
              >
                Connect Wallet
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box
          sx={{
            width: 250,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "#30398B",
            color: "#90CAF9",
            p: 2,
          }}
        >
          <Box>
            {/* Top: Close Icon + Logo + Text */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 3,
              }}
            >
              {/* Logo + Text on the LEFT */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <img src={logo} alt="Logo" style={{ height: 30 }} />
                <Typography variant="h6" sx={{ color: "#fff" }}>
                  $CHEEMSON
                </Typography>
              </Box>

              {/* Close Icon on the RIGHT */}
              <IconButton onClick={() => setDrawerOpen(false)}>
                <CloseIcon sx={{ color: "#fff" }} />
              </IconButton>
            </Box>

            {/* Nav Items */}
            <List>
              {navItems.map((text) => (
                <ListItem
                  button
                  key={text}
                  onClick={() => setDrawerOpen(false)}
                >
                  <ListItemText primary={text} sx={{ color: "#90CAF9" }} />
                </ListItem>
              ))}
            </List>
          </Box>

          {/* Bottom: Wallet Button */}
          <Box sx={{ mb: 2 }}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#fff",
                color: "#30398B",
                "&:hover": { backgroundColor: "#e0e0e0" },
              }}
              startIcon={<AccountBalanceWalletIcon />}
            >
              Connect Wallet
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
