import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import Home from "./components/Home/home"
import Payment from "./components/Payment/payment"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/payment",
    element: <Payment />
  }
])

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
