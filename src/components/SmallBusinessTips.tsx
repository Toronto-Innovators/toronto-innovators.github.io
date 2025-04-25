"use client";

import { Box, Typography, Container, Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function SmallBusinessTips() {
  const router = useRouter();

  return (
    <>
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Box
          sx={{
            background: "linear-gradient(145deg, #ECE9F7, #FFFFFF)",
            borderRadius: 3,
            px: { xs: 2, md: 4 },
            py: 6,
            textAlign: "center",
            boxShadow: "6px 6px 12px #dcdcdc, -6px -6px 12px #ffffff",
          }}
        >
         
          <Typography
            variant="subtitle1"
            sx={{
              color: "text.secondary",
              maxWidth: "700px",
              mx: "auto",
              mb: 5,
              fontSize: { xs: "1rem", md: "1.1rem" },
            }}
          >
            We specialize in building tailored websites and apps designed for scalability, brand uniqueness, and long-term growth—giving small businesses and startups a real edge in the digital world.
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center", gap: 3, flexWrap: "wrap" }}>
            <Button variant="contained" color="primary" size="large" onClick={() => router.push("/services")}>
              Explore Custom Websites
            </Button>
            <Button variant="contained" color="primary" size="large" onClick={() => router.push("/services")}>
              Explore Pre-Built Options
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}
