import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import ProjectForm from "./scenes/project-form";
import ProjectList from './scenes/project-list';

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
	const [isProject, setIsProject] = useState([]);

  return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div className='app' style={{ display: 'flex-stretch' }}>
					<Sidebar isSidebar={isSidebar} />
					<main className='content'>
						<Topbar/>
						<Routes>
							<Route path='/' element={<Dashboard />} />
							<Route
								path='/project-form'
								element={
									<ProjectForm
										isProject={isProject}
										setIsProject={setIsProject}
									/>
								}
							/>
							<Route path='/project-list' element={<ProjectList />} />
							<Route path='/calendar' element={<Calendar />} />
						</Routes>
					</main>
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
