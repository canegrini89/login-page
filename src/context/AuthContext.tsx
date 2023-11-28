import React, { ReactNode, createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type AuthContextType = {
  username: string | null;
  userError: string | null;
  signIn: (username: string, password: string) => void;
  signOut: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  username: null,
  userError: null,
  signIn: () => {},
  signOut: () => {},
});

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [username, setUserName] = useState<string | null>(null);
  const [userError, setUserError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const username = localStorage.getItem("username");

    if (username) {
      // Set username if it exists in local storage
      setUserName(username);
      // Redirect to dashboard if username exists
      navigate("/dashboard");
    }

    return;
  }, []);

  const signIn = (username: string, password: string) => {
    // Simulate sign-in process with random delay between 100ms and 600ms
    const delay = Math.floor(Math.random() * 500) + 100;

    new Promise(() =>
      setTimeout(() => {
        if (username === "MAINT" && password === "safetyiskey") {
          setUserName(username);
          localStorage.setItem("username", username);

          navigate("/dashboard");
        } else {
          setUserName(null);
          setUserError("Invalid username or password");
        }
      }, delay)
    );
  };

  const signOut = () => {
    setUserName(null);
    localStorage.removeItem("username");
  };

  return (
    <AuthContext.Provider value={{ username, userError, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
