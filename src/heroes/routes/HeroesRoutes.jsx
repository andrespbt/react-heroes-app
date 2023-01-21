import { Navigate, Outlet } from "react-router-dom"
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../pages"
import { Navbar} from '../../ui'

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar/>
        <div className="container">
           <Outlet/>
        </div>
    </>
  )


}

export const childHeroesRoutes =  [

	{
        index:true,
		path: '/marvel',
		element: <MarvelPage />,
	},
	{
		path: '/dc',
		element: <DcPage />,
	},
	{
		path: '/search',
		element: <SearchPage />,
	},
	{
		path: '/hero/:id',
		element: <HeroPage />,
	},
	{
		path: '/*',
		element: <Navigate to={'/marvel'} />,
	},
];
