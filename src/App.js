import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import { Box } from '@mui/system';
import Purschase from './Pages/Purches/Purschase';
import Login from './Pages/Login/Login';
import Regiseter from './Pages/Login/Register';
import AuthProvider from './context/AuthProvider';
import PrivetRoute from './Pages/Login/PrivetRoute/PrivetRoute';
import Explore from './Explore/Explore';
import Dashboard from './Pages/Privet/Dashboard/DashBoard/Dashboard';
import PayMethod from './Pages/Privet/Dashboard/Pay/PayMethod';
import ManageOrders from './Pages/Privet/Dashboard/ManageOrderes/ManageOrders';
import Review from './Pages/Privet/Dashboard/Review/Review';
import MakeAdmin from './Pages/Admin/MakeAdminn/MakeAdmin';
import AddProduct from './Pages/Admin/AddProduct/AddProduct';
import AllProducts from './Pages/Privet/Dashboard/AllPorducts/AllProducts';

function App() {
  return (
    <Box sx={{backgroundColor: "  #f2f2f5",}}>
    <AuthProvider>
      <Router>
      <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route  path="/home">
            <Home/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/explore">
            <Explore/>
          </Route>
          <PrivetRoute path="/dashboard">
            <Dashboard/>
          </PrivetRoute>
          <PrivetRoute path="/manageOrders">
            <ManageOrders/>
          </PrivetRoute>
          <PrivetRoute path="/review">
            <Review/>
          </PrivetRoute>
          <Route path="/allOrders/:id">
            <Dashboard/>
          </Route>
          <Route path="/pay">
            <PayMethod/>
          </Route>
          <Route path="/admin">
            <MakeAdmin/>
          </Route>
          <Route path="/register">
            <Regiseter/>
          </Route>
          <Route path="/addProduct">
            <AddProduct/>
          </Route>
          <Route path="/allProducts">
            <AllProducts/>
          </Route>
          <PrivetRoute path="/purchase/:id">
            <Purschase/>
          </PrivetRoute>
        </Switch>
      </Router>
    </AuthProvider>
    </Box>

  );
}

export default App;
