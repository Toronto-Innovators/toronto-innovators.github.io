"use client";
import { Box, Typography, Button } from "@mui/material";

export default function Hero() {
  const handleNavClick = (id: string) => {
    const section = document.getElementById(id.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box id="Home" sx={{ position: "relative", overflow: "hidden", paddingTop: "100px" }}>
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
         
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.8)",
          }}
        >
          <source src="/ada.mp4" type="video/mp4" />
        </video>
      </Box>
      <Box
        sx={{
          position: "relative",
          zIndex: 100,
          height: "100%",
          display: "flex",
          alignItems: "center",
        
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            flexDirection: "column",
            pl: { xs: 2, md: "4rem" },
            gap: 2,
            color: "#fff",
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              maxWidth: "100%",
              mt: 1,
              fontSize: "2rem",
              fontWeight: "700",
              background: "linear-gradient(130deg, #a4f9c8, #f8ffae, #c1ffd7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textAlign: "center",
            }}
          >
            Fast - Scalable - Modern
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#ffff",
              maxWidth: "1000px",
              fontSize: "2rem",
              fontWeight: "600",
            }}
          >
           Ada Tech turns ideas into intelligent digital solutions!
          </Typography>
          <Button
            variant="contained"
            size="large"
            aria-label="Book a Free Consultation Session"
            onClick={() => handleNavClick("Contact")}
            sx={{
              backgroundColor: "#9aa092",
              color: "#111",
              "&:hover": {
                backgroundColor: "#f0f0f0",
              },
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
