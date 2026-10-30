import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import LoadingScreen from './LodingScreen.jsx';
import SmoothScroll from './SmoothScroll.jsx';
import Home from './Home.jsx';
import Navbar from './Navbar.jsx';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
          setShowScrollTop(window.scrollY > 400);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {isLoading && (
        <LoadingScreen onFinished={() => setIsLoading(false)} />
      )}
      <Navbar />
      <SmoothScroll>
        <Home />
      </SmoothScroll>
      {showScrollTop && (
          <button
              className="back-to-top-btn"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              title="Back to top"
          >
              <ArrowUp size={20} />
          </button>
      )}
    </>
  );
}

export default App;
