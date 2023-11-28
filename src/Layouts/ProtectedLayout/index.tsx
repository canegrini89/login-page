import { NavLink, Navigate, Outlet, useLocation } from "react-router-dom";
// Hooks
import { useAuth } from "../../context/AuthContext";
// Routes
import { routes } from "../../routes";
// Components
import Button from "../../components/Button";

const ProtectedLayout = () => {
  const { username, signOut } = useAuth();
  const { pathname } = useLocation();

  if (!username) return <Navigate to="/login" />;

  const currentParentRoute = routes.filter((route) =>
    pathname.includes(route.path)
  );

  return (
    <div className="flex h-full">
      <nav className="relative bg-white w-1/6 shadow">
        <ul className="p-4 inline-flex flex-col grow">
          {currentParentRoute
            .map(({ subLinks }) => subLinks)
            .map((subLinks) =>
              subLinks?.map(({ path, label }) => (
                <li key={path} className="my-2">
                  <NavLink
                    to={path}
                    className="text-gray-700 hover:text-gray-900"
                    end
                  >
                    {({ isActive }) => (
                      <span
                        className={`
                        px-4 py-2 rounded-md 
                        ${isActive ? "text-white bg-blue-50" : "text-black"}`}
                      >
                        {label}
                      </span>
                    )}
                  </NavLink>
                </li>
              ))
            )}
        </ul>
        <div className="absolute bottom-4 flex justify-center w-full px-2">
          <Button label="Sign Out" color="gray" onClick={() => signOut()} />
        </div>
      </nav>
      <div className="grow">
        <Outlet />
      </div>
    </div>
  );
};

export default ProtectedLayout;
