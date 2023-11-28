import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
// Routes
import { routes } from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.component}>
              {route.subLinks?.map((child, index) => (
                <Route
                  key={index}
                  path={child.path}
                  element={child.component}
                />
              ))}
            </Route>
          ))}
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
