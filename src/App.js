import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loading from './pages/Loading';
import Index from './pages/Index';

const CV = lazy(() => import('./pages/CV'));
const Publications = lazy(() => import('./pages/Publications'));
const Projects = lazy(() => import('./pages/Projects'));
const Misc = lazy(() => import('./pages/Misc'));

const { PUBLIC_URL } = process.env;

function App() {
  return (
    <BrowserRouter basename={PUBLIC_URL}>
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path="/" element={<Index/>} exact />
          <Route path="/cv" element={<CV/>} />
          <Route path="/publications" element={<Publications/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/misc" element={<Misc/>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
