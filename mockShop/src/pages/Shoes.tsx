import React from "react";
import "./Shoes.css";
import { Navbar } from "../features/Navbar";

interface Shoe {
  brand: string;
  model: string;
  description: string;
  imgPath: string;
  price: string;
  onSale: boolean;
  salePrice: string | null;
}

interface ShoeTileProps {
  shoe: Shoe;
}

const ShoeTile: React.FC<ShoeTileProps> = ({ shoe }) => {
  return (
    <div className="shoe-tile">
      <h2>{shoe.brand}</h2>
      <h3>{shoe.model}</h3>
      <p>{shoe.description}</p>
      <img src={shoe.imgPath} alt={`${shoe.brand} ${shoe.model}`} />
      <p>{shoe.price}</p>
      {shoe.onSale && <p>Sale Price: £{shoe.salePrice}</p>}
    </div>
  );
};

interface ShoeListProps {
  shoes: Shoe[];
}

export const Shoes: React.FC<ShoeListProps> = ({ shoes }) => {
  return (
    <>
      <Navbar />
      <div className="shoe-list">
        {shoes.map((shoe, index) => (
          <ShoeTile key={index} shoe={shoe} />
        ))}
      </div>
    </>
  );
};
