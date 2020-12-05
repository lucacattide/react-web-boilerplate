// Module Start
// JS imports
import TagManager from 'react-gtm-module';

// Local installation
let deferredInstallPrompt = null;
let installButton = null;

/**
 * @description Event handler for Install button.
 * Does the PWA installation.
 * @author Luca Cattide
 * @date 2019-11-05
 * @param {Event} e Event
 */
const installPWA = (e) => {
  e.target.setAttribute('hidden', true);
  deferredInstallPrompt.prompt();
  deferredInstallPrompt.userChoice.then((choice) => {
    if (choice.outcome === 'accepted') {
      console.log('User accepted the A2HS prompt', choice);
    } else {
      console.log('User dismissed the A2HS prompt', choice);
    }

    deferredInstallPrompt = null;
  });
};

/**
 * @description Event handler for beforeinstallprompt event.
 * Saves the event & shows install button.
 * @author Luca Cattide
 * @date 2019-11-05
 * @param {Event} e Event
 */
const saveBeforeInstallPromptEvent = (e) => {
  e.preventDefault();

  deferredInstallPrompt = e;

  installButton.removeAttribute('hidden');
};

/**
 * @description Event handler for appinstalled event.
 * Log the installation to analytics or save the event somehow.
 * @author Luca Cattide
 * @date 2019-11-05
 */
const logAppInstalled = () => {
  const tagManagerArgs = {
    dataLayer: {
      event: 'install',
    },
  };

  // Google Tag Manager Event
  TagManager.dataLayer(tagManagerArgs);
};

/**
 * @description Installation initialization
 * @author Luca Cattide
 * @date 2019-10-04
 */
const initInstall = () => {
  installButton = document.getElementById('install');

  installButton.addEventListener('click', installPWA);
  window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);
  window.addEventListener('appinstalled', logAppInstalled);
};

// Module export
export default initInstall;
// Module End
