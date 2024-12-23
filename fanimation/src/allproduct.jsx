import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './product.css';

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

  const [dt] = useState(data);

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
            <div className="product-card-btn" onClick={() => handleBuyNow(f)}>
              Buy now
            </div>
          </div>
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
