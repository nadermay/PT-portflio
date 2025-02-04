import React from 'react';
import './app.css';  // Import the CSS file

const App = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>Responsive React Site</h1>
      </header>

      <div className="content">
        <div className="card">Card 1</div>
        <div className="card">Card 2</div>
        <div className="card">Card 3</div>
      </div>
    </div>
  );
};

export default App;
