
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Courses from "./Components/Courses";
import WhyChoosePDS from "./Components/WhyChoosePDS";
import StudentWork from "./Components/StudentWork";
import Mentor from "./Components/Mentor";
import Reviews from "./Components/Reviews";
import Footer from "./Components/Footer";
import Enquiry from "./Components/Enquiry";
import StudentWorkPage from "./Components/StudentWorkPage";
import CoursesPage from "./Components/CoursesPage";
// HOME PAGE
function HomePage() {
  return (
    <>
      <Hero />
      <Courses />
      <WhyChoosePDS />
      <StudentWork />
      <Mentor />
      <Reviews />
    </>
  );
}

// MAIN APP
function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-full bg-[#FDFBF6]">

        {/* NAVBAR - ALL PAGES */}
        <Navbar />

        {/* PAGE ROUTES */}
        <main>
          {/* HOME PAGE */}
          <Routes>
            {/* COURSES PAGE */}
            <Route
              path="/courses"
              element={<CoursesPage />}
            />

            <Route
              path="/"
              element={<HomePage />}
            />

            {/* STUDENT WORK PAGE */}
            <Route
              path="/student-work"
              element={<StudentWorkPage />}
            />

            {/* ENQUIRY PAGE */}
            <Route
              path="/enquiry"
              element={<Enquiry />}
            />
          </Routes>
           
        </main>

        {/* FOOTER - ALL PAGES */}
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
