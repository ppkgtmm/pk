import { HashRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Feed from './components/Feed'
import Detail from './components/Detail'
import NoteList from './components/NoteList'
import Note from './components/Note'

function App() {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/:slug" element={<Detail />} />
        <Route path="/notes" element={<NoteList />} />
        <Route path="/notes/:slug" element={<Note />} />
      </Routes>
    </HashRouter>
  )
}

export default App
