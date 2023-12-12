import { createBrowserRouter } from "react-router-dom";
import MainRoute from "../Layouts/MainRoute";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainRoute></MainRoute>,
    }
])

export default Router;