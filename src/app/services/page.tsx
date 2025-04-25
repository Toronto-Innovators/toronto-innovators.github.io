"use client";

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
  return (
    <Box sx={{ mt: "30px", px: 3, minHeight: "100vh" }}>
      <Typography
        variant="h3"
        fontWeight="bold"
        textAlign="center"
        gutterBottom
        sx={{
          letterSpacing: 1.5,
          mb: 4,
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
            <Typography variant="subtitle2" fontWeight="bold" color="primary.main">
              {service.price}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}