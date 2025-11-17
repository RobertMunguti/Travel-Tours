import { useInView } from "react-intersection-observer";
import biking from "../../assets/images/biking.jpg";
import paintballing from "../../assets/images/paintball.jpeg";
import quadbiking from "../../assets/images/quad.jpg";
import paddling from "../../assets/images/paddling.jpeg";
import rafting from "../../assets/images/rafting.jpeg";
import hiking from "../../assets/images/hiking.jpeg";
import './Dayactivity.css';

import { useEffect } from "react";

const dayimages = [
  { src: biking, name: "biking", price: "ksh 100" },
  { src: paintballing, name: "Paint balling", price: "ksh 1,120" },
  { src: quadbiking, name: "Quad biking ", price: "ksh 1,190" },
  { src: paddling, name: "Paddling", price: "ksh 2,150" },
  { src: rafting, name: "Rafting", price: "ksh 2,130" },
  { src: hiking, name: "Hiking", price: "ksh 3,110" },
];

export const Dayactivities = ({ setSectionInView }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      setSectionInView("gallery");
    }
  }, [inView]);

  return (
    <section ref={ref} id="gallery" className="dayactivities-grid sm:grid-cols-3 lg:grid-cols-4 gap-5">
      <h1 className="uppercase text-center font-bold text-3xl pb-10">
        <span className="text-accent">Day</span><br></br>Activities 
      </h1>

      <div className="daygrid">
        {dayimages.map((imgObj, index) => (
          <div
            key={index}
            className="relative rounded-md overflow-hidden cursor-pointer group max-w-[300px]"
          >
            <img
              className="h-full w-full object-cover"
              src={imgObj.src}
              alt={`g_image_${index}`}
            />
            <div
              className={`absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#333] z-20 flex flex-col justify-end`}
            >
              <div className="flex flex-col items-center absolute bottom-3 w-full">
                <h2 className="text-white text-base font-bold">{imgObj.name}</h2>
                <p className="text-white text-sm">{imgObj.price} per night</p>
                <button className="mt-2 bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-400 transition">
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

export default Dayactivities;