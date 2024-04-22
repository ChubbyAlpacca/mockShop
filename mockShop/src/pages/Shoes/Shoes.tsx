import React, { useEffect, useState } from "react";
import ShoeTile from "./ShoeTile";
import "./css/Shoes.css";

interface Shoe {
  brand: string;
  model: string;
  description: string;
  imgPath: () => Promise<{ default: string }>;
  price: string;
  onSale: boolean;
  salePrice: string | null;
}

interface ShoeListProps {
  shoes: Shoe[];
}

export const Shoes: React.FC<ShoeListProps> = ({ shoes }) => {
  return (
    <>
      <div className="content">
        <div className="shoe-list">
          {shoes.map((shoe, index) => (
            <ShoeTile key={index} shoe={shoe} />
          ))}
        </div>
      </div>
    </>
  );
};
