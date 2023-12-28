import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const App =() =>(
  <main >
    <section>
      <NavBar/>
    </section>
    <section>
      <EventSection/>
    </section>
    <section>
      <Services/>
    </section>
    <section>
      <Schedule/>
    </section>
    <section >
      <Prices/>
    </section>
    <section>
      <MapSection/>
    </section>
    <section>
      <Footer/>
    </section>
  </main>
);
export default App;
