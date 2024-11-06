import { Route, Routes } from "react-router-dom";
// pre-loader
import PreLoaderPage from "./pages/pre-loading/PreLoaderPage";
import LandingPage from "./pages/landing/LandingPage";
import { useSelector } from "react-redux";

export default function AllRoutes() {
  const showLoader = useSelector((state) => state.preLoader.show);

  if (!showLoader) {
    return (
      <>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/landing" element={<LandingPage />} />
        </Routes>

        <PreLoaderPage />
      </>
    );
  } else {
    return (
      <Routes>
        <Route path="*" element={<PreLoaderPage />} />
      </Routes>
    );
  }
}
