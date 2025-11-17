import { useState } from "react";
import { About } from "./components/About/About";
import Contact from "./components/Contact/Contact";
import FeaturedLocations from "./components/Featured/FeaturedLocations";
import { Footer } from "./components/Footer/Footer";
import { Gallery } from "./components/Gallery/Gallery";
import Header from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Newsletter } from "./components/Newsletter/Newsletter";
import { Reviews } from "./components/Reviews/Reviews";
import InternationalTravels from './components/Featured/Internationaltravels';
import Local from './components/Featured/Local';
import Camping from './components/Featured/Camping';
import Dayactivities from './components/Featured/Dayactivities';
import Events from './components/Featured/Events';
import Roadtrips from './components/Featured/Roadtrips';
import Stays from './components/Featured/Internationaltravels';
import EmojiComponent from './components/Emojies/Emojies';

function App() {
  const [sectionInView, setSectionInView] = useState("");

  return (
    <div className="App">
      <Header sectionInView={sectionInView} />
      {["home", "About", "FeaturedLocations", "Camping", "Dayactivities", "Local"].includes(sectionInView) && <EmojiComponent />}      <Home setSectionInView={setSectionInView} />
      <About setSectionInView={setSectionInView} />
      <FeaturedLocations setSectionInView={setSectionInView} />
      <InternationalTravels setSectionInView={setSectionInView} />
      <Local setSectionInView={setSectionInView} />
      <Camping setSectionInView={setSectionInView} />
      <Dayactivities setSectionInView={setSectionInView} />

      <Gallery setSectionInView={setSectionInView} />
      <Reviews setSectionInView={setSectionInView} />
      <Contact setSectionInView={setSectionInView} />

     {/*  
       <Roadtrips setSectionInView={setSectionInView} />
      <Events setSectionInView={setSectionInView} />
      <Stays setSectionInView={setSectionInView} /> 
  */}
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;