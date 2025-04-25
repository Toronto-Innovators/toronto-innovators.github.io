"use client";

import { useRouter } from "next/navigation";
import { Box,Typography, Paper, Button} from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";

export default function JobCard() {
  const router = useRouter();
  const theme = useTheme();


  const jobListings = [
    { title: "Full Stack Developer", location: "Remote", type: "Contract", open: true },
    { title: "UI/UX Designer", location: "Toronto, ON", type: "Part-Time", open: false },
    { title: "Marketing Specialist", location: "Remote", type: "Contract", open: false },
    { title: "Backend Developer", location: "Hybrid (Toronto, ON)", type: "Full-Time", open: false },
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3, maxWidth: "600px", width: "100%", mb: 6 }}>
    {jobListings.map((job, index) => (
      <motion.div key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.2 }}>
        <Paper
          elevation={3}
          sx={{
            p: 2.5,
            borderRadius: "20px",
            background: "linear-gradient(145deg, #ECE9F7, #FFFFFF)",
            borderLeft: "4px solid #91F0C2",
            boxShadow: "6px 6px 12px #dcdcdc, -6px -6px 12px #ffffff",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: "10px 10px 20px #d0d0d0, -10px -10px 20px #ffffff",
            },
          }}
        >
          <Typography variant="subtitle1" fontWeight="bold">{job.title}</Typography>
          <Typography variant="caption" sx={{ color: theme.palette.text.secondary, mb: 1 }}>
            {job.location} • {job.type}
          </Typography>

          {job.open ? (
            <Button
              variant="contained"
              size="small"
              fullWidth
              onClick={() => router.push("/careers/fullstack-developer")}
              sx={{
                fontWeight: "bold",
                borderRadius: 2,
                backgroundColor: "#91F0C2",
                color: "#1C1C1E",
                mt: 2,
                "&:hover": {
                  backgroundColor: "#6ad8ae",
                },
              }}
            >
              View Details
            </Button>
          ) : (
            <Typography variant="body2" color="error" sx={{ mt: 1 }}>
            Closed
            </Typography>
          )}
        </Paper>
      </motion.div>
    ))}
  </Box>
  );
}
