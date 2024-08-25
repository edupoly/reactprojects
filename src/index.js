import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/js/bootstrap.min'
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from './Home';
import Pizzas from './features/pizzas/Pizzas';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/pizzas",
                element:<Pizzas></Pizzas>
            }
        ]
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <RouterProvider router={router} />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
