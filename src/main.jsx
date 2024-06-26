import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Aboute from './components/About/Aboute.jsx';
import Contact from './components/Contact/Contact.jsx';
import Usger from './components/Usgers/Usger.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/aboute',
        element: <Aboute></Aboute>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/Usger',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users/'),
        element: <Usger></Usger>
      }
    ]
   
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
