// Componets
import LoginPage from "./Pages/LoginPage/index";
import ProtectedLayout from "./Layouts/ProtectedLayout";
import DashboarPage from "./Pages/DashboarPage";
import ProfilePage from "./Pages/ProfilePage";

type Route = {
  path: string;
  label: string;
  component: JSX.Element;
  subLinks?: Route[];
};

export const routes: Route[] = [
  {
    path: "/login",
    label: "Login",
    component: <LoginPage />,
  },
  {
    path: "/dashboard",
    label: "Dashboard",
    component: <ProtectedLayout />,
    subLinks: [
      {
        path: "/dashboard",
        label: "Dashboard",
        component: <DashboarPage />,
      },
      {
        path: "/dashboard/profile",
        label: "Profile",
        component: <ProfilePage />,
      },
    ],
  },
];
