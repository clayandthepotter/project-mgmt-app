import React, { useState } from 'react';
import { Box, Typography, Button, Modal, useTheme} from '@mui/material';
import { tokens } from '../../src/theme';


export default function InfoModal({ contactName, email, assignee, projectDescription }) {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 400,
		bgcolor: colors.primary[400],
		border: '',
		borderRadius: 1,
		boxShadow: 24,
		p: 4,
	};

	return (
		<div>
			<Button onClick={handleOpen} sx={{ color: '#6870fa' }}>
				More Details
			</Button>
			<Modal open={open} onClose={handleClose}>
				<Box sx={style}>
					<Typography sx={{ fontSize: '18px', fontWeight: 'bold' }}>
						Contact
					</Typography>
					<Typography
						sx={{ fontSize: '14px', color: colors.grey[200] }}
					>
						<em>Name:</em> {contactName}
					</Typography>
					<Typography
						sx={{ fontSize: '14px', color: colors.grey[200] }}
					>
						<em>Email:</em> {email}
					</Typography>
          <hr/>
					<br />
					<Typography sx={{ fontSize: '18px', fontWeight: 'bold' }}>
						Assignee
					</Typography>
					<Typography
						sx={{ fontSize: '18px', color: colors.grey[200] }}
					>
						{assignee}
					</Typography>
          <hr/>
					<br />
					<Typography sx={{ fontSize: '18px', fontWeight: 'bold' }}>
						Project Description
					</Typography>
					<Typography
						sx={{ fontSize: '14px', color: colors.grey[200], my: 1 }}
					>
						{projectDescription}
					</Typography>
				</Box>
			</Modal>
		</div>
	);
}

