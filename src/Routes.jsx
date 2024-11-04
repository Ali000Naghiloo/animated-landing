import { Route, Routes } from "react-router-dom";
// pre-loader
import PreLoaderPage from "./pages/pre-loading/PreLoaderPage";
import LandingPage from "./pages/landing/LandingPage";

export default function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/landing" element={<LandingPage />} />
      </Routes>

      {/* pre-loader */}
      <PreLoaderPage />
    </>
  );
}
