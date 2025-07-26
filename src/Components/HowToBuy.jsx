import React, { useState } from "react";
import { Box, Typography, Container, Card } from "@mui/material";
import { styled } from "@mui/material/styles";

// Background and overlay setup
const Background = styled(Box)({
  position: "absolute",
  inset: 0,
  backgroundImage:
    'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5.howtobuy-GoTio6X75yidMxZqD95CCYpRnvpdGN.png")',
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

// Flip card container
const FlipCard = styled(Box)(({ theme }) => ({
  height: 240,
  width: 200,
  perspective: 1000,
  position: "relative",
  cursor: "pointer",
  flexShrink: 0,
}));

// Inner flip mechanism
const FlipCardInner = styled(Box, {
  shouldForwardProp: (prop) => prop !== "flipped",
})(({ flipped }) => ({
  width: "100%",
  height: "100%",
  position: "relative",
  transformStyle: "preserve-3d",
  transition: "transform 0.6s",
  transform: flipped ? "rotateY(180deg)" : "none",
}));

// Front and back faces
const FlipCardFace = styled(Card)(({ theme }) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  backfaceVisibility: "hidden",
  borderRadius: theme.spacing(2),
  padding: theme.spacing(2),
  background:
    "linear-gradient(to bottom right, rgba(0,0,0,0.85), rgba(0,0,0,0.6))",
  color: theme.palette.common.white,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

const FlipCardBack = styled(FlipCardFace)({
  transform: "rotateY(180deg)",
  color: "#90caf9",
});

// Wrapper for cards
const StepsWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: theme.spacing(3),
  marginTop: theme.spacing(6),
  paddingBottom: theme.spacing(2),
  //   overflowX: "auto",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },

  "::-webkit-scrollbar": {
    display: "none",
  },
  scrollbarWidth: "none",
}));

const steps = [
  {
    title: "Select Network",
    description:
      "Choose your preferred network for the transaction. We support various blockchain networks for your convenience.",
  },
  {
    title: "Connect Wallet",
    description:
      "Connect your cryptocurrency wallet to our platform to proceed with the purchase.",
  },
  {
    title: "Enter Amount",
    description:
      "Specify the amount of $CHEEMSON tokens you want to purchase and confirm the transaction.",
  },
  {
    title: "Claim Tokens",
    description:
      "After the presale ends, you'll be notified when your tokens are available to claim.",
  },
];

const Roadmap = () => {
  const [flippedStates, setFlippedStates] = useState({});

  const handleFlip = (index) => {
    setFlippedStates((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <Box position="relative" overflow="hidden" py={10} minHeight="100vh">
      <Background />
      <Overlay />
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          color="white"
          gutterBottom
        >
          How to Buy $CHEEMSON
        </Typography>

        <StepsWrapper
          sx={{ display: "flex", justifyContent: "space-around", gap: 10 }}
        >
          {steps.map((step, i) => (
            <FlipCard key={i} onClick={() => handleFlip(i)}>
              <FlipCardInner flipped={!!flippedStates[i]}>
                <FlipCardFace>
                  <Typography variant="h6" gutterBottom>
                    {step.title}
                  </Typography>
                  <Typography color="#90caf9" fontSize={13}>
                    Click to flip
                  </Typography>
                </FlipCardFace>
                <FlipCardBack>
                  <Typography variant="h6" gutterBottom>
                    {step.title}
                  </Typography>
                  <Typography fontSize={13} textAlign="center">
                    {step.description}
                  </Typography>
                </FlipCardBack>
              </FlipCardInner>
            </FlipCard>
          ))}
        </StepsWrapper>
      </Container>
    </Box>
  );
};

export default Roadmap;
