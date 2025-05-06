import Background from './component/Background';
import Navigation from './component/Navigation';
import Menu from './component/Menu';
import Collection from './component/Collection';
import './App.css'

function App() {

  return (
    <>
     <Background />
     <main>
        <Navigation />
        <Menu />
        <Collection />
     </main>
    </>
  )
}

export default App
