/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MarkdownPage from "./pages/MarkdownPage";
import termsContent from "./content/terms.md?raw";
import privacyContent from "./content/privacy.md?raw";

export default function App() {
  return (
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
  );
}
