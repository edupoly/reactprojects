import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/js/bootstrap.min'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";
import store from './app/store';
import { Provider } from 'react-redux';import Pizzas from './features/pizzas/Pizzas';
import Desserts from './features/desserts/Desserts';
import Home from './Home';
;
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
            path:"/pizzas",
            element:<Pizzas></Pizzas>
        },
        {
            path:"/desserts",
            element:<Desserts></Desserts>
        },
      ]
    }
  ]);
  ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
  );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
