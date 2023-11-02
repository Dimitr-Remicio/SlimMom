import React, { useState } from "react";
import sprite from '../assets/sprite.svg';

const inputStyle = {
  margin: "0px 15px",
  borderTop: "none",
  borderRight: "none",
  borderLeft: "none",
  borderBottom: "1px solid rgb(224, 224, 224)",
  outline: "none",
  backgroundColor: "transparent",
  color: "rgb(155, 159, 170)",
  overflow: "hidden",
  textOverflow: "ellipsis",
  fontSize: "20px",
};

function DiaryPage() {
  const [productName, setProductName] = useState("");
  const [grams, setGrams] = useState("");
  const [products, setProducts] = useState([]);

  const handleAddProduct = () => {
    if (productName && grams) {
      setProducts([...products, { name: productName, grams }]);
      setProductName("");
      setGrams("");
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter product name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          style={{...inputStyle, width: "240px"}}
        />
        <input
          type="number"
          placeholder="Grams"
          value={grams}
          onChange={(e) => setGrams(e.target.value)}
          style={{...inputStyle, width: "140px"}}
        />
        <button
          style= {{
            WebkitAppearance: "none",
            borderRadius: "50%",
            cursor: "pointer",
            background: "#FC842D",
            border: "none",
            boxShadow: "rgba(252, 132, 45, 0.5) 0px 4px 10px",
          }}
          onClick={handleAddProduct}
        >
          <svg className="" viewBox="0 0 12 16" width="55" height="50">
            <use href={sprite + "#plus-ico"}></use>
          </svg>
        </button>
      </div>
      {products.length === 0 && <div style={{margin: '60px 13px'}}>No products in diary for this day</div>}
      {products.map((product, index) => (
        <div key={index}>
          {product.name} - {product.grams} grams
        </div>
      ))}
    </div>
  );
}

export default DiaryPage;
