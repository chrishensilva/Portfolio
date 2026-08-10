import { useState } from 'react';
import LoadingScreen from './LodingScreen.jsx';
import SmoothScroll from './SmoothScroll.jsx';
import Home from './Home.jsx';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <LoadingScreen onFinished={() => setIsLoading(false)} />
      )}
      <SmoothScroll>
        <Home />
      </SmoothScroll>
    </>
  );
}

export default App;
