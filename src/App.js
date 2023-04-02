import logo from "./logo.svg";
import "./App.css";

// Icons
import "./assets/vendor/fonts/fontawesome.css";
import "./assets/vendor/fonts/tabler-icons.css";
import "./assets/vendor/fonts/flag-icons.css";

// Core Css
import "./assets/vendor/css/rtl/core.css";
import "./assets/vendor/css/rtl/theme-default.css";
import "./assets/css/demo.css";

// Vendor Css
import "./assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css";
import "./assets/vendor/libs/node-waves/node-waves.css";

// Helpers
// import "./assets/vendor/js/helpers.js";
import { useEffect } from "react";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";

function App() {
  return <Page1 />;
}

export default App;
