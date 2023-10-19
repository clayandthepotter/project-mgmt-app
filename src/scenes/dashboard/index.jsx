import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="30px"
      >

        <Box
          gridColumn="span 12"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "20px 0 0 30px" }}>
            Project Stages
          </Typography>
          <Box height="280px" mb='20px' pb='20px'>
            <BarChart isDashboard={true} />
          </Box>

          <Box
          gridColumn="span 12"
          gridRow="span 10"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "20px 0 0 30px" }}
          >
            Projects
          </Typography>
          <Box
            display='grid'
            gridTemplateColumns="repeat(12, 1fr)"
            mt="20px" 
            grid backgroundColor={colors.grey[500]}
            gridAutoRows="40px"
            gap="15px">
              <Box
                gridColumn='span 3'
                gridRow='span 3'
                backgroundColor={colors.primary[600]}
                m='10px'
                p='1em'

                >
                  Project
              </Box>
              <Box
                gridColumn='span 3'
                gridRow='span 3'
                backgroundColor={colors.primary[600]}
                m='10px'
                p='1em'

                >
                  Project
              </Box>
              <Box
                gridColumn='span 3'
                gridRow='span 3'
                backgroundColor={colors.primary[600]}
                m='10px'
                p='1em'

                >
                  Project
              </Box>
              <Box
                gridColumn='span 3'
                gridRow='span 3'
                backgroundColor={colors.primary[600]}
                m='10px'
                p='1em'

                >
                  Project
              </Box>
              <Box
                gridColumn='span 3'
                gridRow='span 3'
                backgroundColor={colors.primary[600]}
                m='10px'
                p='1em'

                >
                  Project
              </Box>
              <Box
                gridColumn='span 3'
                gridRow='span 3'
                backgroundColor={colors.primary[600]}
                m='10px'
                p='1em'

                >
                  Project
              </Box>
              <Box
                gridColumn='span 3'
                gridRow='span 3'
                backgroundColor={colors.primary[600]}
                m='10px'
                p='1em'

                >
                  Project
              </Box>
              <Box
                gridColumn='span 3'
                gridRow='span 3'
                backgroundColor={colors.primary[600]}
                m='10px'
                p='1em'

                >
                  Project
              </Box>
          </Box>
        </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;