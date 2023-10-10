import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { queryClient } from './services/queryClient.ts'
import { QueryClientProvider } from '@tanstack/react-query'

import { GlobalStyled } from './Global.styled.tsx'
import Navbar from './components/Navbar/Navbar.tsx'
import Home from './pages/Home/Home.tsx'
import Search from './pages/Search/Search.tsx'
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
        path: 'posts/search/:title',
        element: <Search />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <GlobalStyled />
    <RouterProvider  router={router}/>
    </QueryClientProvider>
  </React.StrictMode>,
)
