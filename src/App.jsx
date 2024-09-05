import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeNav from "./wrappers/HomeNav";
import Home from "./pages/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import UserDashboardNav from "./wrappers/UserDashboardNav";
import authLoader from "./loaders/authLoader";
import Logout from "./components/Logout";
import DashboardWrapper from "./wrappers/DashboardWrapper";
import Dashboard from "./components/Dashboard";
import dashboardLoader from "./loaders/dashboardLoader";
import companiesLoader from "./loaders/companiesLoader";
import Companies from "./components/Companies";
import jobsLoader from "./loaders/jobsLoader";
import Jobs from "./components/Jobs";
import Company from "./components/Company";
import companyLoader from "./loaders/companyLoader";
import Application from "./components/Application";
import jobLoader from "./loaders/jobLoader";
import Applications from "./components/Applications";
import applicationsLoader from "./loaders/applicationsLoader";
import applicationLoader from "./loaders/applicationLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeNav />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "login",
        element: <Login />,
        loader: authLoader
      }
    ]
  },
  {
    path: "dashboard",
    element: <UserDashboardNav />,
    loader: authLoader,
    children: [
      {
        path: "",
        element: <DashboardWrapper />,
        children: [
          {
            index: true,
            element: <Dashboard />,
            loader: dashboardLoader
          },
          {
            path: "companies",
            element: <Companies />,
            loader: companiesLoader
          },
          {
            path: "jobs",
            element: <Jobs />,
            loader: jobsLoader,
            children: [
              {
                path: ":id",
                element: <Application />,
                loader: applicationLoader
              }
            ]
          },
          {
            path: "companies/:id",
            element: <Company />,
            loader: companyLoader
          },
          {
            path: "applications",
            element: <Applications />,
            loader: applicationsLoader
          }
        ]
      }
    ]
  },
  {
    path: "logout",
    element: <Logout />
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App;