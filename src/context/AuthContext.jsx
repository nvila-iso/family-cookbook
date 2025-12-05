import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const saveToken = (newToken) => {
    setToken(newToken);
    sessionStorage.setItem("token", newToken);
  };

  const register = async (registration) => {
    try {
      const res = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registration),
      });

      if (!res.ok) {
        const message = await res.text();
        throw new Error(message || "registration failed");
      }

      const data = await res.json();
      return data;
    } catch (error) {
      throw error.message;
    }
  };

  const login = async (credentials) => {
    try {
      const res = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      if (!res.ok) {
        const message = await res.text();
        throw new Error(message || "login failed");
      }

      const data = await res.json();

      saveToken(data.token);
      setUser(data.user);
      
      return data;
    } catch (error) {
      console.error(error.message);
      throw error.message;
    }
  };

  const logout = () => {
    try {
      sessionStorage.removeItem("token");
      setToken(null);
      setUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    if (!storedToken) {
      setLoading(false);
      return;
    }

    setToken(storedToken);

    fetch("http://localhost:5000/api/users/profile", {
      headers: {
        Authorization: `Bearer ${storedToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data.user);
        setLoading(false);
      })
      .catch(() => {
        sessionStorage.removeItem("token");
        setUser(null);
        setToken(null);
        setLoading(false);
      });
  }, []);

  const value = { token, login, user, logout, register, loading };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
