"use client";

import { useState } from "react";
import { Box, Typography, Paper } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import BrushIcon from "@mui/icons-material/Brush";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import InstagramIcon from "@mui/icons-material/Instagram";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const services = [
  {
    icon: <LanguageIcon fontSize="large" />,
    title: "Starter Website Package",
    description: "Responsive 1–5 page website with contact form and basic SEO.",
    price: "$799+",
  },
  {
    icon: <BrushIcon fontSize="large" />,
    title: "Business Branding Kit",
    description: "Custom logo, brand colors, fonts, and social media templates.",
    price: "$499",
  },
  {
    icon: <TrendingUpIcon fontSize="large" />,
    title: "Google & SEO Essentials",
    description: "Boost your online visibility with SEO and Google Business setup.",
    price: "$399",
  },
  {
    icon: <InstagramIcon fontSize="large" />,
    title: "Social Media Setup",
    description: "Set up Instagram, WhatsApp Business, and LinkedIn professionally.",
    price: "$299",
  },
  {
    icon: <SupportAgentIcon fontSize="large" />,
    title: "Monthly Maintenance Plan",
    description: "Ongoing website edits, updates, and tech support every month.",
    price: "$99/month",
  },
];

export default function ServicesPage() {
  const [showCustom, setShowCustom] = useState(true);

  return (
    <Box sx={{ mt: "30px", px: 3, minHeight: "100vh" }}>
      <Typography variant="h4" fontWeight="bold" textAlign="center" sx={{ mb: 2 }}>
        Which Website Path Works Best for You?
      </Typography>
      <Typography variant="body1" textAlign="center" sx={{ mb: 4, maxWidth: 800, mx: "auto" }}>
        Whether you're looking for a completely custom-built solution tailored to your brand and scalability goals, or a faster pre-built setup for launching quickly—we’ve got options for both. Compare below:
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", gap: 5, flexWrap: "wrap", mb: 5 }}>
        <Paper
          onClick={() => setShowCustom(true)}
          sx={{
            px: { xs: 2, md: 4 },
            py: { xs: 1, md: 2 },
            minWidth: { xs: 140, md: 200 },
            textAlign: "center",
            cursor: "pointer",
            backgroundColor: showCustom ? "primary.main" : "grey.800",
            color: showCustom ? "text.secondary" : "text.secondary",
            borderRadius: "12px",
            fontWeight: "bold",
            border: showCustom ? "2px solid #00d4a7" : "1px solid #555",
            boxShadow: showCustom ? "0 4px 20px rgba(0, 128, 96, 0.5)" : "none",
            transform: showCustom ? "scale(1.08)" : "scale(1)",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "primary.dark",
              color: "#fff",
            },
          }}
        >
          Custom Websites
        </Paper>
        <Paper
          onClick={() => setShowCustom(false)}
          sx={{
            px: { xs: 2, md: 4 },
            py: { xs: 1, md: 2 },
            minWidth: { xs: 140, md: 200 },
            textAlign: "center",
            cursor: "pointer",
            backgroundColor: !showCustom ? "secondary.main" : "grey.800",
            color: !showCustom ? "text.secondary" : "text.secondary",
            borderRadius: "12px",
            fontWeight: "bold",
            border: !showCustom ? "2px solid #00d4a7" : "1px solid #555",
            boxShadow: !showCustom ? "0 4px 20px rgba(0, 128, 96, 0.5)" : "none",
            transform: !showCustom ? "scale(1.08)" : "scale(1)",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "secondary.dark",
              color: "#fff",
            },
          }}
        >
          Pre-Built Website Options
        </Paper>
      </Box>

      {showCustom && (
        <Box>
          <Typography
            variant="h3"
            fontWeight="bold"
            textAlign="center"
            gutterBottom
            sx={{
              letterSpacing: 1.5,

            }}
          >
            Services
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 3,
            }}
          >
            {services.map((service, index) => (
              <Paper
                key={index}
                elevation={3}
                sx={{
                  p: 4,
                  maxWidth: 300,
                  minHeight: 320,
                  flex: "1 1 250px",
                  background: "linear-gradient(145deg, #ECE9F7, #FFFFFF)",
                  borderRadius: "20px",
                  border: "1px solid #E1E3E6",
                  boxShadow: "6px 6px 12px #dcdcdc, -6px -6px 12px #ffffff",
                  transition: "all 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "10px 10px 20px #d0d0d0, -10px -10px 20px #ffffff",
                  },
                }}
              >
                <Box sx={{ mb: 1 }}>{service.icon}</Box>
                <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.primary" sx={{ mb: 1 }}>
                  {service.description}
                </Typography>
                <Typography
                  variant="subtitle2"
                  fontWeight="bold"
                  sx={{ color: "success.main", mt: 1 }}
                >
                  {service.price}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Box>
      )}

      {!showCustom && (
        <Box sx={{ mt: 8, px: 3 }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            gutterBottom
            sx={{ letterSpacing: 1.2, mb: 3 }}
          >
            Pre-Built Website Plan Options
          </Typography>
          <Typography variant="body1" textAlign="center" sx={{ mb: 4, maxWidth: 720, mx: "auto" }}>
            For clients needing a faster launch or smaller budget, we also offer pre-built website setup using user-friendly platforms. The following is a general estimate of costs involved—some go directly to the platform (hosting & tools), while others are for our setup and configuration services.
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 3,
            }}
          >
            {[
              {
                label: "Initial Setup & Design (ADA Tech)",
                cost: "$250 – $600",
                color: "#D1FADF",
              },
              {
                label: "Monthly Platform Fee (Paid to Provider)",
                cost: "$15 – $60/month",
                color: "#E0E7FF",
              },
              {
                label: "Add-ons & Plugins (Paid to Provider)",
                cost: "$10 – $40/month",
                color: "#FFEFD5",
              },
            ].map((item, index) => (
              <Paper
                key={index}
                elevation={2}
                sx={{
                  p: 3,
                  maxWidth: 280,
                  borderRadius: "16px",
                  backgroundColor: item.color,
                  border: "1px solid #ccc",
                  boxShadow: "2px 2px 10px rgba(0,0,0,0.08)",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                  },
                }}
              >
                <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
                  {item.label}
                </Typography>
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  sx={{ color: "success.main", mt: 1 }}
                >
                  {item.cost}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
}