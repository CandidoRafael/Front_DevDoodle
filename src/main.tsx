import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.tsx'
import Home from './pages/Home/Home.tsx'
import Search from './pages/Search/Search.tsx'
import { GlobalStyled } from './Global.styled.tsx'
import ErrorPage from './pages/ErrorPage/ErrorPage.tsx'


const router = createBrowserRouter([
  {
    path: '/',
    element:  <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/search/:title',
        element: <Search />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyled />
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
