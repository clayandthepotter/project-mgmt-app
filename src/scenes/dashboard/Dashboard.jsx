import React, { useState, useEffect } from 'react';
import { Box,	Card,	Typography,	useTheme,	CardContent, CardActions } from '@mui/material';
import { tokens } from '../../theme';
import Header from '../../components/Header';
import InfoModal from '../../components/InfoModal';

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

	return (
		<Box m='20px'>
			<Header
				title='PROJECT DASHBOARD'
				subtitle='Your projects at a glance'
			/>
			<Box display='flex' gap='10px'>
				{projectData.map((projects) => (
					<Card
						key={projects.id}
						sx={{
							backgroundColor: colors.primary[400],
							minWidth: '200px',
							gridColumn: 'auto',
						}}
					>
						<CardContent sx={{ alignContent: 'space-between' }}>
							<Typography
								sx={{ fontSize: 20 }}
								color='text.primary'
								gutterBottom
							>
								{projects.projectName}
							</Typography>
							<Typography
								component='div'
								color='text.secondary'
								// sx={{ color: colors.grey[100] }}
							>
								<em>Project Value</em>
							</Typography>
							<Typography
								variant='h6'
								component='div'
								sx={{ color: colors.greenAccent[400] }}
							>
								{projects.projectValue}
							</Typography>
							<Typography
								sx={{ mt: 1, fontSize: '12px' }}
								color='text.secondary'
							>
								<em>Project Priority</em>
							</Typography>
							<Typography variant='body2'>
								{projects.projectPriority}
							</Typography>
						</CardContent>

						<CardActions sx={{}}>
							<InfoModal
								size='small'
								contactName={projects.contactName}
								email={projects.email}
								assignee={projects.assignee}
								projectDescription={projects.projectDescription}
							/>
						</CardActions>
					</Card>
				))}
			</Box>
		</Box>
	);
};

export default Dashboard;
