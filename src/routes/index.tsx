import App from "@/App";
import { createBrowserRouter } from "react-router";
import Task from "../pages/task"
import User from "../pages/User"
const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children: [
            {
                index: true,
                element: <Task></Task>
            },
            {
                path: 'user',
                element: <User></User>
            }
        ]
    }
])

export default router;