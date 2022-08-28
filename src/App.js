import logo from './logo.svg';
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/index.js'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />} />
    </Routes>
    </>
  );
}

export default App;
