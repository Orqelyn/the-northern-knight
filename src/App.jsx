import { useState, useEffect } from 'react';
import './App.css';
import useScrollReveal from './hooks/useScrollReveal';
import Welcome from './components/Welcome';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SideNavigation from './components/SideNavigation';
import ContentBox from './components/ContentBox';
import Footer from './components/Footer';

export default function App() {
  const [startedEntering, setStartedEntering] = useState(false);
  const [entered, setEntered] = useState(false);
  useScrollReveal(entered);

  useEffect(() => {
    if (!entered) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [entered]);

  const handleStartEnter = () => {
    setStartedEntering(true);
  };

  const handleEnter = () => {
    setEntered(true);
  };

  return (
    <>
      {!entered && <Welcome onStartEnter={handleStartEnter} onEnter={handleEnter} />}
      <div className={`app ${startedEntering ? 'app--visible' : 'app--hidden'}`}>
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
