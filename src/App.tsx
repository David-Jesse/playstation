import Background from './component/Background';
import Navigation from './component/Navigation';
import Menu from './component/Menu';
import Collection from './component/Collection';
import Details from './component/Details';
import Footer from './component/Footer';
import './App.css'

function App() {

  return (
    <>
     <Background />
     <main>
        <Navigation />
        <Menu />
        <Collection />
        <Details />
        <Footer />
     </main>
    </>
  )
}

export default App
