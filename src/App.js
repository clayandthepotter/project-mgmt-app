import React, { useState  } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard/Dashboard";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
// import Calendar from "./scenes/calendar/Calendar";
import ProjectForm from "./scenes/project-form/ProjectForm";
import ProjectList from './scenes/project-list/ProjectList';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { getProjects, addProject } from './api'

function App() {

	const [id, setId] = useState('');
  const [theme, colorMode] = useMode();
	
	const phoneRegExp =
		/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
	
		const formik = useFormik({
			initialValues: {
				projectName: '',
				id: '',
				projectValue: '',
				projectPriority: '',
				assignee: '',
				contactName: '',
				email: '',
				phoneNumber: '',
				projectDescription: '',
			},
			// validate form

			validationSchema: Yup.object().shape({
				projectName: Yup.string().required(),
				id: Yup.string().required(),
				email: Yup.string()
					.email('invalid email')
					.required(),
				phoneNumber: Yup.string()
					.matches(phoneRegExp, 'Phone number is not valid')
					.required(),
				assignee: Yup.string().required(),
				contactName: Yup.string().required(),
				projectValue: Yup.string().required(),
				projectPriority: Yup.string().required(),
        projectDescription: Yup.string().required(),
			}),

			// submit form

			onSubmit: (values) => {
				console.log(values);
				addProject(values);
				formik.resetForm();
				setId('');
				getProjects();
			},
		});
	
  return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div className='app' style={{ display: 'flex-stretch' }}>
					<Sidebar />
					<main className='content'>
						<Topbar />
						<Routes>
							<Route path='/' element={<Dashboard />} />
							<Route
								path='/project-form'
								element={
									<ProjectForm
										formik={formik}
										id={id} setId={setId}
										/>}/>
							<Route path='/project-list' element={<ProjectList getProjects={getProjects}/>}/>
						</Routes>
					</main>
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}


export default App;
