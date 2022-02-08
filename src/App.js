import './App.css';
import Header from './components/Header';
import About from './components/about/About';
import Interest from './components/interests/Interest';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <Interest />
      <Footer />
    </div>
  );
}

export default App;
