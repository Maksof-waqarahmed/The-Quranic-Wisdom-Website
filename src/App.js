import {Navbar} from './views/Navbar/navbar'
import { HeroSection } from './views/Home';
import { About } from './views/About';
import { Tutors } from './views/Tutors';
import { Courses } from './views/Courses';
import Plains from './views/Plains';
import { ChooseUs } from './Choose Us/chooseUs';
import Reviews from './views/Reviews';
import Contact from './component/Contact';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <About/>
      <Tutors/>
      <Courses/>
      <Plains/>
      <ChooseUs/>
      <Reviews/>
      <Contact/>
      
    </div>
  );
}

export default App;
