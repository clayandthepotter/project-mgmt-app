// src/api.js

export const getProjects = async () => {
  const response = await fetch('http://localhost:3001/projects');
  const database = await response.json();
	return database.projects;
};

export const addProject = async (project) => {
	const response = await fetch('http://localhost:3001/projects', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(project),
	});
	// const database = await response.json();
	return response;
};

export const deleteProject = async (projectId) => {
	const response = await fetch(
		`http://localhost:3001/projects/${projectId}`,
		{
			method: 'DELETE',
		}
	);
	return response;
};