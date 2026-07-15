import  All  from "@/components/All";
import Banner from "@/components/Banner";
import Electronics from "@/components/Electronics";
import Foodies from "@/components/Foodies";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  const deals = {
    "name": "Top Deals",
    "data": [
      {
        link: "checkmart%20products.html?value=0005",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
        price: 339,
      },
      {
        link: "checkmart%20products.html?value=0003",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
        price: 58233,
      },
      {
        link: "checkmart%20products.html?value=0003",
        image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500",
        price: 58233,
      },
      {
        link: "checkmart%20products.html?value=0006",
        image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=500",
        price: 459,
      },
      {
        link: "checkmart%20products.html?value=0003",
        image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500",
        price: 58233,
      },
      {
        link: "checkmart%20products.html?value=0001",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
        price: 28000,
      },
      {
        link: "checkmart%20products.html?value=0002",
        image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500",
        price: 58233,
      },
      {
        link: "checkmart%20products.html?value=0002",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
        price: 58233,
      },
      {
        link: "checkmart%20products.html?value=0002",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500",
        price: 58233,
      },
      {
        link: "checkmart%20products.html?value=0003",
        image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500",
        price: 58233,
      },
      {
        link: "checkmart%20products.html?value=0001",
        image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500",
        price: 28000,
      },
      {
        link: "checkmart%20products.html?value=0003",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500",
        price: 58233,
      },
      {
        link: "checkmart%20products.html?value=0001",
        image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500",
        price: 28000,
      },
      {
        link: "checkmart%20products.html?value=0002",
        image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500",
        price: 58233,
      },
    ]
  };

  const deals2 = {
    "name": "Topals",
    "data": [
      {
        link: "checkmart%20products.html?value=0005",
        image: "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=500",
        price: 339,
      },
      {
        link: "checkmart%20products.html?value=0003",
        image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500",
        price: 58233,
      },
      {
        link: "checkmart%20products.html?value=0002",
        image: "https://images.unsplash.com/photo-1504707748692-419802cf939d?w=500",
        price: 58233,
      },
      {
        link: "checkmart%20products.html?value=0006",
        image: "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=500",
        price: 459,
      },
      {
        link: "checkmart%20products.html?value=0001",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
        price: 28000,
      },
      {
        link: "checkmart%20products.html?value=0002",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
        price: 58233,
      },
      {
        link: "checkmart%20products.html?value=0003",
        image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500",
        price: 58233,
      },
      {
        link: "checkmart%20products.html?value=0001",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
        price: 28000,
      }, {
        link: "checkmart%20products.html?value=0006",
        image: "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=500",
        price: 459,
      },
      {
        link: "checkmart%20products.html?value=0001",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
        price: 28000,
      },
      {
        link: "checkmart%20products.html?value=0002",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
        price: 58233,
      },
    ]
  };

  const deals3 = {
    "name": "Tops",
    "data": [
    {
      link: "checkmart%20products.html?value=0005",
      image:
        "https://images.unsplash.com/photo-1504707748692-419802cf939d?w=500",
      price: 58339,
    },
    {
      link: "checkmart%20products.html?value=0003",
      image:
        "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500",
      price: 58233,
    },
    {
      link: "checkmart%20products.html?value=0002",
      image:
        "https://images.unsplash.com/photo-1504707748692-419802cf939d?w=500",
      price: 58233,
    },
    {
      link: "checkmart%20products.html?value=0006",
      image:
        "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500",
      price: 42459,
    },
    {
      link: "checkmart%20products.html?value=0003",
      image:
        "https://images.unsplash.com/photo-1504707748692-419802cf939d?w=500",
      price: 58233,
    },
    {
      link: "checkmart%20products.html?value=0001",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
      price: 28000,
    },
    {
      link: "checkmart%20products.html?value=0002",
      image:
        "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500",
      price: 58233,
    },
    {
      link: "checkmart%20products.html?value=0002",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
      price: 58233,
    },
    {
      link: "checkmart%20products.html?value=0002",
      image:
        "https://images.unsplash.com/photo-1504707748692-419802cf939d?w=500",
      price: 58233,
    },
    {
      link: "checkmart%20products.html?value=0003",
      image:
        "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500",
      price: 58233,
    },
    {
      link: "checkmart%20products.html?value=0001",
      image:
        "https://images.unsplash.com/photo-1504707748692-419802cf939d?w=500",
      price: 28000,
    },
    {
      link: "checkmart%20products.html?value=0003",
      image:
        "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500",
      price: 58233,
    },
    {
      link: "checkmart%20products.html?value=0001",
      image:
        "https://images.unsplash.com/photo-1504707748692-419802cf939d?w=500",
      price: 28000,
    },
    {
      link: "checkmart%20products.html?value=0002",
      image:
        "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500",
      price: 58233,
    },
  ]
  }
  return (
    <>
      <Banner />
      <All deals={deals} />
      <All deals={deals2} />
      <Electronics />
      <Foodies />
      <All deals={deals3} />
      <Footer />
    </>
  );
}