import { createBrowserRouter } from "react-router-dom";
import MainRoute from "../Layouts/MainRoute";
import About from "../Page/About";
import HomePage from "../Page/Home/HomePage";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainRoute></MainRoute>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>
            },
            {
                path: "/about",
                element: <About></About>
            }
        ]
    }
])

export default Router;