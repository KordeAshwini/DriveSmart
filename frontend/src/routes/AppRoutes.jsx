import { Routes, Route } from "react-router-dom";
import Home from "../pages/common/Home";
import Register from "../pages/auth/Register";
// import NotFound from "../pages/common/NotFound";
import About from "../pages/common/About";
import Contact from "../pages/common/Contact";
import Curriculum from "../pages/common/Curriculum";
import Schools from "../pages/common/Schools";
import MockTest from "../pages/learning/MockTest";
import LessonContent from "../pages/learning/LessonContent";
import SchoolProfile from "../pages/schools/SchoolProfile";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<Register />} />
            {/* <Route path="*" element={<NotFound />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/curriculum" element={<Curriculum />} />
            <Route path="/schools" element={<Schools />} />
            <Route path="/mock-test" element={<MockTest />} />
            <Route path="/lesson/:slug" element={<LessonContent />} />
            <Route path="/school/:id" element={<SchoolProfile />} />
        </Routes>
    );
};

export default AppRoutes;
