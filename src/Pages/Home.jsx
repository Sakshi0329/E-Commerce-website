  // Home.jsx
  import React, { useEffect, useState } from "react";
  import Slider from "react-slick";
  import "slick-carousel/slick/slick.css";
  import "slick-carousel/slick/slick-theme.css";

  // ✅ Placeholder fallback image
  const fallbackImage = "https://via.placeholder.com/250x250.png?text=No+Image";

  // ✅ Local images
  import Img1 from "../Image/Imgs1.jpg";
  import Img2 from "../Image/Imgs2.jpg";
  import Img3 from "../Image/imag1.webp";
  import Img4 from "../Image/imag2.webp";

  export const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data || []); // fallback if empty
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setProducts([]); // fallback
      }
    };

    fetchProducts();
  }, []);


    // ✅ Slider settings
    const bannerSettings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 700,
      autoplaySpeed: 2500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };

    return (
      <div className="container-fluid px-3 mt-4">
        {/* 🔝 Image Slider */}
        <Slider {...bannerSettings} className="mb-5 rounded-4 shadow">
          {/* Local Images */}
          {[Img1, Img2, Img3, Img4].map((img, i) => (
            <div key={i}>
              {/* ✅ Mobile view */}
              <img
                src={img}
                alt={`Banner ${i + 1}`}
                className="d-block d-sm-none w-100 rounded-4"
                style={{
                  height: "180px",
                  objectFit: "cover",
                }}
              />
              {/* ✅ Desktop/Tablet view */}
              <img
                src={img}
                alt={`Banner ${i + 1}`}
                className="d-none d-sm-block w-100 rounded-4"
                style={{
                  height: "400px",
                  objectFit: "fill",
                }}
              />
            </div>
          ))}

          {/* Online Images */}
          {[
            "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=1200",
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200",
          ].map((img, i) => (
            <div key={`online-${i}`}>
              <img
                src={img}
                alt={`Online Banner ${i + 1}`}
                className="d-block d-sm-none w-100 rounded-4"
                style={{
                  height: "180px",
                  objectFit: "cover",
                }}
              />
              <img
                src={img}
                alt={`Online Banner ${i + 1}`}
                className="d-none d-sm-block w-100 rounded-4"
                style={{
                  height: "400px",
                  objectFit: "fill",
                }}
              />
            </div>
          ))}
        </Slider>

        {/* 🛍 Products */}
        <h2 className="text-center fw-bold mb-4" style={{ color: "#7b2ff7" }}>
          ✨ Featured Products
        </h2>
        <div className="row g-4">
          {products.map((p) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={p.id}>
              <div className="card border-0 shadow h-100 rounded-4 hover-zoom">
                {/* ✅ Fixed image container */}
                <div
                  className="d-flex justify-content-center align-items-center bg-light rounded-top-4"
                  style={{ height: "250px", overflow: "hidden" }}
                >
                  <img
                    src={p.image || fallbackImage}
                    alt={p.title}
                    className="img-fluid"
                    style={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                      objectFit: "contain",
                    }}
                    onError={(e) => {
                      e.target.src = fallbackImage;
                    }}
                  />
                </div>

                {/* ✅ Product Info */}
                <div className="card-body text-center">
                  <h6 className="text-truncate">{p.title}</h6>
                  <p className="fw-bold text-danger">₹{p.price}</p>
                  <button
                    className="btn btn-sm w-100"
                    style={{
                      background: "linear-gradient(90deg,#f107a3,#7b2ff7)",
                      color: "white",
                    }}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
