import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";

const Roadmap = () => {
  return (
    <Box
      component="section"
      sx={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.roadmap-LhkJ2gUWNIFpMzIjmYTkVFwCFyU55j.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      />

      {/* Content */}
      <Container
        sx={{
          position: "relative",
          zIndex: 10,
          py: { xs: 10, md: 20 },
          px: 2,
        }}
      >
        {/* Heading */}
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2rem", md: "2.5rem" },
            fontFamily: "'Playfair Display', serif",
            fontWeight: "bold",
            color: "#fff",
            textAlign: "center",
            mb: 6,
          }}
        >
          ICO Roadmap
          <Typography
            component="span"
            variant="body2"
            sx={{
              display: "block",
              mt: 1,
              color: "gray",
              fontSize: "0.875rem",
            }}
          >
            ICO Roadmap
          </Typography>
        </Typography>

        {/* Roadmap Animation */}
        <Box display="flex" justifyContent="center" mb={8}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: "768px",
              height: "300px",
            }}
          >
            <Box
              component="img"
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RoadMap_black-2blnSQQpUnT3GUrK32HjM0Lhi0BZjB.gif"
              alt="Roadmap Animation"
              sx={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Box>
        </Box>

        {/* Phases with connecting blur dots */}
        <Box sx={{ position: "relative" }}>
          {/* Blur Dots */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: 0,
              right: 0,
              transform: "translateY(-50%)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: 1,
            }}
          >
            {[...Array(4)].map((_, i) => (
              <Box
                key={i}
                sx={{
                  width: 32,
                  height: 32,
                  backgroundColor: "#90caf9",
                  opacity: 0.5,
                  borderRadius: "50%",
                  filter: "blur(6px)",
                }}
              />
            ))}
          </Box>

          {/* Phase Buttons */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              position: "relative",
              zIndex: 1,
              px: 1,
            }}
          >
            {[
              {
                img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Phase%201-Qwt06sv51u0HQSiRyCwAPuVYkcnqF1.png",
                alt: "Phase 1: Project Launch",
              },
              {
                img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Phase%202-igawCMY6dSIls7czXa15PUIxzXXeSo.png",
                alt: "Phase 2: Exchange Listing",
              },
              {
                img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Phase%203-wFKZ3CGScaP6EQp0OG00A38p6uXroz.png",
                alt: "Phase 3: Donation Execution",
              },
              {
                img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Phase%204-uXjex78gTRfeQdqgIH12YJEsO5O4Lv.png",
                alt: "Phase 4: Global Awareness Expansion",
              },
            ].map((phase, i) => (
              <Box
                key={i}
                sx={{
                  position: "relative",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
              >
                <Button sx={{ p: 0, minWidth: 0 }}>
                  <Box
                    component="img"
                    src={phase.img}
                    alt={phase.alt}
                    sx={{ width: 80, height: 80 }}
                  />
                </Button>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Roadmap;
