import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Router } from './Router'; // <- panggil RouterProvider dari router.tsx
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router />
  </StrictMode>
);
