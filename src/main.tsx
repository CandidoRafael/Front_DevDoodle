import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { queryClient } from './services/queryClient.ts'
import { QueryClientProvider } from '@tanstack/react-query'
import { GlobalStyled } from './Global.styled.tsx'
import { UserProvider } from './Context/UserContext.tsx'
import { ToogleProvider } from './Context/ToogleContext.tsx'
import { PostProvider } from './Context/PostContext.tsx'

import ErrorPage from './pages/ErrorPage/ErrorPage.tsx'
import Search from './pages/Search/Search.tsx'
import Home from './pages/Home/Home.tsx'
import Auth from './pages/Auth/Auth.tsx'
import Profile from './pages/Profile/Profile.tsx'
import Policy from './pages/Policy/Policy.tsx'
import Navbar from './components/Navbar/Navbar.tsx'

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
      },
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/policy',
        element: <Policy />
      }
    ]
  },
  
  {
    path: '/auth',
    element: <Auth />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
 <QueryClientProvider client={queryClient}>
  <GlobalStyled />
    <PostProvider>
     <ToogleProvider>
       <UserProvider>
         <RouterProvider  router={router}/>
       </UserProvider>
      </ToogleProvider>
    </PostProvider>
  </QueryClientProvider>
  </React.StrictMode>,
)
