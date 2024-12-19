import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Products({ data }) {
  const nav = useNavigate();
  const [showSecondaryNavbar, setShowSecondaryNavbar] = useState(true);
  const [showFilterBox, setShowFilterBox] = useState(false);

  const toggleSecondaryNavbar = (e) => {
    e.preventDefault();
    setShowSecondaryNavbar((prev) => !prev);
  };

  const toggleFilterBox = (e) => {
    e.preventDefault();
    setShowFilterBox((prev) => !prev);
  };

  const [dt] = useState(data);

  return (
    <>
      <nav className={`secondary-navbar ${showSecondaryNavbar ? 'visible' : ''}`} id="secondary-navbar">
        <ul>
          <li>
            <a href="#" id="filter-icon" onClick={toggleFilterBox}>
              <img src="./images/icon-filter.png" alt="Filter Icon" />
            </a>
          </li>
          <li>
            <a href="#">All Products</a>
          </li>
          <li>
            <a href="#">Ceiling</a>
          </li>
          <li>
            <a href="#">Pedestal</a>
          </li>
          <li>
            <a href="#">Wall</a>
          </li>
          <li>
            <a href="#">Exhaust</a>
          </li>
          <li>
            <a href="#">Accessories</a>
          </li>
        </ul>
        <div className={`filter-box-container ${showFilterBox ? 'show' : ''}`} id="filter-box-container">
          <div className="filter-box" id="filter-box">
            <div className="filter-elements">
              <div className="filter-table">
                <table>
                  <thead>
                    <tr>
                      <th>
                        <h3>Category</h3>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <label>
                          <input type="checkbox" name="category" /> Ceiling
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>
                          <input type="checkbox" name="category" /> Pedestal
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>
                          <input type="checkbox" name="category" /> Wall
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>
                          <input type="checkbox" name="category" /> Accessories
                        </label>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="filter-table">
                <table>
                  <thead>
                    <tr>
                      <th>
                        <h3>Type</h3>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <label>
                          <input type="checkbox" name="type" /> 3-Blade
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>
                          <input type="checkbox" name="type" /> 4-Blade
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>
                          <input type="checkbox" name="type" /> 5-Blade
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>
                          <input type="checkbox" name="type" /> 6-Blade
                        </label>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="filter-table">
                <table>
                  <thead>
                    <tr>
                      <th>
                        <h3>Price Range</h3>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>
                        <label>
                          <input
                            type="number"
                            placeholder="From..."
                            name="price-from"
                            min={0}
                          />
                          <input
                            type="number"
                            placeholder="To..."
                            name="price-to"
                            min={0}
                          />
                        </label>
                        <br />
                        <button className="apply-button" id='button-price'>Apply</button>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="filter-table">
                <table>
                  <thead>
                    <tr>
                      <th>
                        <h3>Color</h3>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <label>
                          <input type="checkbox" name="color" /> White
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>
                          <input type="checkbox" name="color" /> Black
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>
                          <input type="checkbox" name="color" /> Gray
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>
                          <input type="checkbox" name="color" /> Other Color
                        </label>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="filter-table">
                <table>
                  <thead>
                    <tr>
                      <th>
                        <h3>Brands</h3>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <label>
                          <input type="checkbox" name="brands" /> Brand 1
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>
                          <input type="checkbox" name="brands" /> Brand 2
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>
                          <input type="checkbox" name="brands" /> Brand 3
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>
                          <input type="checkbox" name="brands" /> Brand 4
                        </label>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="buttons-container">
                <button className="clear-button">Clear</button>
                <button className="apply-button">Apply</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
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
