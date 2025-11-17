import React from 'react';
import './Local.css';
import nairobiCityTour from '../../assets/images/nairobi-city-tour.jpg';
import lakeNakuru from '../../assets/images/lake-nakuru-national-park.jpg';
import masaiMara from '../../assets/images/masai-mara-national-park.jpeg';
import amboseli from '../../assets/images/amboseli-national-park.jpg';
import mombasa from '../../assets/images/mombasa-beach-getaway.jpg';
import kilifi from '../../assets/images/kilifi-beach-getaway.jpg';
import watamu from '../../assets/images/watamu-beach-getaway.jpeg';
import diani from '../../assets/images/diani-beach-getaway.jpeg';

const localPackages = [
  { name: 'Nairobi City Tour', image: nairobiCityTour, price: 'Ksh 5,000' },
  { name: 'Lake Nakuru National Park', image: lakeNakuru, price: 'Ksh 10,000' },
  { name: 'Masai Mara National Park', image: masaiMara, price: 'Ksh 15,000' },
  { name: 'Amboseli National Park', image: amboseli, price: 'Ksh 12,000' },
  { name: 'Mombasa Beach Getaway', image: mombasa, price: 'Ksh 8,000' },
  { name: 'Kilifi Beach Getaway', image: kilifi, price: 'Ksh 9,000' },
  { name: 'Watamu Beach Getaway', image: watamu, price: 'Ksh 10,000' },
  { name: 'Diani Beach Getaway', image: diani, price: 'Ksh 11,000' },
];

const Local = () => {
  return (
    <div className="local-tour-packages">
      <h1 className="text-center text-4xl font-bold mb-5">Kenyan Local Tour Packages</h1>
      <section className="package-list">
      <div className="localemoji-list">
    <span className="emoji">🚌</span>
    <span className="emoji">✈️</span>
    <span className="emoji">🚂</span>
    <span className="emoji">🚗</span>
  </div>
        <div className="packages flex flex-wrap justify-center">
          {localPackages.map((packageItem, index) => (
            <div key={index} className="package m-5 w-80 bg-white rounded-lg shadow-md">
              <img src={packageItem.image} alt={packageItem.name} className="w-full h-60 object-cover" />
              <div className="p-5">
                <h3 className="text-2xl font-bold">{packageItem.name}</h3>
                <p className="text-lg">Price: {packageItem.price}</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Local;