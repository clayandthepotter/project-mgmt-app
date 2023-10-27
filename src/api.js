// src/api.js

export const getProjects = async () => {
  const response = await fetch('http://localhost:3001/projects');
  const database = await response.json();
	return database.projects;
};

// export const addProject = async (project) => {
// 	database.projects.push(project);
// 	// In a real-world scenario, you'd save this to the backend or local storage.
// };

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


export const deleteProject = async (id) => {
	const response = await fetch (`http://localhost:3001/projects/${id}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
	});

	return response;
}