import './App.css';
import Header from './components/Header';
import About from './components/about/About';
import Interest from './components/interests/Interest';

function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <Interest />
    </div>
  );
}

export default App;
