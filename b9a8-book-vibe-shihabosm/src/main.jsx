import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Main.jsx';
import Home from './Components/Home.jsx';
import Books from './Components/Nav/Books.jsx';
import Pages from './Components/Nav/Pages.jsx';
import BookDrtails from './BookDrtails.jsx';
import ReadBooks from './ReadBooks.jsx';
import WishList from './WishList.jsx';
import Error from './Components/Error.jsx';
import BookGallery from './BookGallery.jsx';
import Contact from './Contact.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<Error></Error>,
    children:[
     { 
      path:'/',
      element:<Home></Home>,
      loader:()=>fetch('https://shihabosm.github.io/fack/fake.json')

    },
    {
      path:'/gallery',
      element:<BookGallery></BookGallery>
    },{
      path:'/contact',
      element:<Contact></Contact>
    },
    {
      path:'/books',
      element:<Books></Books>,
      children:[
        {
          index:true,
          element:<ReadBooks></ReadBooks>

        },
        {
          path:'wishlist',
          element:<WishList></WishList>
        }
      ]
    },
    {
      path:'/book/:id',
      element:<BookDrtails></BookDrtails>,
     

    },
    {
      path:'/pages',
      element:<Pages></Pages>
    },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
        <RouterProvider router={router} />
  </>,
)
