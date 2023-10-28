import React from 'react';
import { Box, Button, TextField } from '@mui/material';
import { Formik } from 'formik';
import Header from '../../components/Header';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const ProjectForm = ({ formik, id, setId }) => {


	console.log(id);

	
	return (
		<Box mx='20px'>
			<Header title='PROJECT FORM' subtitle='Create a New Project' />

			<Formik>
				<form onSubmit={formik.handleSubmit}>
					<Box
						display='grid'
						gap='25px'
						gridTemplateColumns='repeat(4, minmax(0, 1fr))'
					>
						<TextField
							fullWidth
							required
							sx={{ gridColumn: 'span 2' }}
							variant='filled'
							type='text'
							label={'Project Name'}
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
							value={formik.values.projectName}
							name='projectName'
							error={
								!!formik.touched.projectName &&
								!!formik.errors.projectName
							}
						/>

						<TextField
							fullWidth
							disabled
							required
							sx={{ gridColumn: 'span 1' }}
							variant='filled'
							type='text'
							label='ID'
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
							value={formik.values.id}
							name='id'
							// error={!!formik.touched.id && !!formik.errors.id}
						/>
						<Button
							color='neutral'
							variant='contained'
							sx={{ gridColumn: 'span 1' }}
							onClick={() =>
								setId(
									(formik.values.id =
										Math.floor(Math.random() * 9000) + 1000)
								)
							}
						>
							Generate Id
						</Button>
						<TextField
							required
							fullWidth
							sx={{ gridColumn: 'span 2' }}
							variant='filled'
							type='text'
							label='Project Value'
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
							value={formik.values.projectValue}
							name='projectValue'
							error={
								!!formik.touched.projectValue &&
								!!formik.errors.projectValue
							}
						/>
						<FormControl
							required
							fullWidth
							sx={{ gridColumn: 'span 2' }}
							variant='filled'
							onBlur={formik.handleBlur}
							error={
								!!formik.touched.projectPriority &&
								!!formik.errors.projectPriority
							}
						>
							<InputLabel id='projectPriority'>
								Project Priority
							</InputLabel>
							<Select
								labelId='projectPriority'
								id='projectPriority'
								onChange={formik.handleChange}
								value={formik.values.projectPriority}
								name='projectPriority'
							>
								<MenuItem value=''>
									<em>None</em>
								</MenuItem>
								<MenuItem value='Urgent'>Urgent</MenuItem>
								<MenuItem value='Priority'>Priority</MenuItem>
								<MenuItem value='Routine'>Routine</MenuItem>
							</Select>
						</FormControl>
						<TextField
							required
							fullWidth
							sx={{ gridColumn: 'span 2' }}
							variant='filled'
							type='text'
							label='Assignee'
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
							value={formik.values.assignee}
							name='assignee'
							error={
								!!formik.touched.assignee && !!formik.errors.assignee
							}
						/>
						<TextField
							required
							fullWidth
							sx={{ gridColumn: 'span 2' }}
							variant='filled'
							type='text'
							label='Contact Name'
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
							value={formik.values.contactName}
							name='contactName'
							error={
								!!formik.touched.contactName &&
								!!formik.errors.contactName
							}
						/>
						<TextField
							required
							fullWidth
							sx={{ gridColumn: 'span 2' }}
							variant='filled'
							type='text'
							label='Contact Email'
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
							value={formik.values.email}
							name='email'
							error={!!formik.touched.email && !!formik.errors.email}
						/>
						<TextField
							required
							fullWidth
							sx={{ gridColumn: 'span 2' }}
							variant='filled'
							type='text'
							label='Phone Number'
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
							value={formik.values.phoneNumber}
							name='phoneNumber'
							error={
								!!formik.touched.phoneNumber &&
								!!formik.errors.phoneNumber
							}
						/>
						<TextField
							fullWidth
							required
							sx={{ gridColumn: 'span 4' }}
							// id='projectDescription'
							label='Project Description'
							multiline
							rows={4}
							defaultValue=''
							variant='filled'
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
							value={formik.values.projectDescription}
							name='projectDescription'
							error={
								!!formik.touched.projectDescription &&
								!!formik.errors.projectDescription
							}
						/>
						<Button
							fullHeight
							type='submit'
							color='secondary'
							variant='contained'
							size='large'
							sx={{ gridColumn: '4' }}
						>
							SUBMIT
						</Button>
					</Box>
				</form>
			</Formik>
		</Box>
	);
};

export default ProjectForm;
