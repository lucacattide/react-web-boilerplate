// Module Start
// CSS imports
import styles from '../styles/Offline/Offline.module.css';
// JS imports
import { NextPage } from 'next';

// Offline
const Offline: NextPage = () => {
  return (
    <>
      {/* TODO: Tailwind refactoring */}
      <section className={styles.offline}>
        <h6>Offline</h6>
      </section>
    </>
  );
};

// Module export
export default Offline;
// Module End
