import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { TimeFormatProvider } from "./context/TimeFormatProvider.jsx";

createRoot(document.getElementById("root")).render(
  <TimeFormatProvider>
    <App />
  </TimeFormatProvider>
);
