// Module Start
// SASS imports
import '../sass/index.scss'
// JS imports
import dynamic from 'next/dynamic'
import Header from './Header'
import Footer from './Footer'

const BackToTopNoSsr = dynamic(() =>
  import ('../components/BackToTop'), {
    ssr: false
  }
)
const CookiesNoSsr = dynamic(
  import ('../components/Cookies'), {
    ssr: false
  }
)
// Layout
const Layout = (props) => (
  <div className="container">
    <Header />
    {/* Main Start */}
    <main className="container__wrapper">
      {props.children}
    </main>
    <Footer />
    <BackToTopNoSsr />
    <CookiesNoSsr />
  </div>
)

// Module export
export default Layout
// Module End
