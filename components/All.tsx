import React from 'react'

type deal = {
  link: string,
  image: string,
  price: number
};

type deals = {
  name : string,
  data : deal[]
}


type AllProps = {
  deals : deals
}


export default function All  (props: AllProps)  {

  console.log(props.deals.data)

  return (

    <div>
      <section className="todays-deals">

        <h1 style={{ display: "inline-block" }} className="tdh1">{props.deals.name}</h1>
        <a href="https://gbapkpro.com/"
          style={{ color: "#007084", textDecoration: "none", display: "inline" }} className="tda">See all details</a>
        <div className="deals-container">
          {
            props.deals.data.map((deal, i) => (
              <div className="td-box" key={i}>
                <a href={deal.link}>
                  <div className="td-box_image_container"><img src={deal.image} alt="top deal image" loading="lazy" /></div>
                  <h6>₹ {deal.price}</h6></a>
              </div>
            ))
          }
        </div>
      </section>
    </div >
  )
}
