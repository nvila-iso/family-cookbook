import { createBrowserRouter } from "react-router";
import RootLayout from "./layouts/RootLayout";

import Home from "./pages/Home";
import Browse from "./pages/Browse";
import FamilyCookbook from "./pages/FamilyCookbook";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

const routes = [
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "login", Component: Login },
      { path: "register", Component: Register },
      { path: "browse", Component: Browse },
      { path: "/family_cookbook", Component: FamilyCookbook },
    ],
  },
];

const App = createBrowserRouter(routes);
export default App;
