// Module Start
// CSS imports
import styles from '../styles/Index/Index.module.scss';
// JS imports
import { NextPage } from 'next';
import Head from 'next/head';
import { useQuery } from '@apollo/client';
import PAGE_QUERY from '../backend/queries/pages';
import CustomError from '../components/CustomError';

// Interfaces
interface Page {
  property: unknown;
}
interface PageData {
  entity: Page[];
}
interface PageVars {
  var: unknown;
}

// Index
const Index: NextPage = () => {
  const { loading, error, data } = useQuery<PageData, PageVars>(
    PAGE_QUERY.pages.home,
    { variables: { var: 'foo' } },
  );

  // Exception check
  if (error) {
    return <CustomError error={error} />;
  }
  // DB fetching check
  if (loading) {
    return null;
  }

  const contents = data?.something;

  return (
    /* Index Start */
    <>
      {/* Head Start */}
      <Head>
        <link rel="canonical" href="https://" />
      </Head>
      {/* Head End */}
      {/* TODO: Tailwind refactoring */}
      <div className={styles.div}></div>
    </>
    /* Index End */
  );
};

// Module export
export default Index;
// Module End
