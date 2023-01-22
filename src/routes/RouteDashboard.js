import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const RouteDashboard = (param) => {
    return Cookies.get('token') !== undefined ? param.children : <Navigate to="/login" />
}

export default RouteDashboard;