import React from 'react'

const Foodies = () => {
type acer = {
  link: string;
  image: string;
  price: number;
  name: string;
};

const acers: acer[] = [
  {
    link: "checkmart%20products.html?value=0003",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600",
    price: 58233,
    name: 'elm Aspire 5 A517-52-75N6 Laptop | 17.3" Full HD IPS Display | 11th Gen Intel Core i7-1165G7 | Intel Iris Xe Graphics | 16GB DDR4 | 512GB SSD | WiFi 6 | Fingerprint Reader | BL Keyboard | Windows 11'
  },
  {
    link: "checkmart%20products.html?value=0001",
    image: "https://images.unsplash.com/photo-1504707748692-419802cf939d?w=600",
    price: 28000,
    name: "HP Laptop 15s, Intel Celeron N4500, 15.6 inch(39.6cm) HD Laptop (8GB RAM,512GB SSD, Intel UHD Graphics, Dual Speakers, Numeric Keypad, Alexa, Win 11, MSO 21, Natural Silver, 1.69 Kgs) Fashion 15s-fq3071TU"
  },
  {
    link: "checkmart%20products.html?value=0003",
    image: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=600",
    price: 58233,
    name: 'elm Aspire 5 A517-52-75N6 Laptop | 17.3" Full HD IPS Display | 11th Gen Intel Core i7-1165G7 | Intel Iris Xe Graphics | 16GB DDR4 | 512GB SSD | WiFi 6 | Fingerprint Reader | BL Keyboard | Windows 11'
  },
  {
    link: "checkmart%20products.html?value=0001",
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600",
    price: 28000,
    name: "HP Laptop 15s, Intel Celeron N4500, 15.6 inch(39.6cm) HD Laptop (8GB RAM,512GB SSD, Intel UHD Graphics, Dual Speakers, Numeric Keypad, Alexa, Win 11, MSO 21, Natural Silver, 1.69 Kgs) Fashion 15s-fq3071TU"
  },
  {
    link: "checkmart%20products.html?value=0001",
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600",
    price: 28000,
    name: "HP Laptop 15s, Intel Celeron N4500, 15.6 inch(39.6cm) HD Laptop (8GB RAM,512GB SSD, Intel UHD Graphics, Dual Speakers, Numeric Keypad, Alexa, Win 11, MSO 21, Natural Silver, 1.69 Kgs) Fashion 15s-fq3071TU"
  },
  {
    link: "checkmart%20products.html?value=0002",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600",
    price: 58233,
    name: 'elm Aspire 5 A517-52-75N6 Laptop | 17.3" Full HD IPS Display | 11th Gen Intel Core i7-1165G7 | Intel Iris Xe Graphics | 16GB DDR4 | 512GB SSD | WiFi 6 | Fingerprint Reader | BL Keyboard | Windows 11'
  },
  {
    link: "checkmart%20products.html?value=0003",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600",
    price: 58233,
    name: 'elm Aspire 5 A517-52-75N6 Laptop | 17.3" Full HD IPS Display | 11th Gen Intel Core i7-1165G7 | Intel Iris Xe Graphics | 16GB DDR4 | 512GB SSD | WiFi 6 | Fingerprint Reader | BL Keyboard | Windows 11'
  },
  {
    link: "checkmart%20products.html?value=0001",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600",
    price: 28000,
    name: "HP Laptop 15s, Intel Celeron N4500, 15.6 inch(39.6cm) HD Laptop (8GB RAM,512GB SSD, Intel UHD Graphics, Dual Speakers, Numeric Keypad, Alexa, Win 11, MSO 21, Natural Silver, 1.69 Kgs) Fashion 15s-fq3071TU"
  },
  {
    link: "checkmart%20products.html?value=0002",
    image: "https://images.unsplash.com/photo-1504707748692-419802cf939d?w=600",
    price: 58233,
    name: 'elm Aspire 5 A517-52-75N6 Laptop | 17.3" Full HD IPS Display | 11th Gen Intel Core i7-1165G7 | Intel Iris Xe Graphics | 16GB DDR4 | 512GB SSD | WiFi 6 | Fingerprint Reader | BL Keyboard | Windows 11'
  },
  {
    link: "checkmart%20products.html?value=0002",
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600",
    price: 58233,
    name: 'elm Aspire 5 A517-52-75N6 Laptop | 17.3" Full HD IPS Display | 11th Gen Intel Core i7-1165G7 | Intel Iris Xe Graphics | 16GB DDR4 | 512GB SSD | WiFi 6 | Fingerprint Reader | BL Keyboard | Windows 11'
  },
  {
    link: "checkmart%20products.html?value=0001",
    image: "https://images.unsplash.com/photo-1504707748692-419802cf939d?w=600",
    price: 28000,
    name: "HP Laptop 15s, Intel Celeron N4500, 15.6 inch(39.6cm) HD Laptop (8GB RAM,512GB SSD, Intel UHD Graphics, Dual Speakers, Numeric Keypad, Alexa, Win 11, MSO 21, Natural Silver, 1.69 Kgs) Fashion 15s-fq3071TU"
  },
  {
    link: "checkmart%20products.html?value=0002",
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600",
    price: 58233,
    name: 'elm Aspire 5 A517-52-75N6 Laptop | 17.3" Full HD IPS Display | 11th Gen Intel Core i7-1165G7 | Intel Iris Xe Graphics | 16GB DDR4 | 512GB SSD | WiFi 6 | Fingerprint Reader | BL Keyboard | Windows 11'
  },
  {
    link: "checkmart%20products.html?value=0003",
    image: "https://images.unsplash.com/photo-1504707748692-419802cf939d?w=600",
    price: 58233,
    name: 'elm Aspire 5 A517-52-75N6 Laptop | 17.3" Full HD IPS Display | 11th Gen Intel Core i7-1165G7 | Intel Iris Xe Graphics | 16GB DDR4 | 512GB SSD | WiFi 6 | Fingerprint Reader | BL Keyboard | Windows 11'
  },
  {
    link: "checkmart%20products.html?value=0003",
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600",
    price: 58233,
    name: 'elm Aspire 5 A517-52-75N6 Laptop | 17.3" Full HD IPS Display | 11th Gen Intel Core i7-1165G7 | Intel Iris Xe Graphics | 16GB DDR4 | 512GB SSD | WiFi 6 | Fingerprint Reader | BL Keyboard | Windows 11'
  }
];

  return (
    <div>
      <section className="products">
    <h1 style={{display: "inline-block"}} className="tdh1">Foodies</h1>
    <a href="https://www.google.com/" style={{color:"#007084", textDecoration: "none", display: "inline"}} className="tda">See all details</a>

    <div className="product_container">
      {acers.map((acer,i)=>(
      <div className="main_products" key={i}>
            <a href={acer.link}>
              <div className="main_products_image_container">
                <img src={acer.image} alt="Electronic items" loading="lazy" />
                </div>
              
            <div className="rating">
  <div
    className="rating_stars"
    style={{
      display: "flex",
      justifyContent: "center",
      fontSize: "10rem",
      background: "linear-gradient(to right, gold 20%, grey 20%)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent",
      boxSizing: "border-box",
      margin: "3rem 0",
      padding: "0",
    }}
  >
    <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i>
  </div>
</div>
        <p>{acer.name}</p>
            <h2>₹ {acer.price}</h2>
            <h3>Add to bag</h3></a>
    
          </div>
      ))}
          </div>
    </section>
    </div>
  )
}

export default Foodies
