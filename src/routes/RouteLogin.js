import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const RouteLogin = (param) => {
    return Cookies.get('token') === undefined ? param.children : <Navigate to="/" />

};

export default RouteLogin;
