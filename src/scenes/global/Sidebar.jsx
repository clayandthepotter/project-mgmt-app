import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import AddToPhotosOutlinedIcon from '@mui/icons-material/AddToPhotosOutlined';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import { getProjects } from "../../api";
// import user from './assets/user';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
		<Box
			display='flex'
			height='100vh'
			sx={{
				'& .pro-sidebar-inner': {
					background: `${colors.primary[400]} !important`,
				},
				'& .pro-icon-wrapper': {
					backgroundColor: 'transparent !important',
					display: 'flex-stretch',
				},
				'& .pro-inner-item': {
					padding: '5px 35px 5px 20px !important',
				},
				'& .pro-inner-item:hover': {
					color: '#868dfb !important',
				},
				'& .pro-menu-item.active': {
					color: '#6870fa !important',
				},
			}}
		>
			<ProSidebar collapsed={isCollapsed} sx={{}}>
				<Menu iconShape='square'>
					{/* LOGO AND MENU ICON */}
					<MenuItem
						onClick={() => setIsCollapsed(!isCollapsed)}
						icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
						style={{
							margin: '10px 0 20px 0',
							color: colors.grey[100],
						}}
					>
						{!isCollapsed && (
							<Box
								display='flex'
								justifyContent='space-between'
								alignItems='center'
								ml='15px'
							>
								<Typography variant='h3' color={colors.grey[100]}>
									ADMIN
								</Typography>
								<IconButton
									onClick={() => setIsCollapsed(!isCollapsed)}
								>
									<MenuOutlinedIcon />
								</IconButton>
							</Box>
						)}
					</MenuItem>

					{!isCollapsed && (
						<Box mb='25px'>
							<Box textAlign='center'>
								<Typography
									variant='h2'
									color={colors.grey[100]}
									fontWeight='bold'
									sx={{ m: '10px 0 0 0' }}
								>
									Clayton
								</Typography>
								<Typography
									variant='h5'
									color={colors.greenAccent[500]}
								>
									Project Lead
								</Typography>
							</Box>
						</Box>
					)}

					<Box paddingLeft={isCollapsed ? undefined : '10%'}>
						<Item
							title='Dashboard'
							to='/'
							icon={<GridViewOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>

						<Item
							title='Project List'
							to='/project-list'
							icon={<ListAltOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
							getProjects={getProjects}
						/>

						<Item
							title='Create Project'
							to='/project-form'
							icon={<AddToPhotosOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>

						{/* <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}
					</Box>
				</Menu>
			</ProSidebar>
		</Box>
	);
};

export default Sidebar;