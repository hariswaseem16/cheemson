import React from "react";
import { Box } from "@mui/material";
import { bgimg, dog } from "../images";
import Card from "../SmallComponents/Card";

const Home = () => {
  return (
    <Box
      sx={{
        minHeight: { xs: "auto", md: "100vh" }, // dynamic height on small screens
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        pr: { xs: 2, md: 8 },
        pt: { xs: 8, md: 0 }, // padding top on mobile to avoid clipping
        pb: { xs: 12, md: 0 }, // padding bottom for dog image space
        flexDirection: { xs: "column", md: "row" }, // stack on mobile
        textAlign: { xs: "center", md: "left" },
      }}
    >
      {/* Card on the right */}
      <Card />

      {/* Bottom Center Image */}
      <Box
        component="img"
        src={dog}
        alt="Bottom Decoration"
        sx={{
          position: "absolute",
          bottom: 1,
          left: "50%",
          transform: "translateX(-50%) scaleX(-1)",
          width: { xs: "120px", md: "220px" },
        }}
      />
    </Box>
  );
};

export default Home;
