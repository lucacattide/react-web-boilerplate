// Module Start
// JS imports
import { Workbox } from 'workbox-window';

// Types
type Prompt = {
  onAccept: () => void;
  onReject: () => void;
};

// Utilities
// API
const apiAuthorizationUrl: string = '';
const apiBaseUrl: string = '';
// TODO: replace with reader client in production
const apiOptions: string = '';
// Testing
// Data fetch mock
const dataFetch: (path: string) => Promise<Response> = async (path) => {
  return fetch(apiBaseUrl + path).then((res) => res.json());
};
// Service Worker
// Refresh UI prompt getter
const createUIPrompt: (options: Prompt) => void = (options) => {
  // TODO: Custom prompt implementation
  if (confirm('New version available. Do you want to update?')) {
    options.onAccept();
  }
};
// Service Worker Update
const refresh = () => {
  // Existing check
  if (
    typeof window !== 'undefined' &&
    'serviceWorker' in navigator &&
    window.workbox !== undefined
  ) {
    const wb = new Workbox('/sw.js');
    const showSkipWaitingPrompt = () => {
      const prompt = createUIPrompt({
        onAccept: () => {
          wb.addEventListener('controlling', () => {
            window.location.reload();
          });
          wb.messageSkipWaiting();
        },
        onReject: () => {
          // TODO: Custom prompt closing
        },
      });
    };

    wb.addEventListener('waiting', showSkipWaitingPrompt);
    wb.register();
  }
};

// Module export
export { apiAuthorizationUrl, apiBaseUrl, apiOptions, dataFetch, refresh };
// Module End
