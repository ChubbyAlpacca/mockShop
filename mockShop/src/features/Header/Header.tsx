import Layout from "./Layout";
import logo from "../../assets/logo.jpg";
import "./css/Header.css";

export const Header = () => {
  return (
    <>
      <img src={logo} className="logo" />
      <Layout />
    </>
  );
};
