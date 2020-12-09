// Module Start
// JS imports
import React, { FC, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TagManager from 'react-gtm-module';

// Header
const Header: FC = () => {
  const [
    installPrompt,
    setInstallPrompt,
  ] = useState<BeforeInstallPromptEvent | null>(null);
  // Install handler
  const handleInstall: () => void = () => {
    if (installPrompt) {
      installPrompt.prompt();
      installPrompt.userChoice.then((choice) => {
        if (choice.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt', choice);
        } else {
          console.log('User dismissed the A2HS prompt', choice);
        }

        setInstallPrompt(null);
      });
    }
  };
  // Install prompt handler
  const handleInstallPrompt: (e: BeforeInstallPromptEvent) => void = (e) => {
    setInstallPrompt(e);
  };
  // Install log handler
  const handleInstallLog: () => void = () => {
    // Google Tag Manager Event
    TagManager.dataLayer({
      dataLayer: {
        event: 'install',
      },
    });
  };

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', handleInstallPrompt);
    window.addEventListener('appinstalled', handleInstallLog);
  }, []);

  return (
    // TODO: Tailwind refactoring
    // Header Start
    <section className="header">
      <h6>Header</h6>
    </section>
    // Header End
  );
};

// Properties validation
Header.propTypes = {};

// Module export
export default Header;
// Module End
