import { useNavigate } from "react-router-dom";

function Home() {
    const nav = useNavigate();

    return (
        <div className="home">
            <section className="top-home">
                <div className="collections2024">
                    2024 COLLECTIONS
                </div> <br />
                <button className="shop-now-btn" onClick={() => nav('/products')}>SHOP NOW</button>
            </section>
            <section className="home-intro home-space">
                <div className="home-title">Established in 1994</div>
                <div className="home-intro-grid-row">
                    <div className="home-intro-grid-column home-intro-grid-column-1">
                        <img src="./images/home-grid-1.png" />
                        <img src="./images/home-grid-2.png" />
                        <img src="./images/home-grid-3.png" />
                        <img src="./images/home-grid-4.png" />
                    </div>
                    <div className="home-intro-grid-column home-intro-grid-column-2">
                        <img src="./images/home-grid-5.png" />
                        <div className="home-intro-grid-text">
                            <p>For over 30 years, we have been a forerunner in realiable cooling technology and stylish, elegant home aesthetics. Offering a wide range of high-quality, reliable fans for every need—whether for your home, office, or business.</p>
                            <p>Explore our collection today and enjoy the comfort and quality that comes with decades of expertise.</p>
                            <button className="home-intro-btn" onClick={() => nav('/products')}>All products</button>
                        </div>
                        <img src="./images/home-grid-6.png" />
                    </div>
                    <div className="home-intro-grid-column home-intro-grid-column-3">
                        <img src="./images/home-grid-7.png" />
                        <img src="./images/home-grid-8.png" />
                        <img src="./images/home-grid-9.png" />
                        <img src="./images/home-grid-10.png" />
                    </div>
                </div>

            </section>
            <div className="home-space" />
            <div className="home-title">Browse our latest products</div>
            <div className="latest-product-gallery">
                to be added later
            </div>
            <div className="home-space" />
            <div className="home-title">All products</div>
            <section className="home-product-list">
                <div className="home-product-list-item">

                </div>
            </section>
        </div>
    );
}

export default Home;