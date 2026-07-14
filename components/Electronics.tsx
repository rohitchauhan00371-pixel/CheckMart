import React from "react";

const Electronics = () => {
  return (
    <>
      <div>
        <section className="todays-deals">
          <h1 style={{ display: "inline-block" }} className="tdh1">
            Electronics
          </h1>

          <a
            href="https://gbapkpro.com/"
            style={{
              color: "#007084",
              textDecoration: "none",
              display: "inline",
            }}
            className="tda"
          >
            See all details
          </a>

          <div className="deals-container">

            {/* Laptop */}
            <a href="checkmart products.html?value=0001">
              <img
                className="direct_image"
                src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600"
                alt="Laptop"
                loading="lazy"
              />
            </a>

            {/* Mobile */}
            <a href="checkmart products.html?value=0002">
              <img
                className="direct_image"
                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600"
                alt="Mobile"
                loading="lazy"
              />
            </a>

            {/* Watch */}
            <a href="checkmart products.html?value=0003">
              <img
                className="direct_image"
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600"
                alt="Watch"
                loading="lazy"
              />
            </a>

          

            {/* Mobile */}
            <a href="checkmart products.html?value=0005">
              <img
                className="direct_image"
                src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600"
                alt="Mobile"
                loading="lazy"
              />
            </a>

            {/* Watch */}
            <a href="checkmart products.html?value=0006">
              <img
                className="direct_image"
                src="https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600"
                alt="Watch"
                loading="lazy"
              />
            </a>

            {/* Mobile */}
            <a href="checkmart products.html?value=0008">
              <img
                className="direct_image"
                src="https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600"
                alt="Mobile"
                loading="lazy"
              />
            </a>

            {/* Watch */}
            <a href="checkmart products.html?value=0009">
              <img
                className="direct_image"
                src="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=600"
                alt="Watch"
                loading="lazy"
              />
            </a>

            {/* Laptop */}
            <a href="checkmart products.html?value=0010">
              <img
                className="direct_image"
                src="https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=600"
                alt="Laptop"
                loading="lazy"
              />
            </a>

          </div>
        </section>
      </div>
    </>
  );
};

export default Electronics;