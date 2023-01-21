import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth"

export const PrivateRoute = ( { children } ) => {

    const { logged, user } = useContext( AuthContext );

    const { pathname, search } = useLocation();

    const lastPath = pathname + search;

    localStorage.setItem( 'lastPath', lastPath );
    localStorage.setItem('userName', user?.name );

  return (logged ? children : <Navigate to="/login" />)
}
