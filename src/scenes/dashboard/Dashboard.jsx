import React, { useState, useEffect } from "react"
import { Box, Card, Typography, useTheme, CardContent, CardActions, Button } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
	fetch('http://localhost:3001/projects')
		.then((data) => data.json())
		.then((data) => setProjectData(data));
  }, []);

  // const card = (
  //   <>
  //     <CardContent>
  //       <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
  //         {}
  //       </Typography>
  //       <Typography variant="h5" component="div">
  //         {}
  //       </Typography>
  //       <Typography sx={{ mb: 1.5 }} color="text.secondary">
  //         {}
  //       </Typography>
  //       <Typography variant="body2">
  //         {}
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