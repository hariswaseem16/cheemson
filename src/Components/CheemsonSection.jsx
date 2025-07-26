import React from "react";
import { Box, Typography, Container, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import CoinsIcon from "@mui/icons-material/MonetizationOnOutlined";
import FavoriteIcon from "@mui/icons-material/FavoriteBorderOutlined";
import GroupIcon from "@mui/icons-material/GroupOutlined";

const Background = styled(Box)({
  position: "absolute",
  inset: 0,
  backgroundImage:
    'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.heal%20the%20world%20with%20cheemson.jpg-5gRzPawccGZlBsxGKrxWnBVTaZVY4S.jpeg")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  zIndex: 0,
});

const Overlay = styled(Box)({
  position: "absolute",
  inset: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  backdropFilter: "blur(4px)",
  zIndex: 1,
});

const ContentBox = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 2,
  padding: theme.spacing(10, 2),
  minHeight: "100vh",
}));

const InfoCard = ({ icon, title, description }) => (
  <Paper
    elevation={6}
    sx={{
      p: 3,
      backgroundColor: "rgba(0,0,0,0.5)",
      backdropFilter: "blur(8px)",
      borderRadius: 3,
      border: "1px solid rgba(255,255,255,0.1)",
      color: "#90caf9",
      flex: "1 1 300px",
      m: 2,
    }}
  >
    <Box display="flex" alignItems="center" mb={2}>
      {icon}
      <Typography variant="h6" sx={{ color: "#fff", ml: 2 }}>
        {title}
      </Typography>
    </Box>
    <Typography>{description}</Typography>
  </Paper>
);

export default function CheemsonSection() {
  return (
    <Box position="relative" overflow="hidden">
      <Background />
      <Overlay />
      <ContentBox>
        <Container maxWidth="md">
          {/* Intro box */}
          <Box
            sx={{
              backgroundColor: "rgba(0,0,0,0.7)",
              backdropFilter: "blur(8px)",
              p: 4,
              borderRadius: 3,
              mb: 8,
            }}
          >
            <Typography
              variant="h4"
              fontWeight="bold"
              color="white"
              gutterBottom
            >
              Heal the World with Cheemson
            </Typography>
            <Box sx={{ color: "#90caf9" }}>
              <Typography variant="body2" color="gray">
                The Michael Cheemson ICO donates 10% of project funds to support
                vitiligo patients and research.
              </Typography>
              <Typography variant="body2" color="gray" mt={2}>
                This project aims to go beyond simple investment to fulfill
                social responsibility and create meaningful change. Your
                participation becomes a seed of hope, bringing real improvement
                to the lives of those in need.
              </Typography>
              <Typography
                variant="body2"
                color="gray"
                mt={2}
                fontStyle="italic"
              >
                Join the journey to heal the world with $CHEEMSON today.
                Together, we can create a better world.
              </Typography>
            </Box>
          </Box>

          {/* Heading */}
          <Typography
            variant="h3"
            fontWeight="bold"
            color="white"
            align="center"
            gutterBottom
          >
            Heal the World with Cheemson
          </Typography>
          <Typography variant="body2" color="gray" align="center" mb={6}>
            Heal the World with Cheemson
          </Typography>

          {/* Cards Container using Flexbox */}
          <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            alignItems="stretch"
          >
            <InfoCard
              icon={<CoinsIcon sx={{ fontSize: 32, color: "#90caf9" }} />}
              title="Creating Social Value with Every Token"
              description="The Michael Cheemson ICO donates 10% of project funds to support vitiligo patients and research."
            />
            <InfoCard
              icon={<FavoriteIcon sx={{ fontSize: 32, color: "#90caf9" }} />}
              title="Philosophy Beyond Memes"
              description="This project aims to go beyond simple investment to fulfill social responsibility and create meaningful change. Your participation becomes a seed of hope, bringing real improvement to the lives of those in need."
            />
            <InfoCard
              icon={<GroupIcon sx={{ fontSize: 32, color: "#90caf9" }} />}
              title="More Earnings Through Referrals"
              description="Join the journey to heal the world with $CHEEMSON today. Together, we can create a better world."
            />
          </Box>
        </Container>
      </ContentBox>
    </Box>
  );
}
