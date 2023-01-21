import {  createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { HeroesRoutes, childHeroesRoutes } from "../heroes/routes/HeroesRoutes";
import { LoginPage } from "../auth";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

const router = createBrowserRouter([

	{
		index: true,
		path: "/login",
		element: <PublicRoute><LoginPage/></PublicRoute>,
	},
	{
		path: "/",
		element: <PrivateRoute><HeroesRoutes/></PrivateRoute>,
		children: childHeroesRoutes,
    },


  ]);

export const AppRouter = () => {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
};
