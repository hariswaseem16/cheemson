import React from "react";
import { Box, Container, Typography, Link, Stack } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "black", color: "white", py: 4 }}>
      <Container maxWidth="md">
        <Typography variant="body2" align="center" gutterBottom sx={{ mb: 2 }}>
          © 2023 Michael Cheemson. All rights reserved.
        </Typography>

        <Stack
          direction="row"
          spacing={3}
          justifyContent="center"
          sx={{ mb: 2 }}
        >
          <Link href="#" underline="hover" color="inherit">
            Terms of Service
          </Link>
          <Link href="#" underline="hover" color="inherit">
            Privacy Policy
          </Link>
          <Link href="#" underline="hover" color="inherit">
            Contact Us
          </Link>
        </Stack>

        <Stack direction="row" spacing={3} justifyContent="center">
          <Link href="#" color="#90caf9" underline="hover">
            Twitter
          </Link>
          <Link href="#" color="#90caf9" underline="hover">
            Telegram
          </Link>
          <Link href="#" color="#90caf9" underline="hover">
            Discord
          </Link>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
