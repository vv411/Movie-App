import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';

function App() {
  return (
    <>
      <Routes> 
        <Route index element={<Home/> } /> 
        <Route path="/movies/:id" element={<MovieDetails/> } /> 
      </Routes> 
    </>
  )
}

export default App
