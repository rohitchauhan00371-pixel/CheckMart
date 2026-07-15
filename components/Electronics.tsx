import React from "react";

export default function Electronics  () {
   type item={
        image:string,
        link:string

   }
const items:item[]=[
  {
    image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600",
    link: "checkmart%20products.html?value=0005"
  },
  {
    image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",
    link: "checkmart%20products.html?value=0003"
  },
  {
    image:"https://images.unsplash.com/photo-1504707748692-419802cf939d?w=600",
    link: "checkmart%20products.html?value=0002"
  },
  {
    image:"https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600",
    link: "checkmart%20products.html?value=0006"
  },
  {
    image:"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600",
    link : "checkmart%20products.html?value=0001"
  },
  {
    image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
    link: "checkmart%20products.html?value=0002"
  }
]
  return (
    <div>
      <section className="todays-deals">
          
        <h1 style={{ display: "inline-block" }} className="tdh1">
            Electronics
      </h1>

          <a href="https://gbapkpro.com/"
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
        {items.map((item,index)=>(
          <div className="td-box" key={index}>
         <a href={item.link}>

          <img
          className="direct_image"
          key={index}
          src={item.image}
          alt="electronics"
          loading="lazy"
          />
          </a>
        </div>
        )
        
      
      )}
         
        </div>
    </section>
    </div>
  );
};