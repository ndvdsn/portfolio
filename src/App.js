import './App.css';
import Home from './components/Home'
// import About from './components/About'
import Projects from './components/Projects'
import Project from './components/Project'
import Header from './components/Header'
import { BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route element={<Home />} path="/" exact/>
      {/* <Route element={<About />} path="/about" /> */}
      <Route element={<Project />} path="/projects/:slug" />
      <Route element={<Projects />} path="/projects" />
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
