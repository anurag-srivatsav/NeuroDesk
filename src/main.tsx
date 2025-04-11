import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import Blog from './Blog.tsx';
import Company from './Company.tsx';
import Team from './Team.tsx';
import Docs from './Docs.tsx';
import Legal from './Legal.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/company" element={<Company />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Docs" element={<Docs />} />
        <Route path="/Legal" element={<Legal />} />
      </Routes>
    </Router>
  </StrictMode>
);