// Inizio Modulo
// Importazione Librerie
import '../sass/index.scss'
import Header from './Header'
import Footer from './Footer'
import TornaSu from './TornaSu'
import Cookies from './Cookies'

// Layout
const Layout = (props) => (
  <div className="container">
    <Header />
    {/* Inizio Main */}
    <main className="container__wrapper">
      {props.children}
    </main>
    <Footer />
    <TornaSu />
    <Cookies />
  </div>
)

// Esportazione Moduli
export default Layout
// Fine Modulo