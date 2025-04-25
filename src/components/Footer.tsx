"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
// import SurveyButton from "./SurveyButton";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 8,
        py: 4,
        px: 3,
        background: "linear-gradient(145deg, #ECE9F7, #FFFFFF)",
        borderTop: "1px solid #E1E3E6",
        boxShadow: "inset 0 6px 10px rgba(0,0,0,0.04)",
        color: "#1C1C1E",
      }}
    >
      <Typography variant="body2" sx={{ mb: 2, textAlign: "left" }}>
        &copy; {new Date().getFullYear()} ADA Tech. All rights reserved.
      </Typography>
      <Typography variant="body2" sx={{ mb: 2, textAlign: "left" }}>
        Looking to join our team? Check out our{" "}
        <a
          href="/careers"
          style={{
            color: "#1C1C1E",
            textDecoration: "underline",
            fontWeight: 500,
            transition: "color 0.3s",
            cursor: "pointer",
          }}
        >
          career opportunities
        </a>
        .
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          mb: 2,
        }}
      >
        <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
          <a
            href="https://www.linkedin.com/company/adatech-solutions/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#1C1C1E",
              textDecoration: "none",
              fontWeight: 500,
              transition: "color 0.3s",
              cursor: "pointer",
            }}
          >
            LinkedIn
          </a>
          <a
            href="mailto:info@adatech.ca"
            style={{
              color: "#1C1C1E",
              textDecoration: "none",
              fontWeight: 500,
              transition: "color 0.3s",
              cursor: "pointer",
            }}
          >
            Contact
          </a>
        </Box>
        {/* <SurveyButton /> */}
      </Box>
    </Box>
  );
}
