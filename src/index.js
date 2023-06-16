import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Index from './Index';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Index />
  </StrictMode>
);
