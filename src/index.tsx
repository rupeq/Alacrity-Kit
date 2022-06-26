import React from 'react';
import { createRoot } from 'react-dom/client';
import Development from './development';

const container = document && document.createElement('div');
document.body.appendChild(container);

const root = createRoot(container);
root.render(<Development />);
