import { createBrowserRouter } from "react-router-dom"
import { MovieList, TvList, Detail } from "./components"

const router = createBrowserRouter([
    {
        path: "/",
        element: <MovieList />
    },
    {
        path: "/tv",
        element: <TvList />
    },
    {
        path: "/movie/:id",
        element: <Detail />
    },
    {
        path: "/tv/:id",
        element: <Detail />
    }
])

export default router;