import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../Layout/Layout";
import Parallax from "../Parallax/Parallax";


export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
        <Route path="/parallax" element={<Parallax />} />
    </Route>
  )
);
