import React from "react"
import { Box, Card, Typography, useTheme, CardContent, CardActions, Button } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // const card = (
  //   <>
  //     <CardContent>
  //       <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
  //         {}Project Name
  //       </Typography>
  //       <Typography variant="h5" component="div">
  //         Heading
  //       </Typography>
  //       <Typography sx={{ mb: 1.5 }} color="text.secondary">
  //         Subheading
  //       </Typography>
  //       <Typography variant="body2">
  //         Content
  //       </Typography>
  //     </CardContent>
  //     <CardActions>
  //       <Button size="small">Learn More</Button>
  //     </CardActions>
  //   </>
  // );

  return (
		<Box m='20px'>
			<h1>Will's page</h1>
		</Box>
	);
};

export default Dashboard;