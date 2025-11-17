import { useInView } from "react-intersection-observer";
import nairobi from "../../assets/images/nairobi-city-tour.jpg";
import './Roadtrips.css';
import lakeNakuru from '../../assets/images/lake-nakuru-national-park.jpg';
import masaiMara from '../../assets/images/masai-mara-national-park.jpeg';
import amboseli from '../../assets/images/amboseli-national-park.jpg';

import { useEffect } from "react";

const Roadtrip = [
  { src: lakeNakuru, name: "biking", price: "ksh 100" },
  { src: masaiMara, name: "Paint balling", price: "ksh 1,120" },
  { src: amboseli, name: "Quad biking ", price: "ksh 1,190" },
  { src: nairobi, name: "Rafting", price: "ksh 2,130" },
];

export const Roadtrips = ({ setSectionInView }) => {
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
        <span className="text-accent">Local trips by </span><br></br> Road
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

export default Roadtrip;