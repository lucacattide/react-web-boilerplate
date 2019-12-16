// Module Start
// Home
// SASS imports
import '../sass/index.scss'
import '../sass/home.scss'
// JS imports
import Head from 'next/head'
import dynamic from 'next/dynamic'
import {useQuery} from '@apollo/react-hooks'
import _QUERY from '../backend/queries/articles'
import fetch from 'isomorphic-unfetch'
import {apiAuthorizationUrl, apiOptions, checkStatus} from '../js/utils'
import Layout from '../components/Layout'
import commonEng from '../public/lang/en/common'

const ErrorDb = dynamic(() =>
  import('../components/ErrorDb')
)
// Main
const Index = (props) => {
  const {loading, error, data} = useQuery(_QUERY.articles.);

  // Exception check
  if (error) {
    return <ErrorDb error={error} />
  }
  // DB fetching check
  if (loading) {
    return null;
  }

  const data = data.;

  return (
    <>
      <Head>
        <title></title>
        <link rel="canonical" href="https://" />
      </Head>
      <Layout labels={commonEng} url={props.url} ip={props.ip}>
      </Layout>
    </>
  );
}

// Index initialization
Index.getInitialProps = async ({req}) => {
  const url = req.headers['x-forwarded-proto'] + '://' + req.headers.host +
  req.originalUrl;
  const ip = (req.headers['x-forwarded-for'] ||
  req.connection.remoteAddress || '').split(',')[0].trim();

  return {
    url: url,
    ip: ip
  }
}

// Module export
export default Index
// Module End
