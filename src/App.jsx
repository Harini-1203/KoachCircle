import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import CirclesPage from './pages/CirclesPage';
import MentorsPage from './pages/MentorsPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/circle" element={<CirclesPage />} />
          <Route path="/mentor" element={<MentorsPage />} />
          <Route path="/" element={<Navigate to="/mentor" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;