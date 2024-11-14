import React from 'react';
import Page1 from './pages/Page1'; // Importing Page1 component
import Page3 from './pages/Page3';

function App() {
  return (
    <div className="App">
      <Page1 />  {/* Rendering Page1 */}
      <Page3 /> {/* Rendering Page3 */}
    </div>
  );
}

export default App;
