import {Navbar} from './views/Navbar/navbar'
import { HeroSection } from './views/Home';
import { About } from './views/About';
import { Tutors } from './views/Tutors';
import { Courses } from './views/Courses';
import Plains from './views/Plains';
import { ChooseUs } from './Choose Us/chooseUs';
import Reviews from './views/Reviews';
import Contact from './component/Contact';
import Books from './component/books';
import Faqs from './component/faqs';
import VideoModal from './component/videModal/modal';
function App() {
  return (
    <div className="App">
      <VideoModal/>
      <Navbar/>
      <HeroSection/>
      <About/>
      <Tutors/>
      <Courses/>
      <Plains/>
      <ChooseUs/>
      <Books/>
      <Reviews/>
      <Faqs/>
      <Contact/>
      
    </div>
  );
}

export default App;
