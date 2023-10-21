import React from "react"
import { Box, Card, Typography, useTheme, CardContent, CardActions, Button } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const card = (
    <>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {}
        </Typography>
        <Typography variant="h5" component="div">
          benevolent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </>
  );


  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridAutoColumns="repeat(16, 1fr)"
        gap="40px"
      >
        <Box
        gridColumn="span 12"
        backgroundColor={colors.primary[400]}
        padding='30px'
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "20px 0 0 30px" }}
          >
            Projects
          </Typography>
          <Box
            display='grid'
            gridTemplateColumns="repeat(16, 1fr)"
            gap="15px">
              <Box
                gridColumn='span 4'
                className="@media(min-width: 50em)"
                >
                  <Card variant="outlined">{card}</Card>
              </Box>
              <Box
                gridColumn='span 4'
                className="@media(min-width: 50em)"
                >
                  <Card variant="outlined">{card}</Card>
              </Box>
              <Box
                gridColumn='span 4'
                className="@media(min-width: 50em)"
                >
                  <Card variant="outlined">{card}</Card>
              </Box>
              <Box
                gridColumn='span 4'
                className="@media(min-width: 50em)"
                >
                  <Card variant="outlined">{card}</Card>
              </Box>
              <Box
                gridColumn='span 4'
                className="@media(min-width: 50em)"
                >
                  <Card variant="outlined">{card}</Card>
              </Box>
          </Box>
          
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;