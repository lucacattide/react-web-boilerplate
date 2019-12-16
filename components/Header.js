// Module Start
// JS imports
import {useEffect} from 'react'
import Router from 'next/router'

// Local installation
let deferredInstallPrompt = null;
let installButton = null;
// Header
const Header = (props) => {
  useEffect(() => {
    initInstall();
  });

  return (
    <>
      {/* Header Start */}
      <header className="header">
      </header>
      {/* Header End */}
    </>
  );
}

/**
 * @description Installation initialization
 * @author Luca Cattide
 * @date 2019-10-04
 */
function initInstall() {
  installButton = document.getElementById('install');

  installButton.addEventListener('click', installPWA);
  window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);
  window.addEventListener('appinstalled', logAppInstalled);
}

/**
 * @description Event handler for beforeinstallprompt event.
 * Saves the event & shows install button.
 * @author Luca Cattide
 * @date 2019-11-05
 * @param {Event} e Event
 */
function saveBeforeInstallPromptEvent(e) {
  e.preventDefault();

  deferredInstallPrompt = e;

  installButton.removeAttribute('hidden');
}

/**
 * @description Event handler for butInstall - Does the PWA installation.
 * @author Luca Cattide
 * @date 2019-11-05
 * @param {Event} e Event
 */
function installPWA(e) {
  e.srcElement.setAttribute('hidden', true);
  deferredInstallPrompt.prompt();
  deferredInstallPrompt.userChoice.then(function(choice) {
    if (choice.outcome === 'accepted') {
      console.log('User accepted the A2HS prompt', choice);
    } else {
      console.log('User dismissed the A2HS prompt', choice);
    }

    deferredInstallPrompt = null;
  });
}

/**
 * @description Event handler for appinstalled event.
 * Log the installation to analytics or save the event somehow.
 * @author Luca Cattide
 * @date 2019-11-05
 */
function logAppInstalled() {
  // TODO: Some implementation
}

// Module export
export default Header
// Module End
