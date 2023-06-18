import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Favorites from "./Pages/Favorites/Favorites";
import RootLayout from "./components/RootLayout/RootLayout";
import NotFound from "./Pages/NotFound/NotFound";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Login from "./Pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "/home", element: <Dashboard /> },
      { path: "/favorites", element: <Favorites /> },
      { path: "/login", element: <Login /> },
      { path: "/product/:id", element: <ProductDetails /> },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
