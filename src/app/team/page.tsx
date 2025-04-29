"use client";

import { Box, Typography, Avatar, Grid, Paper } from "@mui/material";

const teamMembers = [
  {
    name: "Iman Hedeshy",
    role: "Lead Software Engineer & Business Strategist",
    image: "/team/iman.jpg",
    bio: "Iman is a seasoned software engineer and strategist specializing in designing scalable digital solutions. He has led the development of platforms across fintech, education, and digital service industries, delivering impactful and innovative solutions.",
  },
  {
    name: "Sahar Abdollahi",
    role: "Software Engineer & Project Manager",
    image: "/team/sahar.jpg",
    bio: "Sahar combines technical expertise and project leadership to deliver full-stack web and mobile solutions. She holds a Master's degree in Engineering Innovation and Entrepreneurship and has successfully managed projects in healthcare, e-commerce, and professional services sectors.",
  },
];

export default function Team() {
  return (
    <Box
      id="team"
      sx={{
        py: 8,
        backgroundColor: "#fafafa",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Meet Our Team
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{ maxWidth: "600px", mx: "auto", mb: 3 }}
      >
        A powerful blend of tech, strategy, and creativity—driven by passion, purpose, and people.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: 4,
                textAlign: "center",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                },
              }}
            >
              <Avatar
                src={member.image}
                alt={member.name}
                sx={{ width: 100, height: 100, mb: 2, mx: "auto" }}
              />
              <Typography variant="h6" fontWeight="bold">
                {member.name}
              </Typography>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                {member.role}
              </Typography>
              <Typography variant="body2">{member.bio}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
