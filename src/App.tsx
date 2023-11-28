import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
// Routes
import { routes } from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
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
