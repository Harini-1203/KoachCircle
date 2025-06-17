import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import CirclesPage from './pages/CirclesPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/circle" element={<CirclesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;