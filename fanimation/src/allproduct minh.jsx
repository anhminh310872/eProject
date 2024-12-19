import React, { useState } from 'react';


function Products({ data }) {
  const [dt] = useState(data);
  
  return (
    <>
      <div>
        <h1>cai nay lam filter</h1>
      </div>
      <div className="product-list">
      {dt.map((f, index) =>          
        <div className="product-card" key={index}>
          <div className="product-card-img-container">
          <img src={`./images/products/${f.Images}`} className="product-card-img" alt="" />
          </div>
          <div className="product-card-name">
          {f.Brand} - {f.Name}
          </div>
          <div className="product-card-btn">
            Buy now
          </div>
        </div>
        )}
      </div>
    </>
  );
}

export default Products;
