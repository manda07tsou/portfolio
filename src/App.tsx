import './App.scss'
import { BackTop } from './components/backtop/BackTop'
import { Home } from './Home'
import { ToastContainer } from './Components/Toast/Toast';

function App() {
  return (
    <>
      <ToastContainer/>
      <Home/>
      <BackTop/>
    </>
  )
}

export default App
