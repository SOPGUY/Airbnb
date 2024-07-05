
import comp1 from "../assets/Card carousel (1).png";
import comp2 from "../assets/Card carousel.png";
import comp3 from "../assets/Component 11 (1).png";
import comp4 from "../assets/Component 11.png";
import comp5 from "../assets/Component 12 (1).png";
import comp6 from "../assets/Component 12.png";
import comp7 from "../assets/Component 13.png";
import comp8 from "../assets/Component 14.png";
import comp9 from "../assets/Component 15.png";
import comp10 from "../assets/Component 16.png";
import comp11 from "../assets/Component 17.png";
import comp12 from "../assets/Component 18.png";
import comp13 from "../assets/Component 19.png";
import comp14 from "../assets/Component 20.png";
import comp15 from "../assets/Component 22.png";
import comp16 from "../assets/Component 23.png";
import comp17 from "../assets/Component 24.png";
import comp18 from "../assets/Component 25.png";
import comp19 from "../assets/Component 26.png";
import comp20 from "../assets/Component 27.png";

function Products() {
  let products = [
    {
      houseImage: comp1,
      title: "Half Moon Bay,  California, Us",
      location: "Beach and ocean views",
      duration: "22-27 Oct. Individual Host",
      price: "$1,634 total",
    },
    {
      houseImage: comp2,
      title: "Half Moon Bay,  California, Us",
      location: "Beach and ocean views",
      duration: "22-27 Oct. Individual Host",
      price: "$1,634 total",
    },
    {
      houseImage: comp3,
      title: "Half Moon Bay,  California, Us",
      location: "Beach and ocean views",
      duration: "22-27 Oct. Individual Host",
      price: "$1,634 total",
    },
    {
      houseImage: comp4,
      title: "Half Moon Bay,  California, Us",
      location: "Beach and ocean views",
      duration: "22-27 Oct. Individual Host",
      price: "$1,634 total",
    },
    {
      houseImage: comp5,
      title: "Half Moon Bay,  California, Us",
      location: "Beach and ocean views",
      duration: "22-27 Oct. Individual Host",
      price: "$1,634 total",
    },
    {
      houseImage: comp6,
      title: "Half Moon Bay,  California, Us",
      location: "Beach and ocean views",
      duration: "22-27 Oct. Individual Host",
      price: "$1,634 total",
    },
    {
      houseImage: comp7,
      title: "Half Moon Bay,  California, Us",
      location: "Beach and ocean views",
      duration: "22-27 Oct. Individual Host",
      price: "$1,634 total",
    },
    {
      houseImage: comp8,
      title: "Half Moon Bay,  California, Us",
      location: "Beach and ocean views",
      duration: "22-27 Oct. Individual Host",
      price: "$1,634 total",
    },
    {
      houseImage: comp9,
      title: "Half Moon Bay,  California, Us",
      location: "Beach and ocean views",
      duration: "22-27 Oct. Individual Host",
      price: "$1,634 total",
    },
    {
      houseImage: comp10,
      title: "Half Moon Bay,  California, Us",
      location: "Beach and ocean views",
      duration: "22-27 Oct. Individual Host",
      price: "$1,634 total",
    },
    {
      houseImage: comp11,
      title: "Half Moon Bay,  California, Us",
      location: "Beach and ocean views",
      duration: "22-27 Oct. Individual Host",
      price: "$1,634 total",
    },
    {
      houseImage: comp12,
      title: "Half Moon Bay,  California, Us",
      location: "Beach and ocean views",
      duration: "22-27 Oct. Individual Host",
      price: "$1,634 total",
    },
    {
      houseImage: comp13,
      title: "Half Moon Bay,  California, Us",
      location: "Beach and ocean views",
      duration: "22-27 Oct. Individual Host",
      price: "$1,634 total",
    },
    {
      houseImage: comp14,
      title: "Half Moon Bay,  California, Us",
      location: "Beach and ocean views",
      duration: "22-27 Oct. Individual Host",
      price: "$1,634 total",
    },
    {
      houseImage: comp15,
      title: "Half Moon Bay,  California, Us",
      location: "Beach and ocean views",
      duration: "22-27 Oct. Individual Host",
      price: "$1,634 total",
    },
    {
      houseImage: comp16,
      title: "Half Moon Bay,  California, Us",
      location: "Beach and ocean views",
      duration: "22-27 Oct. Individual Host",
      price: "$1,634 total",
    },
    {
      houseImage: comp17,
      title: "Half Moon Bay,  California, Us",
      location: "Beach and ocean views",
      duration: "22-27 Oct. Individual Host",
      price: "$1,634 total",
    },
    {
      houseImage: comp18,
      title: "Half Moon Bay,  California, Us",
      location: "Beach and ocean views",
      duration: "22-27 Oct. Individual Host",
      price: "$1,634 total",
    },
    {
      houseImage: comp19,
      title: "Half Moon Bay,  California, Us",
      location: "Beach and ocean views",
      duration: "22-27 Oct. Individual Host",
      price: "$1,634 total",
    },
    {
      houseImage: comp20,
      title: "Half Moon Bay,  California, Us",
      location: "Beach and ocean views",
      duration: "22-27 Oct. Individual Host",
      price: "$1,634 total",
    },
  ];
  return (
    <div>
      <div className="sm:grid grid-cols-4 grid-rows-5 gap-3 py-5 px-5 ">
        {products.map((product) => (
          <div className="mx-auto">
            <img
              src={product.houseImage}
              className="w-[600px]"
            
              alt={product.title} 
            />
            {/* <p>{product.title}</p>
          <p>{product.location}</p>
          <p>{product.duration}</p>
          <p>{product.price}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
