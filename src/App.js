import HomePage from './pages/home/HomePage'
import './components/main.css';
import NavBar from './components/navbar/NavBar';
// import MoviePage from './pages/movies/MoviePage';

//fucnión principal de react que activa la pagina
function App() {
  return (
    <div className="App">
      <NavBar/>
      <HomePage/>

    </div>
  );
}

export default App;
