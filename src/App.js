import React from 'react';
import ThreeBackground from './ThreeBackground';

function App() {
  return (
    <div>
      <ThreeBackground />
      {/* Your page content */}
      <div style={{ position: 'relative', zIndex: 1, color: 'white' }}>
        <h1>Hello, World!</h1>
        <p>This is your React app with a Three.js background!</p>
      </div>
    </div>
  );
}

export default App;