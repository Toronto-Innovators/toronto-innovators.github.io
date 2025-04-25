import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#91F0C2", contrastText: "#1C1C1E" }, 
    secondary: { main: "#C0B6FF", contrastText: "#1C1C1E" },
    success: { main: "#99D9EA", contrastText: "#1C1C1E" }, 
    warning: { main: "#FFD580", contrastText: "#1C1C1E" },
    error: { main: "#F28B82", contrastText: "#1C1C1E" }, 
    info: { main: "#B2EBF2", contrastText: "#1C1C1E" }, 

    background: {
      default: "#F4F1FA",
      paper: "#FFFFFF", 
    },

    text: {
      primary: "#1C1C1E",
      secondary: "#4B4B4B", 
    },

    divider: "#E1E3E6", 
  },

  typography: {
    fontFamily: `"Inter", "Poppins", "Roboto", "Arial", sans-serif`,
    h1: { fontSize: "3rem", fontWeight: 800, letterSpacing: "-0.4px" },
    h2: { fontSize: "2.6rem", fontWeight: 700, letterSpacing: "-0.3px" },
    h3: { fontSize: "2rem", fontWeight: 600 },
    h4: { fontSize: "1.6rem", fontWeight: 600 },
    body1: { fontSize: "1rem", fontWeight: 400, lineHeight: "1.7" },
    body2: { fontSize: "0.875rem", fontWeight: 400, lineHeight: "1.6" },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "10px",
          fontWeight: "600",
          fontSize: "1rem",
          padding: "12px 26px",
          transition: "all 0.3s ease-in-out",
          boxShadow: "none",
          "&:hover": {
            filter: "brightness(1.08)",
            transform: "scale(1.03)",
          },
          "&:active": {
            transform: "scale(0.98)",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: "linear-gradient(145deg, #ECE9F7, #FFFFFF)",
          borderRadius: "20px",
          border: "1px solid #E1E3E6",
          boxShadow: "6px 6px 12px #dcdcdc, -6px -6px 12px #ffffff",
          transition: "all 0.3s ease",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "32px",
          flex: "1 1 250px",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "10px 10px 20px #d0d0d0, -10px -10px 20px #ffffff",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#1C1C1E",
        },
      },
    },
  },
});

export default theme;