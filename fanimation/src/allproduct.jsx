import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './assets/product.css'


function Products({ data }) {
  const nav = useNavigate();
  const [showSecondaryNavbar, setShowSecondaryNavbar] = useState(true);
  const [showFilterBox, setShowFilterBox] = useState(false);
  const [popupData, setPopupData] = useState(null);

  const toggleSecondaryNavbar = (e) => {
    e.preventDefault();
    setShowSecondaryNavbar((prev) => !prev);
  };

  const toggleFilterBox = (e) => {
    e.preventDefault();
    setShowFilterBox((prev) => !prev);
  };

  const [dt, setDt] = useState(data);
  const [filters, setFilters] = useState({
    color: [],
    blade: [],
    brand: [],
    priceRange: { min: "", max: "" }, // Default initialized price range object
  });

  const handleCheckboxChange = (field, value, isChecked) => {
    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters };

      if (isChecked) {
        // For number-based filters like blade, use parseInt
        if (field === "blade") {
          newFilters[field] = [...newFilters[field], parseInt(value)];
        } else {
          newFilters[field] = [...newFilters[field], value];
        }
      } else {
        // Remove value from the filters
        newFilters[field] = newFilters[field].filter((item) => item !== value);
      }

      return newFilters;
    });
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      priceRange: {
        ...prevFilters.priceRange,
        [name]: value
      }
    }));
  };

  const handlePriceInput = (e) => {
    const { value } = e.target;
    if (value.includes('-')) {
      e.target.value = value.replace('-', '');
    }
  };

  const applyFilters = () => {
    let filteredData = data;

    for (const field in filters) {
      if (filters[field].length > 0) {
        filteredData = filteredData.filter((product) => {
          if (field === 'color') {
            const colors = Array.isArray(product.Color)
              ? product.Color
              : product.Color.split(',').map(color => color.trim());

            if (!filters[field].includes('Other')) {
              return filters[field].some((filterColor) => {
                return colors.some((color) => color === filterColor);
              });
            }
            if (filters[field].includes('Other')) {
              return colors.some((color) => {
                if (['black', 'white', 'grey'].includes(color)) {
                  return filters[field].includes(color);
                }
                return !['black', 'white', 'grey'].includes(color) || filters[field].includes('Other');
              });
            }

            // If no specific conditions are met, return false
            return false;
          }

          if (field === 'blade') {
            return filters[field].includes(product.Blade);
          }

          if (field === 'brand') {
            return filters[field].includes(product.Brand);
          }

          return filters[field].includes(product[field]);
        });
      }
    }

    if (filters.priceRange.min !== "" || filters.priceRange.max !== "") {
      filteredData = filteredData.filter((product) => {
        const price = product.Price;
        const minPrice = filters.priceRange.min ? parseFloat(filters.priceRange.min) : -Infinity;
        const maxPrice = filters.priceRange.max ? parseFloat(filters.priceRange.max) : Infinity;

        return price >= minPrice && price <= maxPrice;
      });
    }

    setDt(filteredData);
  };

  const clearFilters = () => {
    setFilters({
      color: [],
      blade: [],
      brand: [],
      priceRange: { min: "", max: "" }
    });
  };

  const handleBuyNow = (product) => {
    setPopupData(product);
    console.log("Popup Data:", product);
  };
  const closePopup = () => {
    setPopupData(null); // Đóng popup
  };

  const ReviewSection = () => {
    const [userRating, setUserRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [userFeedback, setUserFeedback] = useState("");
    const [reviews, setReviews] = useState([
      { rating: 5, feedback: "Amazing product! Highly recommend it." },
      { rating: 4, feedback: "Very good quality but a bit expensive." },
    ]);

    const handleRating = (rating) => setUserRating(rating);

    const submitReview = () => {
      if (userRating && userFeedback.trim()) {
        setReviews([...reviews, { rating: userRating, feedback: userFeedback }]);
        setUserRating(0);
        setUserFeedback("");
      }
    };

    return (
      <div className="review-section">
        <h2><strong>User Reviews</strong></h2>
        <div className="rating-input">
          <h3>Rate this product</h3>
          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star ${hoverRating >= star || userRating >= star ? "active" : ""}`}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                onClick={() => handleRating(star)}
              >
                ★
              </span>
            ))}
          </div>
          <textarea
            placeholder="Write your feedback here..."
            value={userFeedback}
            onChange={(e) => setUserFeedback(e.target.value)}
          ></textarea>
          <button className="review-button" onClick={submitReview} disabled={!userRating || !userFeedback.trim()}>
            Submit Review
          </button>
        </div>
        <div className="review-list">
          <h3>Reviews Of Others</h3>
          {reviews.map((review, index) => (
            <div key={index} className="review-item">
              <div className="review-stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className={`star ${review.rating >= star ? "active" : ""}`}>
                    ★
                  </span>
                ))}
              </div>
              <p>{review.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

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
                        <h3>Type</h3>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <label>
                          <input type="checkbox" name="type" value="3" checked={filters.blade.includes(3)}
                            onChange={(e) => handleCheckboxChange('blade', parseInt(e.target.value), e.target.checked)} /> 3 blades
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>
                          <input type="checkbox" name="type" value="4" checked={filters.blade.includes(4)}
                            onChange={(e) => handleCheckboxChange('blade', parseInt(e.target.value), e.target.checked)} /> 4 blades
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>
                          <input type="checkbox" name="type" value="5" checked={filters.blade.includes(5)}
                            onChange={(e) => handleCheckboxChange('blade', parseInt(e.target.value), e.target.checked)} /> 5 blades
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>
                          <input type="checkbox" name="type" value="6" checked={filters.blade.includes(6)}
                            onChange={(e) => handleCheckboxChange('blade', parseInt(e.target.value), e.target.checked)} /> 6+ blades
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
                          $ <input
                            type="number"
                            placeholder="From..."
                            value={filters.priceRange.min}
                            onChange={handlePriceChange}
                            onInput={handlePriceInput}
                            name="min"
                            min="0"
                          /> ➔
                          $ <input
                            type="number"
                            placeholder="To..."
                            value={filters.priceRange.max}
                            onChange={handlePriceChange}
                            onInput={handlePriceInput}
                            name="max"
                            min="0"
                          />
                        </label>
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
                          <input type="checkbox" name="color" value="white" checked={filters.color.includes("white")}
                            onChange={(e) => handleCheckboxChange('color', e.target.value, e.target.checked)} /> White
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>
                          <input type="checkbox" name="color" value="black" checked={filters.color.includes("black")}
                            onChange={(e) => handleCheckboxChange('color', e.target.value, e.target.checked)} /> Black
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>
                          <input type="checkbox" name="color" value="grey" checked={filters.color.includes("grey")}
                            onChange={(e) => handleCheckboxChange('color', e.target.value, e.target.checked)} /> Grey
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>
                          <input type="checkbox" name="color" value="Other" checked={filters.color.includes("Other")}
                            onChange={(e) => handleCheckboxChange('color', e.target.value, e.target.checked)} /> Other colors
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
                          <input type="checkbox" name="brands" value="Panasonic" checked={filters.brand.includes("Panasonic")}
                            onChange={(e) => handleCheckboxChange('brand', e.target.value, e.target.checked)} /> Panasonic
                        </label>
                      </td>
                      <td>
                        <label>
                          <input type="checkbox" name="brands" value="Sharp" checked={filters.brand.includes("Sharp")}
                            onChange={(e) => handleCheckboxChange('brand', e.target.value, e.target.checked)} /> Sharp
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>
                          <input type="checkbox" name="brands" value="Mitsubishi" checked={filters.brand.includes("Mitsubishi")}
                            onChange={(e) => handleCheckboxChange('brand', e.target.value, e.target.checked)} /> Mitsubishi
                        </label>
                      </td>
                      <td>
                        <label>
                          <input type="checkbox" name="brands" value="KDK" checked={filters.brand.includes("KDK")}
                            onChange={(e) => handleCheckboxChange('brand', e.target.value, e.target.checked)} /> KDK
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>
                          <input type="checkbox" name="brands" value="Toshiba" checked={filters.brand.includes("Toshiba")}
                            onChange={(e) => handleCheckboxChange('brand', e.target.value, e.target.checked)} /> Toshiba
                        </label>
                      </td>
                      <td>
                        <label>
                          <input type="checkbox" name="brands" value="Kangaroo" checked={filters.brand.includes("Kangaroo")}
                            onChange={(e) => handleCheckboxChange('brand', e.target.value, e.target.checked)} /> Kangaroo
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>
                          <input type="checkbox" name="brands" value="Senko" checked={filters.brand.includes("Senko")}
                            onChange={(e) => handleCheckboxChange('brand', e.target.value, e.target.checked)} /> Senko
                        </label>
                      </td>
                      <td>
                        <label>
                          <input type="checkbox" name="brands" value="Asiavina" checked={filters.brand.includes("Asiavina")}
                            onChange={(e) => handleCheckboxChange('brand', e.target.value, e.target.checked)} /> Asiavina
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>
                          <input type="checkbox" name="brands" value="Sunhouse" checked={filters.brand.includes("Sunhouse")}
                            onChange={(e) => handleCheckboxChange('brand', e.target.value, e.target.checked)} /> Sunhouse
                        </label>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="buttons-container">
                <button className="clear-button" onClick={clearFilters}>Clear</button>
                <button className="apply-button" onClick={applyFilters}>Apply</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="product-list">
        {dt.length === 0 ? (
          <h1>No results found.</h1>
        ) : (
          dt.map((product, index) => (
            <div className="product-card" key={index}>
              <div className="product-card-img-container">
                <img src={`./images/products/${product.Images}`} className="product-card-img" alt="" />
              </div>
              <div className="product-card-name">
                {product.Brand} - {product.Name}
                <div className="product-card-price">
                  ${product.Price}
                </div>
              </div>
              <div className="product-card-btn" onClick={() => handleBuyNow(product)}>
                Buy now
              </div>
            </div>
          ))
        )}
      </div>
      {popupData && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-container" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={closePopup}>
              ×
            </button>
            <div className="popup-image">
            <img src={`./images/products/${popupData.Images}`} alt={popupData.Name} />
            </div>
            <div className="popup-content">
              <h1><strong>{popupData.Brand}- {popupData.Name}</strong></h1>
              <h3><strong>Outstanding features</strong></h3>
              <div>
                {popupData.Description && Array.isArray(popupData.Description) ? (
                  popupData.Description.map((desc, index) => (
                    <p key={index}>{desc}</p>
                  ))
                ) : (
                  <p>No description available.</p>
                )}
              </div>

              <div className="price">Price: ${popupData.Price}</div>
              <div className="popup-buttons">
                <button className="add-to-card" onClick={() => alert('Product added to cart!')}>
                  Add to Cart
                </button>
                <button className="buy-now">Buy Now</button>
              </div>
              <ReviewSection />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Products;
