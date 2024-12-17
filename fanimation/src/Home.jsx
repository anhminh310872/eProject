import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

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
                        <img src="./images/home-grid-8.png" alt="" />
                        <img src="./images/home-grid-10.png" alt="" />
                    </div>
                    <div className="home-intro-grid-column home-intro-grid-column-2">
                        <img src="./images/home-grid-4.png" alt="" />
                        <div className="home-intro-grid-text">
                            <p>For over 30 years, we have been a forerunner in realiable cooling technology and stylish, elegant home aesthetics. Offering a wide range of high-quality, reliable fans for every need—whether for your home, office, or business.</p>
                            <p>Explore our collection today and enjoy the comfort and quality that comes with decades of expertise.</p>
                            <button className="home-intro-btn" onClick={() => nav('/products')}>All products</button>
                        </div>
                    </div>
                    <div className="home-intro-grid-column home-intro-grid-column-3">
                        <img src="./images/home-grid-6.png" alt="" />
                        <img src="./images/home-grid-9.png" alt="" />
                    </div>
                </div>
            </section>

            <div className="home-space" />
            <div className="home-title">Browse our latest products</div>
            <section className="latest-product-gallery">
                {/* update link to each individual category of item later */}
                <div className="latest-product-gallery-carousel">
                    <Carousel interval={5000} pause={'hover'} variant={'dark'}>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="./images/home-latest-product-kdk-w56wv.png"
                                alt="KDK W56WV Ceiling Fan"
                                onClick={() => nav('/products')}
                            />
                            <Carousel.Caption>
                                <div className="latest-product-gallery-caption">
                                    <h4>KDK W56WV Ceiling Fan</h4>
                                    <p>5.690.000 đ</p>
                                </div>
                                <div className="latest-product-gallery-caption-small">
                                    <h6>KDK W56WV Ceiling Fan</h6>
                                    <p>5.690.000 đ</p>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="./images/home-latest-product-kdk-m56xr.png"
                                alt="KDK M56XR Ceiling Fan"
                                onClick={() => nav('/products')}
                            />
                            <Carousel.Caption>
                                <div className="latest-product-gallery-caption">
                                    <h4>KDK M56XR Ceiling Fan</h4>
                                    <p>3.390.000 đ</p>
                                </div>
                                <div className="latest-product-gallery-caption-small">
                                    <h6>KDK M56XR Ceiling Fan</h6>
                                    <p>3.390.000 đ</p>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="./images/home-latest-product-kangaroo-kgsf056051.png"
                                alt="Kangaroo KGSF056051 Ceiling Fan"
                                onClick={() => nav('/products')}
                            />
                            <Carousel.Caption>
                                <div className="latest-product-gallery-caption">
                                    <h4>Kangaroo KGSF056051 Ceiling Fan</h4>
                                    <p>2.290.000 đ</p>
                                </div>
                                <div className="latest-product-gallery-caption-small">
                                    <h6>Kangaroo KGSF056051 Ceiling Fan</h6>
                                    <p>2.290.000 đ</p>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="./images/home-latest-product-mitsubishi-c56-ra5-cy-gy.png"
                                alt="Mitsubishi C56-RA5 CY-GY"
                                onClick={() => nav('/products')}
                            />
                            <Carousel.Caption>
                                <div className="latest-product-gallery-caption">
                                    <h4>Mitsubishi C56-RA5 CY-GY</h4>
                                    <p>5.490.000 đ</p>
                                </div>
                                <div className="latest-product-gallery-caption-small">
                                    <h6>Mitsubishi C56-RA5 CY-GY</h6>
                                    <p>5.490.000 đ</p>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    <button className="latest-product-gallery-btn" onClick={() => nav('/products')}>
                        Learn More
                    </button>
                </div>
            </section>

            <div className="home-space" />
            <section className="home-product-list">
                <div className="home-title">All products</div>
                <div className="home-product-list-row">
                    {/* update link to each individual category of item later */}
                    <div className="home-product-list-item" onClick={() => nav('/products')}>
                        <div className="home-product-list-item-img-frame">
                            <img src="./images/home-product-list-wall.png" className="home-product-list-item-img home-product-list-item-img-wall  justify-content-center" alt="" />
                        </div>
                        <div className="home-product-list-item-text">Wall</div>
                    </div>
                    <div className="home-product-list-item" onClick={() => nav('/products')}>
                        <div className="home-product-list-item-img-frame">
                            <img src="./images/home-product-list-ceiling.png" className="home-product-list-item-img home-product-list-item-img-ceiling justify-content-center" alt="" />
                        </div>
                        <div className="home-product-list-item-text">Ceiling</div>
                    </div>
                    <div className="home-product-list-item" onClick={() => nav('/products')}>
                        <div className="home-product-list-item-img-frame justify-content-center">
                            <img src="./images/home-product-list-pedestal.png" className="home-product-list-item-img home-product-list-item-img-pedestal" alt="" />
                        </div>
                        <div className="home-product-list-item-text">Pedestal</div>
                    </div>
                    <div className="home-product-list-item" onClick={() => nav('/products')}>
                        <div className="home-product-list-item-img-frame">
                            <img src="./images/home-product-list-exhaust.png" className="home-product-list-item-img home-product-list-item-img-exhaust justify-content-center" alt="" />
                        </div>
                        <div className="home-product-list-item-text">Exhaust</div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;