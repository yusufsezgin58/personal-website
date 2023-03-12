import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Layout from './Components/Layout/Layout'
import Main from './Components/Main';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Travel from './Components/Travel/Travel';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='/skills' element={<Skills />}/>
          <Route path='/rate' element={<Projects />} />
          <Route path='/travel' element={<Travel />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
