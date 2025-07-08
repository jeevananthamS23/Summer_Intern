import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
// import User from './User';
// import Home from "./Home"
// import User from "./User"
// import About from "./About"
// import Help from "./Help";
// import Mobile from "./Mobile"
// import Contact from "./Contact"
const Home=lazy(()=>import("./Home"));
const User=lazy(()=>import("./User"));
const About=lazy(()=>import("./About"));
const Help=lazy(()=>import("./Help"));
const Mobile=lazy(()=>import("./Mobile"));
const Contact=lazy(()=>import("./Contact"));


const allUrls=createBrowserRouter([{
  path:"/",
  element:<App></App>,
  children:[
    {
      path:"/",
     element: (
  <Suspense fallback={<p>page is loading</p>}>
    <Home />
  </Suspense>
)},
    {
      path:"/user",
      element:(    <Suspense fallback={<p>page is loading</p>}><User/> </Suspense>) },
    {
      path:"/contact",
     element:(    <Suspense fallback={<p>page is loading</p>}><Contact/> </Suspense>) },

    {
      path:"/about",
  element:(    <Suspense fallback={<p>page is loading</p>}><About/> </Suspense>) 
    },{
      path:"/help",
     element:(    <Suspense fallback={<p>page is loading</p>}><Help/> </Suspense>) 
    },
    {path:"/mobile/:id",
   element:(    <Suspense fallback={<p>page is loading</p>}><Mobile/> </Suspense>) },
    {
      path:"*",
      element:<h1>hello world</h1>
    }
  ]
}]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <RouterProvider router={allUrls} ></RouterProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
