import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  TextField,
  Tabs,
  Tab,
  Avatar,
  LinearProgress,
  IconButton,
} from "@mui/material";
import WalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import InfoIcon from "@mui/icons-material/Info";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";

const Card = () => {
  const [tab, setTab] = React.useState(0);
  const [timeLeft, setTimeLeft] = useState(93600);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const getTimeComponents = (seconds) => {
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return { days, hours, minutes, seconds: secs };
  };

  const { days, hours, minutes, seconds } = getTimeComponents(timeLeft);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 1,
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          backdropFilter: "blur(10px)",
          borderRadius: 2,
          p: 2,
          width: 280,
          boxShadow: 2,
        }}
      >
        <Box display="flex" justifyContent="center" mb={1}>
          <Avatar
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0.symbol-vPpAFzm81Y1eWjxrX1oIYmKG38S8cY.png"
            alt="Logo"
            sx={{ width: 36, height: 36 }}
          />
        </Box>

        <Typography
          variant="subtitle1"
          textAlign="center"
          color="white"
          fontWeight={600}
          mb={1}
        >
          Buy $CHEEMSON Tokens
        </Typography>

        <Box
          sx={{
            backgroundColor: "rgba(255,255,255,0.1)",
            p: 1,
            borderRadius: 1,
            mb: 1.5,
          }}
        >
          <Box display="flex" justifyContent="space-between" mb={0.5}>
            <Typography color="white" fontSize={12}>
              Current Round
            </Typography>
            <Typography fontWeight={600} color="white" fontSize={12}>
              1
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography color="white" fontSize={12}>
              Token Price
            </Typography>
            <Typography fontWeight={600} color="white" fontSize={12}>
              $0.00055
            </Typography>
          </Box>
        </Box>

        <Grid container spacing={1} mb={1.5} justifyContent="space-around">
          {[days, hours, minutes, seconds].map((val, idx) => (
            <Grid item xs={3} key={idx}>
              <Box
                sx={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  borderRadius: 1,
                  textAlign: "center",
                  py: 0.5,
                }}
              >
                <Typography fontSize={14} color="white" fontWeight={700}>
                  {val.toString().padStart(2, "0")}
                </Typography>
                <Typography
                  variant="caption"
                  color="white"
                  sx={{ opacity: 0.8, fontSize: 10, px: 2 }}
                >
                  {["days", "hours", "minutes", "seconds"][idx]}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box mb={1} textAlign="center">
          <Typography color="white" fontSize={12} mb={0.5}>
            Total Raised : $0 / 1000000
          </Typography>
          <LinearProgress
            variant="determinate"
            value={0}
            sx={{
              backgroundColor: "rgba(255,255,255,0.1)",
              height: 6,
              borderRadius: 4,
            }}
          />
          <Typography
            color="white"
            fontSize={11}
            mt={0.5}
            sx={{ opacity: 0.8 }}
          >
            Price Increase
          </Typography>
        </Box>

        <Typography textAlign="center" color="white" fontSize={12} mb={1}>
          Your ETH Balance:
        </Typography>

        <Box
          sx={{
            backgroundColor: "rgba(255,255,255,0.1)",
            borderRadius: 1,
            mb: 1.5,
          }}
        >
          <Tabs
            value={tab}
            onChange={(e, val) => setTab(val)}
            variant="fullWidth"
            sx={{ width: "100%" }}
            TabIndicatorProps={{ style: { backgroundColor: "#fff" } }}
          >
            <Tab label="ETH" sx={{ color: "white", fontSize: 12 }} />
            <Tab label="USDT" sx={{ color: "white", fontSize: 12 }} />
            <Tab label="Card" sx={{ color: "white", fontSize: 12 }} />
          </Tabs>
        </Box>

        <Box mb={1.5}>
          <Typography color="white" fontSize={12} mb={0.5}>
            Referral Code (optional)
          </Typography>
          <Box display="flex" gap={1}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="AAAA1"
              inputProps={{ maxLength: 5 }}
              sx={{
                backgroundColor: "rgba(255,255,255,0.1)",
                input: { color: "white", fontSize: 12 },
                borderRadius: 1,
              }}
            />
            <IconButton sx={{ p: 0.5 }}>
              <ContentPasteIcon sx={{ color: "white", fontSize: 16 }} />
            </IconButton>
          </Box>
        </Box>

        <Box display="flex" gap={1.5} mb={2}>
          <TextField
            fullWidth
            type="number"
            placeholder="ETH"
            sx={{
              backgroundColor: "rgba(255,255,255,0.1)",
              input: { color: "white", fontSize: 12 },
              borderRadius: 1,
            }}
          />
          <TextField
            fullWidth
            placeholder="$CHEEMSON"
            sx={{
              backgroundColor: "rgba(255,255,255,0.1)",
              input: { color: "white", fontSize: 12 },
              borderRadius: 1,
            }}
          />
        </Box>

        <Grid container spacing={1} mb={1.5}>
          <Grid item xs={6}>
            <Button
              fullWidth
              variant="contained"
              startIcon={<WalletIcon sx={{ fontSize: 16 }} />}
              sx={{
                backgroundColor: "#3949ab",
                color: "white",
                fontSize: 12,
                ":hover": { backgroundColor: "#1a237e" },
              }}
            >
              Connect
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              fullWidth
              variant="contained"
              startIcon={<CreditCardIcon sx={{ fontSize: 16 }} />}
              sx={{
                backgroundColor: "#3949ab",
                color: "white",
                fontSize: 12,
                ":hover": { backgroundColor: "#1a237e" },
              }}
            >
              Buy Card
            </Button>
          </Grid>
        </Grid>

        <Box mt={1} textAlign="start">
          <Button
            variant="text"
            sx={{ color: "white", fontSize: 12, minWidth: 0 }}
            startIcon={<InfoIcon sx={{ fontSize: 16 }} />}
          >
            Referral Bonus
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
