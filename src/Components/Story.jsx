import { Box, Container, Typography, Paper } from "@mui/material";

export default function Story() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        backgroundImage:
          'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.the%20story%20of%20michael%20cheemson.jpg-zh5DtQx6rT7YuU0651MTumcBlClec4.jpeg")',
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Dark overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      />

      {/* Main Content */}
      <Container sx={{ position: "relative", zIndex: 10 }}>
        <Paper
          elevation={3}
          sx={{
            maxWidth: "800px",
            marginX: "auto",
            marginTop: { xs: 12, md: 32 },
            marginBottom: 8,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            backdropFilter: "blur(4px)",
            padding: 4,
            borderRadius: 3,
            transform: "rotate(-1deg)",
          }}
        >
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{
              color: "#fff",
              fontFamily: "'Playfair Display', serif",
              fontWeight: "bold",
              mb: 3,
            }}
          >
            The Story of Michael Cheemson
            <Typography variant="body2" sx={{ color: "#ccc", mt: 1 }}>
              The Story of Michael Cheemson
            </Typography>
          </Typography>

          <Box sx={{ color: "#90caf9" }}>
            <Typography
              variant="body2"
              sx={{ fontSize: "0.8rem", color: "gray", mb: 2 }}
            >
              Cheems has long admired Michael Jackson's music, dance, and his
              message of healing the world. Inspired by Michael Jackson's battle
              with vitiligo, Cheems realized that his own fur, with its
              vitiligo-like yellow patches, was not just an appearance but a
              symbol of diversity and difference that makes the world special.
            </Typography>

            <Typography
              variant="body2"
              sx={{ fontSize: "0.8rem", color: "gray", mb: 2 }}
            >
              Inspired by Michael Jackson's philosophy, Cheems transformed into
              Michael Cheemson. Now, he has a mission to give hope to vitiligo
              patients and marginalized individuals, spreading the message of
              'Discovering the Beauty in Diversity'.
            </Typography>

            <Typography
              variant="body2"
              sx={{ fontSize: "0.8rem", color: "gray", fontWeight: "bold" }}
            >
              Michael Cheemson is a symbol of hope and healing.
            </Typography>
          </Box>
        </Paper>

        {/* Character Images */}
        <Box
          sx={{
            position: "relative",
            maxWidth: "1200px",
            height: "400px",
            marginX: "auto",
            mb: 10,
          }}
        >
          {/* MJ Silhouette */}
          <Box
            component="img"
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TheStory_black-7a019EPky4AfAIF0m0bCRtPJNf9W5a.gif"
            alt="Michael Jackson Silhouette"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 150,
              height: 300,
              objectFit: "contain",
            }}
          />

          {/* Cheemson Character */}
          <Box
            component="img"
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1p-dcm7j19EWnizAzzIO3FOMlHer3CwLr.png"
            alt="Michael Cheemson Character"
            sx={{
              position: "absolute",
              right: "20%",
              bottom: 0,
              width: 200,
              height: 200,
              objectFit: "contain",
              cursor: "pointer",
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
