import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import CirclesPage from './pages/CirclesPage';
import CircleDetailPage from './pages/CircleDetailPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/circle" element={<CirclesPage />} />
          <Route path="/circle/:id" element={CircleDetailPage} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;