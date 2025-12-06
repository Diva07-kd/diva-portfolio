// src/main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// AOS import + init
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 750,
  easing: "ease-out",
  once: true,
  offset: 80,
});

createRoot(document.getElementById("root")).render(<App />);
