import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard/Dashboard";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/Calendar";
import ProjectForm from "./scenes/project-form/ProjectForm";
import ProjectList from './scenes/project-list/ProjectList';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { getProjects, addProject } from './api'

function App() {
  const [theme, colorMode] = useMode();
	const [projects, setProjects] = useState([]);
	useEffect(() => {
		setProjects(getProjects());
	}, []);

	const handleAddProject = async (project) => {
		addProject(project);
		const updatedProjects = await getProjects();
		setProjects(updatedProjects);
	};
	const phoneRegExp =
		/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
	
		const formik = useFormik({
		initialValues: {
			projectName: '',
			id: '',
			projectValue: '',
			projectPriority: '',
			contactName: '',
			email: '',
			phoneNumber: '',
		},
		// validate form

		validationSchema: Yup.object().shape({
			projectName: Yup.string().required('required'),
			id: Yup.string().required('required'),
			email: Yup.string().email('invalid email').required('required'),
			phoneNumber: Yup.string()
				.matches(phoneRegExp, 'Phone number is not valid')
				.required('required'),
			contactName: Yup.string().required('required'),
			projectValue: Yup.string().required('required'),
			projectPriority: Yup.string().required('required'),
		}),

	// submit form
	onSubmit: (values) => {
		console.log(values);
		// router.push({ pathname: '' });
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
										handleAddProject={handleAddProject}/>}/>
							<Route path='/project-list' element={<ProjectList getProjects={getProjects}/>}/>
							<Route path='/calendar' element={<Calendar />} />
						</Routes>
					</main>
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}


export default App;
