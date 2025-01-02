import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import './assets/product.css'

function ProductWall({ data }) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('query') ? queryParams.get('query').toLowerCase() : '';

  const filteredProducts = useMemo(() => {
    return data.filter((product) => {
      const productBrand = product.Brand ? product.Brand.toLowerCase() : '';
      const productCategory = product.Category ? product.Category.toLowerCase() : '';

      return productBrand.includes(query) || productCategory.includes(query);
    });
  }, [query, data]);

  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const parallaxOffset = scrollY * -0.3;
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${parallaxOffset}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isCartVisible, setCartVisible] = useState(false);
  const [cart, setCart] = useState([]);

  const toggleCart = () => {
    setCartVisible(!isCartVisible);
    const mainContent = document.querySelector(".main-content");
    if (mainContent) {
      mainContent.classList.toggle("shifted", !isCartVisible);
    }
  };
  const filteredData = location.state?.filteredData || [];

  const handleQuantityChange = (productId, change) => {
    setCartItems((prevCartItems) =>
      prevCartItems
        .map((item) =>
          item.id === productId ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    console.log("Adding to cart:", product);
    setCartItems((prevCartItems) => {
      const existingProductIndex = prevCartItems.findIndex((item) => item.ID === product.ID);

      if (existingProductIndex !== -1) {
        const updatedCart = [...prevCartItems];
        updatedCart[existingProductIndex].quantity += 1;
        console.log("Updated cart:", updatedCart);
        return updatedCart;
      } else {
        const updatedCart = [...prevCartItems, { ...product, quantity: 1 }];
        console.log("New product added:", updatedCart);
        return updatedCart;
      }
    });
  };


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
    priceRange: { min: "", max: "" },
  });

  const handleCheckboxChange = (field, value, isChecked) => {
    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters };

      if (isChecked) {
        if (field === "blade") {
          newFilters[field] = [...newFilters[field], parseInt(value)];
        } else {
          newFilters[field] = [...newFilters[field], value];
        }
      } else {
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
    setPopupData(null);
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
      <nav className={`secondary-navbar ${showSecondaryNavbar ? 'visible' : ''}`} id="secondary-navbar" ref={parallaxRef}>
        <ul>
          <li id="filter-icon" onClick={toggleFilterBox}>
            <a href="#" >
              <img src="/images/icon-filter.png" alt="Filter Icon" />
            </a>
          </li>
          <li>
            <Link to={'/products'}>All Products</Link>
          </li>
          <li>
            <Link to={'/products/ceiling'}>Ceiling</Link>
          </li>
          <li>
            <Link to={'/products/pedestal'}>Pedestal</Link>
          </li>
          <li>
            <Link to={'/products/wall'} style={{ fontWeight: "bolder" }}>Wall</Link>
          </li>
          <li>
            <Link to={'/products/exhaust'}>Exhaust</Link>
          </li>
          <li>
            <Link to={'/products/accessories'}>Accessories</Link>
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
                <button variant="danger" className="clear-button" onClick={clearFilters}>Clear</button>
                <button variant="success" className="apply-button" onClick={applyFilters}>Apply</button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="main-content">
        <div className="product-list">
          {filteredProducts.length === 0 ? (
            <h1>No results found.</h1>
          ) : (
            filteredProducts.map((product, index) => (
              <div className="product-card" key={index}>
                <div className="product-card-img-container">
                  <img src={`/images/products/${product.Images[0]}`} className="product-card-img" alt="" />
                </div>
                <div className="product-card-name">
                  {product.Brand} - {product.Name}
                  <div className="product-card-price">
                    ${product.Price}
                  </div>
                </div>
                <div className="product-card-btn" onClick={() => handleBuyNow(product)}>
                  More Info
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {popupData && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-container" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={closePopup}>
              ×
            </button>
            <div className="popup-image">
              {/* thay cái này với popup */}
              <img src={`/images/products/${popupData.Images[0]}`} alt={popupData.Name} />
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
                <button className="add-to-card" onClick={() => {
                  handleAddToCart(popupData);
                  alert('Product added to cart!');
                }}>
                  Add to Cart
                </button>
              </div>
              <ReviewSection />
            </div>
          </div>
        </div>
      )}
      <div className='showcart'>
        <div className={`cart-button ${isCartVisible ? 'show' : ''}`} onClick={() => toggleCart()}>
          <div className="cart-icon">
            <i class="fas fa-shopping-cart"></i>
          </div>
          <div className="cart-quantity">
            0
          </div>
        </div>


        <div className={`carttab ${isCartVisible ? 'show' : ''}`}>
          <h1>Shopping cart</h1>
          <div className="listcart">
            {cartItems.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              cartItems.map((item, index) => (
                <div className="item" key={index}>
                  <div className="image">
                    <img src={`/images/products/${item.Images[0]}`} alt={item.Name} />
                  </div>
                  <div className="name">{item.Name}</div>
                  <div className="price">${item.Price}</div>
                  <div className="quantity">
                    <span className="minus" onClick={() => handleQuantityChange(item.id, -1)}>
                      <i className="fa-solid fa-minus" />
                    </span>
                    <span>{item.quantity}</span>
                    <span className="plus" onClick={() => handleQuantityChange(item.id, 1)}>
                      <i className="fa-solid fa-plus" />
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="btncart">
            <h3>Total: ${cartItems.reduce((total, item) => Math.round(total + item.Price * item.quantity * 100.0) / 100.0, 0)}</h3>
            <button className="purchase">
              <strong>Purchase</strong>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductWall;
