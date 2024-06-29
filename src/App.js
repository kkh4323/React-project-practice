import React from 'react';
import { RouterProvider } from "react-router-dom"
import router from "./router"
import { Menu } from "./components"

const App = () => {
    return (
        <>
            <Menu />
            <RouterProvider router={router}/>
        </>
    );
};

export default App;