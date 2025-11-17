import { useInView } from "react-intersection-observer";
import europetrip__img from "../../assets/images/europetrip.jpg";
import dubaitrip__img from "../../assets/images/dubaitrip.jpg";
import Beijin__img from "../../assets/images/beiji.jpg";
import SouthAfrica__img from "../../assets/images/cpt.jpg";
import { useEffect } from "react";
import "./Internationaltravels.css"; 

const locations = [
  {   
    name: "Dubai",
    image: dubaitrip__img,
  },
  {
    name: "Europe",
    discount: 35,
    image: europetrip__img,
  },
  {
    name: "South Africa",
    image: SouthAfrica__img,
  },
  {
    name: "Beijing",
    image: Beijin__img,
  },
  {   
    name: "Dubai",
    image: dubaitrip__img,
  },
  {
    name: "Europe",
    discount: 35,
    image: europetrip__img,
  },
];

const InternationalTravels = ({ setSectionInView }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      setSectionInView("feature");
    }
  }, [inView]);

  return (
    <section ref={ref} className="bg-base-00" id="feature">
      <h1 className="uppercase text-center font-bold text-3xl pb-10">
        <span className="text-accent">International</span> tours
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {locations.map((loc, index) => (
          <div
            key={index}
            className="card card-compact bg-base-100 shadow-xl flex flex-col h-full transition-transform duration-300 transform scale-90 hover:scale-105"
          >
            {/* City Name Header */}
            <h2 className="text-accent text-xl text-center font-bold mb-3">
              {loc.name}
            </h2>

            <figure className="h-30 relative overflow-hidden transition-transform duration-300 transform scale-95 hover:scale-105"> 
              <img
                className="h-full w-full object-cover"
                src={loc.image}
                alt={loc.name}
              />
              {loc.discount && (
                <span className="badge badge-error px-3 absolute top-3 left-3 text-primary-content">
                  {loc.discount}% off
                </span>
              )}
              {/* Book now button, hidden by default, appears on hover */}
              <button
                className="btn btn-accent text-primary-content px-2 py-1 text-xs absolute inset-10 m-auto opacity-0 transition-opacity duration-300 flex justify-center items-center"
                style={{ pointerEvents: 'none' }} // prevent click events when invisible
              >
                Book now!
              </button>
            </figure>
            <div className="card-body items-center text-center flex-grow">
              <p>{loc.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <style>
        {`
          figure button {
            opacity: 0;
            pointer-events: none;
          }
          figure:hover button {
            opacity: 1;
            pointer-events: auto;
          }
        `}
      </style>
    </section>
  );
};

export default InternationalTravels;
