import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loading from './pages/Loading';
import Index from './pages/Index';

const About = lazy(() => import('./pages/About'));
const Publications = lazy(() => import('./pages/Publications'));
const Projects = lazy(() => import('./pages/Projects'));

const { PUBLIC_URL } = process.env;

function App() {
  return (
    <BrowserRouter basename={PUBLIC_URL}>
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path="/" element={<Index/>} exact />
          <Route path="/about" element={<About/>} />
          <Route path="/publications" element={<Publications/>} />
          <Route path="/projects" element={<Projects/>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
