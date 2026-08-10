import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import ProjectDisplay from "./pages/ProjectDisplay";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="services" element={<Services />} />
        <Route path="project" element={<Projects />} />
        <Route path="project/:slug" element={<ProjectDisplay />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
};

export default App;
