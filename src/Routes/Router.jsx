import { createBrowserRouter } from "react-router-dom";
import MainRoute from "../Layouts/MainRoute";
import HomePage from "../components/HomePage";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainRoute></MainRoute>,
        children: [
            {
                path: '/home',
                element: <HomePage></HomePage>
            }
        ]
    }
])

export default Router;