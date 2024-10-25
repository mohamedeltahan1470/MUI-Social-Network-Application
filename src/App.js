import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./pages/Root";
import Create from "./pages/Create/Create";
import Home from "./pages/Home/Home";
import Profile from "pages/Profile/Profile";
import Stting from "pages/Sttings/Stting";
import { Logout } from "@mui/icons-material";
import NotFound from "pages/NotFound/NotFound";
import { Posts } from "pages/Posts/Posts";
import Side from "pages/Side/Side";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="create" element={<Create />} />
      <Route path="profile" element={<Profile />} />
      <Route path="stting" element={<Stting />} />
      <Route path="posts" element={<Posts />} />
      <Route path="side" element={<Side />} />
      <Route path="logout" element={<Logout />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
