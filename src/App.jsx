import { createBrowserRouter } from "react-router";
import RootLayout from "./layouts/RootLayout";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Browse from "./pages/Browse";
import FamilyCookbook from "./pages/FamilyCookbook";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Setup from "./pages/user/profile/Setup";

const routes = [
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "login", Component: Login },
      { path: "register", Component: Register },
      { path: "browse", Component: Browse },

      // PROTECTED PAGES
      {
        path: "/family_cookbook",
        element: (
          <ProtectedRoute>
            <FamilyCookbook />
          </ProtectedRoute>
        ),
      },
      {
        path: "/setup",
        element: (
          <ProtectedRoute>
            <Setup />
          </ProtectedRoute>
        ),
      },
    ],
  },
];

const App = createBrowserRouter(routes);
export default App;
