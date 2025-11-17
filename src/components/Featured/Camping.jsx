import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

// Importing images
import camp from "../../assets/images/camp.jpeg";
import camp2 from "../../assets/images/camp2.jpeg";
import camp3 from "../../assets/images/camp3.jpeg";
import glamp1 from "../../assets/images/glamp1.jpeg";
import glamp2 from "../../assets/images/glamp3.jpeg";
import glamp3 from "../../assets/images/glamp4.jpeg";
import glamp4 from "../../assets/images/glamp5.jpeg";

// Importing custom CSS
import "./Camping.css";

const campimages = [
  { src: camp, name: "Mt Kenya", price: "ksh 1,100" },
  { src: camp2, name: "Naivasha", price: "ksh 1,120" },
  { src: camp3, name: "Nakuru", price: "ksh 1,190" },
  { src: glamp1, name: "Luxury Glamping Maasai Mara", price: "ksh 3,150" },
  { src: glamp2, name: "Desert Oasis Lake Turkana", price: "ksh 4,130" },
  { src: glamp3, name: "Beach Glamping Mombasa", price: "ksh 3,110" },
  { src: glamp4, name: "Riverside Escape Galana", price: "ksh 5,140" },
];

const Camping = ({ setSectionInView }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      setSectionInView("gallery");
    }
  }, [inView, setSectionInView]);

  return (
    <section ref={ref} id="gallery" className="camping-grid max-w-4xl mx-auto px-">
      <h1 className="uppercase text-center font-bold text-3xl pb-10">
        <span className="text-accent">C</span>amping{" "}
        <span className="text-accent">and</span> glamping
      </h1>

      <div className="campgrid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {campimages.map((imgObj, index) => (
          <div
            key={index}
            className="relative rounded-md overflow-hidden cursor-pointer group shadow-box"
          >
            <img
              className="h-full w-full object-cover"
              src={imgObj.src}
              alt={`g_image_${index}`}
            />
            <div className="absolute transition-transform translate-y-full group-hover:translate-y-0 top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#333] z-20 flex flex-col justify-end">
              <div className="flex flex-col items-center absolute bottom-3 w-full">
                <h2 className="text-lg font-bold text-white">{imgObj.name}</h2>
                <p className="text-md text-white">{imgObj.price} per night</p>
                <button className="mt-2 bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-400 transition">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Camping;