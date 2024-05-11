import Admin from "@/screens/Admin.page";
import CreateTicket from "@/screens/CreateTicket.page";
import Home from "@/screens/Home.page";
import Technician from "@/screens/Technician.page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/admin",
      element: <Admin />,
    },
    {
      path: `/technician/:id`,
      element: <Technician />,
    },
    {
      path: `/ticketCreate`,
      element: <CreateTicket />,
    },
  ]);

  return <RouterProvider router={router} />;
}
