import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import LiveProjectsPage from "./pages/LiveProjectsPage";
import ArtPage from "./pages/ArtPage";
import ArtBlogPostPage from "./pages/ArtBlogPostPage";
import CVPage from "./pages/CVPage";
import ContactPage from "./pages/ContactPage";
import CoursesPage from "./pages/CoursesPage";
import Particles from "./components/ui/Particles";

const App: React.FC = () => {
  return (
    <>
      <Particles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="live-projects" element={<LiveProjectsPage />} />
            <Route path="art" element={<ArtPage />} />
            <Route path="art/blog/:slug" element={<ArtBlogPostPage />} />
            <Route path="cv" element={<CVPage />} />
            <Route path="courses" element={<CoursesPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
