import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import DisplayUser from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/user-form";
import Pie from "./scenes/pie";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import ProjectForm from "./scenes/project-form";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [formData, setFormData] = useState(null);
	// return (
	// 	<div>
	// 		<Form setFormData={setFormData} />
	// 		<Contacts data={formData} />
	// 	</div>
	// 		);
	
  return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div className='app' style={{ display: 'flex-stretch' }}>
					<Sidebar isSidebar={isSidebar} />
					<main className='content'>
						<Topbar setIsSidebar={setIsSidebar} />
						<Routes>
							<Route path='/' element={<Dashboard />} />
							<Route path='/team' element={<Team />} />
							<Route path='/contacts' element={<DisplayUser data={formData} />} />
							<Route path='/user-form' element={<Form setFormData={setFormData}/>} />
							<Route path='/project-form' element={<ProjectForm/>} />
							<Route path='/bar' element={<Bar />} />
							<Route path='/pie' element={<Pie />} />
							<Route path='/calendar' element={<Calendar />} />
						</Routes>
					</main>
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}


export default App;
