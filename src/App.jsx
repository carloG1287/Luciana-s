import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.layer.css";
import "./global.css";
import Home from "../src/pages/home/page.jsx";
import List from "../src/pages/list/page.jsx";
import History from "./pages/History/page.jsx";
import Games from "./pages/games/page.jsx";
import Songs from "./pages/songs/page.jsx";
import Things from "./pages/things/page.jsx";
import Plans from "./pages/plans/page.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/list",
    element: <List />,
  },
  {
    path: "/history",
    element: <History />,
  },
  {
    path: "/games",
    element: <Games />,
  },
  {
    path: "/songs",
    element: <Songs />,
  },
  {
    path: "/things",
    element: <Things />,
  },
  {
    path: "/plans",
    element: <Plans />,
  },
]);
function App() {
  return (
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  );
}

export default App;
