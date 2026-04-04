import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import posthog from 'posthog-js';
import { PostHogProvider, PostHogErrorBoundary } from '@posthog/react';

posthog.init(import.meta.env.VITE_PUBLIC_POSTHOG_PROJECT_TOKEN, {
  api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
  defaults: '2026-01-30',
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
      <PostHogProvider client={posthog}>
        <PostHogErrorBoundary>
          <App />
        </PostHogErrorBoundary>
      </PostHogProvider>
    </React.StrictMode>
);
