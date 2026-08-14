import { useState } from 'react';
import './App.css';
import useScrollReveal from './hooks/useScrollReveal';
import Welcome from './components/Welcome';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SideNavigation from './components/SideNavigation';
import ContentBox from './components/ContentBox';
import Footer from './components/Footer';

export default function App() {
  const [entered, setEntered] = useState(false);
  useScrollReveal(entered);

  const handleEnter = () => {
    setEntered(true);
  };

  return (
    <>
      {!entered && <Welcome onEnter={handleEnter} />}
      <div className={`app ${entered ? 'app--visible' : 'app--hidden'}`}>
        <Navbar />
        <SideNavigation />
        <main>
          <Hero />
          <ContentBox />
        </main>
        <Footer />
      </div>
    </>
  );
}
