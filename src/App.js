import logo from './logo.svg';
import './App.css';

function App() {
  const handleClick = () => alert('vsem-ku');
  return (
    <div className="container">
    <button onClick={handleClick}>
      Click!
    </button>
    </div>
  );
}

export default App;
