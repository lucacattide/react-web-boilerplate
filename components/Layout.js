// Module Start
// SASS imports
import '../sass/index.scss'
// JS imports
import dynamic from 'next/dynamic'
import Header from './Header'
import Cookies from './Cookies'
import BackToTop from './BackToTop'

const Footer = dynamic(() =>
  import('./Footer')
)
// Layout
const Layout = (props) => (
  <div className="container">
    <Header labels={props.labels} />
    {/* Main Start */}
    <main className="container__wrapper">
      {props.children}
    </main>
    <Footer labels={props.labels} />
    <BackToTop />
    <Cookies labels={props.labels} url={props.url} ip={props.ip} />
  </div>
)

// Module export
export default Layout
// Module End
