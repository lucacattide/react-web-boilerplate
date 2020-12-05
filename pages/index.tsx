// Module Start
// CSS imports
import styles from '../styles/Index.module.css';
// JS imports
import { NextPage } from 'next';
import Head from 'next/head';
import { useQuery } from '@apollo/client';
import ENTITY_QUERY from '../backend/queries/queries';
import ErrorDb from '../components/ErrorDb';

// Interfaces
interface Entity {
  property: unknown;
}
interface EntityData {
  entity: Entity[];
}
interface EntityVars {
  var: unknown;
}

// Index
const Index: NextPage = () => {
  const { loading, error, data } = useQuery<EntityData, EntityVars>(
    ENTITY_QUERY.entities.something,
    { variables: { var: 'foo' } },
  );

  // Exception check
  if (error) {
    return <ErrorDb error={error.message} />;
  }
  // DB fetching check
  if (loading) {
    return null;
  }

  const contents = data.something;

  return (
    <>
      <Head>
        <link rel="canonical" href="https://" />
      </Head>
      {/* TODO: Tailwind refactoring */}
      <div className={styles.div}></div>
    </>
  );
};

// Module export
export default Index;
// Module End
