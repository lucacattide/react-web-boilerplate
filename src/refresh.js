// Module Start
// JS imports
import { Workbox } from 'workbox-window';

// Refresh UI prompt getter
const createUIPrompt = (options) => {
  /* eslint-disable-next-line no-restricted-globals, no-alert */
  if (confirm('New version available. Do you want to update?')) {
    options.onAccept();
  }
};
// Service Worker Update
const refresh = () => {
  // Service Worker Check
  if (
    typeof window !== 'undefined' &&
    'serviceWorker' in navigator &&
    window.workbox !== undefined
  ) {
    let registration = null;
    const wb = new Workbox('/sw.js');
    const showSkipWaitingPrompt = () => {
      const prompt = createUIPrompt({
        onAccept: async () => {
          wb.addEventListener('controlling', () => {
            window.location.reload();
          });

          // Registration check
          if (registration && registration.waiting) {
            wb.messageSW(registration.waiting, { type: 'SKIP_WAITING' });
          }
        },
        onReject: () => {
          prompt.dismiss();
        },
      });
    };

    wb.addEventListener('waiting', showSkipWaitingPrompt);
    wb.addEventListener('externalwaiting', showSkipWaitingPrompt);
    wb.register().then((r) => {
      registration = r;
    });
  }
};

// Module export
export default refresh;
// Module End
