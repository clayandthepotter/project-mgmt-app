import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const ProjectForm = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
		<Box m='20px'>
			<Header
				title='PROJECT FORM'
				subtitle='Create a New Project'
			/>

			<Formik
				onSubmit={handleFormSubmit}
				initialValues={initialValues}
				validationSchema={checkoutSchema}
			>
				{({
					values,
					errors,
					touched,
					handleBlur,
					handleChange,
					handleSubmit,
				}) => (
					<form onSubmit={handleSubmit}>
						<Box
							display='grid'
							gap='30px'
							gridTemplateColumns='repeat(6, minmax(0, 1fr))'
							sx={{
								'& > div': {
									gridColumn: isNonMobile ? undefined : 'span 4',
								},
							}}
						>
							<TextField
								fullWidth
								variant='filled'
								type='text'
								label='Project Name'
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.projectName}
								name='projectName'
								error={!!touched.projectName && !!errors.projectName}
								helperText={touched.projectName && errors.projectName}
								sx={{ gridColumn: 'span 3' }}
							/>
							<TextField
								fullWidth
								variant='filled'
								type='text'
								label='ID'
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.id}
								name='id'
								error={!!touched.id && !!errors.id}
								helperText={touched.id && errors.id}
								sx={{ gridColumn: 'span 3' }}
							/>
							<TextField
								fullWidth
								variant='filled'
								type='text'
								label='Project Value'
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.projectValue}
								name='projectValue'
								error={
									!!touched.projectValue && !!errors.projectValue
								}
								helperText={
									touched.projectValue && errors.projectValue
								}
								sx={{ gridColumn: 'span 3' }}
							/>
							<TextField
								fullWidth
								variant='filled'
								type='text'
								label='Project Priority'
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.contact}
								name='projectPriority'
								error={
									!!touched.projectPriority &&
									!!errors.projectPriority
								}
								helperText={
									touched.projectPriority && errors.projectPriority
								}
								sx={{ gridColumn: 'span 3' }}
							/>
							<TextField
								fullWidth
								variant='filled'
								type='text'
								label='Contact Name'
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.contactName}
								name='contactName'
								error={!!touched.contactName && !!errors.contactName}
								helperText={touched.contactName && errors.contactName}
								sx={{ gridColumn: 'span 6' }}
							/>
							<TextField
								fullWidth
								variant='filled'
								type='text'
								label='Contact Email'
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.email}
								name='email'
								error={!!touched.email && !!errors.email}
								helperText={touched.email && errors.email}
								sx={{ gridColumn: 'span 3' }}
							/>
							<TextField
								fullWidth
								variant='filled'
								type='text'
								label='Phone Number'
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.phoneNumber}
								name='phoneNumber'
								error={!!touched.phoneNumber && !!errors.phoneNumber}
								helperText={touched.phoneNumber && errors.phoneNumber}
								sx={{ gridColumn: 'span 3' }}
							/>
						</Box>
						<Box display='flex' justifyContent='end' mt='20px'>
							<Button
								type='submit'
								color='secondary'
								variant='contained'
							>
								Create New User
							</Button>
						</Box>
					</form>
				)}
			</Formik>
		</Box>
	);
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
	projectName: yup.string().required('required'),
	id: yup.string().required('required'),
	email: yup.string().email('invalid email').required('required'),
	phoneNumber: yup
		.string()
		.matches(phoneRegExp, 'Phone number is not valid')
		.required('required'),
	contactName: yup.string().required('required'),
	projectValue: yup.string().required('required'),
	projectPriority: yup.string().required('required'),
});
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

export default ProjectForm;