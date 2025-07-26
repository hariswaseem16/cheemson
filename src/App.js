import { Box } from "@mui/material";
import React from "react";
import Navbar from "./SmallComponents/Navbar";
import Home from "./Components/Home";
import Story from "./Components/Story";
import CheemsonSection from "./Components/CheemsonSection";
import Roadmap from "./Components/Roadmap";
import HowToBuy from "./Components/HowToBuy";
import Faq from "./Components/Faq";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <Box>
      <Navbar />
      <Home />
      <Story />
      <CheemsonSection />
      <Roadmap />
      <HowToBuy />
      <Faq />
      <Footer />
    </Box>
  );
};

export default App;
