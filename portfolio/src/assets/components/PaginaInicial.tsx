import '../../index.css'
import Header from './Header'
import Footer from './Footer'

export default function PaginaInicial() {

  return (
    <>
    <Header />
    <div className='logo-container'>
      <img className='logo' src='public/Imagens/logo.png'/>
      <h3>P O R T F Ó L I O</h3>
    </div>
    <Footer />
    </>
  )
}

