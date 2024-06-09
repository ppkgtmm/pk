import { HashRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Feed from './components/Feed'
import Detail from './components/Detail'

function App() {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/:slug" element={<Detail />} />
      </Routes>
    </HashRouter>
  )
}

export default App
