import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import { Shoes } from "./pages/Shoes/Shoes";
import { shoesData } from "./data/shoesData";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Layout from "./features/Header/Layout";
import Admin from "./pages/Admin";

sessionStorage.setItem("isAdmin", "false");

const isAdmin = false;

export default function App({ isAdmin }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shoes" element={<Shoes shoes={shoesData} />} />
          <Route path="blog" element={<Blog />} />
          {isAdmin ? (
            <Route path="admin" element={<Admin />} />
          ) : (
            <Route path="*" element={<NoPage />} />
          )}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
