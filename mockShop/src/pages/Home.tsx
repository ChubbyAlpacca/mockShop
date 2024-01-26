import vintagePhoto from "../assets/vintage_stuff.jpeg";
import "./css/Home.css";

function Home() {
  return (
    <>
      <div className="photoBorder">
        <img src={vintagePhoto} alt="stuff" className="vintagePhoto" />
      </div>
    </>
  );
}

export default Home;
