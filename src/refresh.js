// Module Start
// Service Worker Update
/**
 * @description Refresh UI prompt getter
 * @author Luca Cattide
 * @date 2019-10-28
 * @param {object} options Prompt options
 */
const createUIPrompt = (options) => {
  if (confirm('New version available. Do you want to update?')) {
    options.onAccept();
  }
};
const refresh = () => {
  // Service Worker Check
  if (
    typeof window !== 'undefined' &&
    'serviceWorker' in navigator &&
    window.workbox !== undefined
  ) {
    let registration = null;
    const wb = window.workbox('/service-worker.js');
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
