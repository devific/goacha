import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MarkdownPage from "./pages/MarkdownPage";
import termsContent from "./content/terms.md?raw";
import privacyContent from "./content/privacy.md?raw";
import ScrollToTop from "./components/layout/ScrollToTop";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/terms"
          element={
            <MarkdownPage title="Terms & Conditions" content={termsContent} />
          }
        />
        <Route
          path="/privacy"
          element={
            <MarkdownPage title="Privacy Policy" content={privacyContent} />
          }
        />
      </Routes>
    </>
  );
}
