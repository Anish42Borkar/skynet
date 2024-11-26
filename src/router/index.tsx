import { Route, Routes } from "react-router";
import HomePage from "../pages/home";
import LoadingPage from "../pages/loading-page";
import ResultsPage from "../pages/results";

const RouterHandler = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/loading" element={<LoadingPage />} />
      <Route path="/results" element={<ResultsPage />} />
    </Routes>
  );
};

export default RouterHandler;
