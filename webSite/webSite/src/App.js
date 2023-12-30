import './App.css';
import NavBar from './sections/NavBar';
import EventSection from './sections/EventSection';
import Offres from './sections/Offres';
import Schedule from './sections/Schedule';
import Price from './sections/Price';
import MapSection from './sections/MapSection';
import Footer from './sections/Footer';
const App = () => {
  return (
    <main>
      <section><NavBar/></section>
      <section><EventSection/></section>
      <section><Offres/></section>
      <section><Schedule/></section>
      <section><Price/></section>
      <section><MapSection/></section>
      <section><Footer/></section>
    </main>
  );
}

export default App;
