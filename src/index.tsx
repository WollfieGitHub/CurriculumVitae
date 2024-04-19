import React from 'react';
import ReactDOM from 'react-dom/client';
import CurriculumVitae from './CurriculumVitae';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CurriculumVitae />
  </React.StrictMode>
);
