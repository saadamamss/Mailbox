import { Route, Routes } from "react-router-dom";
import "./assets/App.css";
import Home from "./index.jsx";
import RootLayout from "./RootLayout.jsx";
import Blog from "./Blog.jsx";
import Pricing from "./Pricing.jsx";
import NotFound from "./NotFound.jsx";

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/pricing" element={<Pricing />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
