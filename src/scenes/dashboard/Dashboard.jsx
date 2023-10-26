import React, { useState, useEffect } from 'react';
import {
	Box,
	Card,
	Typography,
	useTheme,
	CardContent,
	CardActions,
	Button,
} from '@mui/material';
import { tokens } from '../../theme';
import Header from '../../components/Header';

const Dashboard = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	const [projectData, setProjectData] = useState([]);

	useEffect(() => {
		// fetch data from server
		fetch('http://localhost:3001/projects')
			// convert data to readable json
			.then((data) => data.json())
			// set data to projectData state
			.then((data) => setProjectData(data));
	}, []);

	// const card = (
	//   <>
	//     <CardContent>
	//       <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
	//         {projectName}
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
			<Box
				display='grid'
				gap='10px'
				gridTemplateColumns='repeat(3, minmax(0, 1fr))'
			>
				{projectData.map((projects) => (
					<Card
						key={projects.id}
						sx={{
							backgroundColor: colors.primary[400],
							maxWidth: '150px',
							gridColumn: 'span 1',
						}}
					>
						<CardContent>
							<Typography
								sx={{ fontSize: 14 }}
								color='text.secondary'
								gutterBottom
							>
								{projects.projectName}
							</Typography>
							<Typography variant='h5' component='div'>
								{projects.projectValue}
							</Typography>
							{/* <Typography sx={{ mb: 1.5 }} color='text.secondary'>
								{projects.projectPriority}
							</Typography> */}
							<Typography variant='body2'>
								{projects.projectPriority}
							</Typography>
						</CardContent>
						<CardActions>
							<Button size='small'>Learn More</Button>
						</CardActions>
					</Card>
				))}
			</Box>
		</Box>
	);
};

export default Dashboard;
