import vintagePhoto from "./assets/vintage_stuff.jpeg";
import { Navbar } from "./features/Navbar";
import { shoesData } from "./data/shoesData";
import { Shoes } from "./pages/shoes";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="photoBorder">
        <img src={vintagePhoto} alt="stuff" className="vintagePhoto" />
      </div>
      <Shoes shoes={shoesData} />
    </>
    /* <Routes>
        <Route path="/shoes" element={<Shoes shoes={shoesData} />} />
        <Route path="/sale" />
        <Route path="/blog" />
        {/* Add more routes as needed */
    // </Routes> */}
  );
}

export default App;
