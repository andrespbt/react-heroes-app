import { LoginPage } from "../auth";
import {  createBrowserRouter, RouterProvider } from "react-router-dom";
import { HeroesRoutes, childHeroesRoutes } from "../heroes/routes/HeroesRoutes";
import ErrorPage from "../ui/components/ErrorPage";

const router = createBrowserRouter([

	{
	  path: "/login",
	  element: <LoginPage/>,
	  errorElement: <ErrorPage/>
	},
	{
		path: "/",
		element: <HeroesRoutes/>,
		children: childHeroesRoutes,
		errorElement: <ErrorPage/>
	  }

  ]);

export const AppRouter = () => {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
};
