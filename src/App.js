import React from 'react';
import './App.css';
import routes from './routes'
import Navbar from './Components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      {routes}
    </div>
  );
}

export default App;
