import React, { useState, useEffect } from "react";
import home_img from "../../assets/images/homepagepic.jpg";
import { useInView } from "react-intersection-observer";
import "./Home.css"; // Import the stylesheet if required

const TypingText = ({ text, className }) => {
  const [typingText, setTypingText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (index < text.length) {
        setTypingText(text.substring(0, index + 1));
        setIndex(index + 1);
      } else {
        clearInterval(intervalId);
      }
    }, 50);
    return () => clearInterval(intervalId);
  }, [index, text]);

  return (
    <p className={className}>
      {typingText}
      <span className="cursor" />
    </p>
  );
};

export const Home = ({ setSectionInView }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      setSectionInView("home");
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      id="home"
      className="w-full min-h-screen pt-20 pb-10 relative flex flex-col lg:flex-row items-center lg:justify-between gap-10"
    >  <div className="homeemoji-list animate-slideInLeft">
    <span className="emoji">🚌</span>
    <span className="emoji">✈️</span>
    <span className="emoji">🚂</span>
    <span className="emoji">🚗</span>
  </div>
      {/* Text content */}
      <div className="text-content lg:w-1/2 w-full text-center lg:text-left lg:pr-10">
        <h2 className="text-4xl lg:text-3xl font-bold uppercase text-black bg-white">
          <TypingText text="Discover Exclusive Packages, Premium Stays, Unforgettable Experiences, and Iconic Events. Book Your Journey Today." />
        </h2>
        <TypingText text="With flexible installment payment options via Mpesa. Enjoy effortless booking and 24/7 customer support, ensuring a seamless experience from start to finish." className="text-accent" />
      </div>

      {/* Image content */}
      <img
        src={home_img}
        alt="Home"
        id="HomeImage"
        className="lg:w-1/2 w-full h-auto object-cover -z-10"
      />
    </section>
  );
};