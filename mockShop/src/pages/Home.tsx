import { Navbar } from "../features/Navbar";
import { shoesData } from "../data/shoesData";
import { Shoes } from "./shoes";
import "./Home.css";

function Home() {
  return (
    <>
      <Navbar />
      <div className="photoBorder">
        {/* <img src={vintagePhoto} alt="stuff" className="vintagePhoto" /> */}
      </div>
      <Shoes shoes={shoesData} />
    </>
  );
}

export default Home;
