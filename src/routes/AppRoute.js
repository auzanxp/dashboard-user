import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/dashboard/Layout';
import Navbar from '../components/Navbar';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import ListTableData from '../pages/ListTableData';
import Login from '../pages/Login';
import RouteDashboard from './RouteDashboard';
import RouteLogin from './RouteLogin';

const AppRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={
                    <Navbar>
                        <Home />
                    </Navbar>
                } />

                <Route path='/dashboard' element={
                    <RouteDashboard>
                        <Layout>
                            <Dashboard />
                        </Layout>
                    </RouteDashboard>
                } />

                <Route path='/list' element={
                    <RouteDashboard>
                        <Layout>
                            <ListTableData />
                        </Layout>
                    </RouteDashboard>
                } />

                <Route path='/login' element={
                    <RouteLogin>
                        <Navbar>
                            <Login />
                        </Navbar>
                    </RouteLogin>
                } />
            </Routes>

        </BrowserRouter>
    )
}

export default AppRoute
