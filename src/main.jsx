import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 800,
  easing: "ease-out",
  once: true,
});

createRoot(document.getElementById("root")).render(<App />);