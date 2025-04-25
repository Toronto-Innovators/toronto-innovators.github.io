"use client";

import React from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 8,
        py: 4,
        px: 3,
        background: "linear-gradient(180deg, #f9fafb, #e5e7eb)",
        color: "text.primary",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "inset 0 6px 10px rgba(0,0,0,0.2)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 2,
          mb: 3,
        }}
      >
        <Typography variant="body2" sx={{ fontWeight: 500, color: "text.primary" }}>
          &copy; {new Date().getFullYear()} ADA Tech. Designed & Developed by sahara.com
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <IconButton
            component="a"
            href="https://www.linkedin.com/company/adatech-solutions/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "text.primary",
              transition: "color 0.3s",
              "&:hover": { color: "primary.main" },
            }}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            component="a"
            href="mailto:info@adatech.ca"
            sx={{
              color: "text.primary",
              transition: "color 0.3s",
              "&:hover": { color: "primary.main" },
            }}
          >
            <EmailIcon />
          </IconButton>
        </Box>
      </Box>

      <Typography
        variant="body2"
        textAlign="center"
        sx={{ fontSize: "0.9rem", mt: 3, color: "text.primary" }}
      >
        Interested in joining our mission?{" "}
        <Link
          href="/careers"
          underline="hover"
          sx={{
            color: "primary.dark",
            fontWeight: 600,
            "&:hover": { color: "primary.dark" },
          }}
        >
          Explore Careers
        </Link>
      </Typography>
    </Box>
  );
}
