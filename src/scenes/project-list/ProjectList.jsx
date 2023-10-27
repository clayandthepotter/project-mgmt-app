import React, { useEffect, useState } from "react";
import { Box, useTheme, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";




const ProjectList = ({deleteProject, setProjects, getProjects, projects}) => {
  // const [projectData, setProjectData] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/projects")
      .then((data) => data.json())
      .then((data) => setProjects(data));
  }, []);

  const handleDelete = (projectIds) => { 
  // console.log(`this is your projectIds: ${projectIds}`) 
    //projectIds.map(id => deleteProject(id))
   // setProjects(getProjects());
    setSelectedRows([]); 
  };
 

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "projectName",
      headerName: "Project Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "projectValue",
      headerName: "Project Value",
      flex: 1,
    },
    {
      field: "projectPriority",
      headerName: "Project Priority",
      flex: 1,
    },
    {
      field: "contactName",
      headerName: "Contact Name",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 0.5,
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header title="PROJECTS" subtitle="Manage your projects" />
      <Box display="flex" justifyContent="end" mt="20px">
        <Button type="submit" color="secondary" variant="contained" onClick={handleDelete(selectedRows)}>
          Delete
        </Button>
      </Box>
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={projects} columns={columns} onRowSelectionModelChange={(newSelection) => {
          // console.log(newSelection);
          // console.log(newSelection.selectionModel);
          setSelectedRows(newSelection);
        }} />
      </Box>
    </Box>
  );
};

export default ProjectList;
