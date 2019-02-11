// Inizio Modulo
// Importazione Librerie
import '../sass/index.scss'
import dynamic from 'next/dynamic'
import Header from './Header'
import Footer from './Footer'

const TornaSuNoSsr = dynamic(() =>
  import ('../components/TornaSu'), {
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
    {/* Inizio Main */}
    <main className="container__wrapper">
      {props.children}
    </main>
    <Footer />
    <TornaSuNoSsr />
    <CookiesNoSsr />
  </div>
)

// Esportazione Moduli
export default Layout
// Fine Modulo