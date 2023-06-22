import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Favorites from "./Pages/Favorites/Favorites";
import RootLayout from "./components/RootLayout/RootLayout";
import NotFound from "./Pages/NotFound/NotFound";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Login from "./Pages/Login/Login";
import { Container } from "@mui/material";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Navigate to={"/home"} /> },
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
      <Container maxWidth="xl">
        <RouterProvider router={router} />
      </Container>
    </div>
  );
}

export default App;
