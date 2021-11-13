import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import {Switch,Route,useRouteMatch} from "react-router-dom";
import PayMethod from '../Pay/PayMethod';
import ManageOrders from '../ManageOrderes/ManageOrders';
import Review from '../Review/Review';
import useAuth from '../../../../hooks/useAuth';
import { Button } from '@mui/material';
import MakeAdmin from '../../../Admin/MakeAdminn/MakeAdmin';
import AdminRoute from '../../../Login/AdminRoute/AdminRoute';
import AddProduct from '../../../Admin/AddProduct/AddProduct';
import AllProducts from '../AllPorducts/AllProducts';

const drawerWidth = 240;

const  DashBoardHome = (props) => {
  const { logOut, admin} = useAuth()
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
        <NavLink to="/" style={{textDecoration:'none', color:'black', fontSize:'23px', marginLeft:'25px',}}>
        Home
      </NavLink><br/>
      <Divider sx={{mb:7}} />
      <Box sx={{lineHeight:2}}>
      {! admin && <Box>
        <NavLink to={`${url}`} style={{textDecoration:'none', color:'black', fontSize:'23px', marginLeft:'25px',}}>
        Manage Orders
      </NavLink><br/>
      <NavLink to={`${url}/pay`} style={{textDecoration:'none', color:'black', fontSize:'23px', marginLeft:'25px', }}>
        Pay Method
      </NavLink><br/>
      <NavLink to={`${url}/review`} style={{textDecoration:'none', color:'black', fontSize:'23px', marginLeft:'25px', }}>
        Give Feedback
      </NavLink><br/>
        </Box>}
      {
        admin && <Box>
      <NavLink to={`${url}/allOrders`} style={{textDecoration:'none', color:'black', fontSize:'23px', marginLeft:'25px', }}>
        Manage Orders
      </NavLink><br/>
      <NavLink to={`${url}/explore`} style={{textDecoration:'none', color:'black', fontSize:'23px', marginLeft:'25px', }}>
        All Products
      </NavLink><br/>
      <NavLink to={`${url}/admin`} style={{textDecoration:'none', color:'black', fontSize:'23px', marginLeft:'25px', }}>
        Make Admin
      </NavLink><br/>
      <NavLink to={`${url}/addProduct`} style={{textDecoration:'none', color:'black', fontSize:'23px', marginLeft:'25px', }}>
        Add A Product
      </NavLink><br/>
        </Box>
      }
      <Button onClick={logOut} style={{textDecoration:'none', color:'black', fontSize:'23px', marginLeft:'25px', }}>
        Sign Out
      </Button>
      </Box>
     
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            DashBoard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
        <Route exact path={path}>
            <ManageOrders/>
        </Route>
        <Route path={`${path}/pay`}>
         <PayMethod/>
        </Route>
        <Route path={`${path}/review`}>
            <Review/>
        </Route>
        <AdminRoute path={`${path}/addProduct`}>
          <AddProduct/>
        </AdminRoute>
        <AdminRoute path={`${path}/admin`}>
            <MakeAdmin/>
        </AdminRoute>
        <AdminRoute path={`${path}/allOrders`}>
           <ManageOrders/>
        </AdminRoute>
        <AdminRoute path={`${path}/allOrders`}>
           <ManageOrders/>
        </AdminRoute>
        <AdminRoute path={`${path}/explore`}>
         <AllProducts/>
        </AdminRoute>
      </Switch>
      </Box>
    </Box>
    </>
  );
}

DashBoardHome.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashBoardHome;
