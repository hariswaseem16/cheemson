import React from "react";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  {
    question: "What is the Michael Cheemson presale?",
  },
  {
    question: "How does the referral program work?",
  },
  {
    question: "Where can I check my purchased tokens?",
  },
  {
    question: "When will the exchange listing take place?",
  },
  {
    question: "How can I receive the latest updates?",
  },
];

const Faq = () => {
  return (
    <Box
      component="section"
      sx={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        py: 10,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.frequently%20asked%20questions.jpg-X4Kq6ZfWCyW0YOO1DzNEkJ18mXwQ5U.jpeg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(4px)",
          zIndex: 1,
        }}
      />

      <Container sx={{ position: "relative", zIndex: 2 }}>
        <Typography
          variant="h3"
          align="center"
          color="white"
          fontWeight="bold"
          mb={6}
        >
          Frequently Asked Questions
        </Typography>

        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 16,
            transform: "translateY(-50%)",
            zIndex: 2,
            mt: 10,
          }}
        >
          <Box
            component="img"
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.Frequesntly%20asked%20questions-gDjtZzSHif7TtFvV5FUBwqlFjWGW4F.png"
            alt="Michael Cheemson FAQ Character"
            width={200}
            height={200}
            sx={{ transform: "rotate(12deg)" }}
          />
        </Box>

        <Box sx={{ maxWidth: 700, mx: "auto", mt: 6 }}>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              sx={{
                backgroundColor: "rgba(0,0,0,0.7)",
                backdropFilter: "blur(6px)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "white",
                mb: 2,
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              >
                <Typography fontWeight="500">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="gray">Answer coming soon...</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Faq;
