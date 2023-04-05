import logo from './logo.svg';
import './App.css';
import Header from './Component/header';
import HomeContent from './Component/homeContent';
import Footer from './Component/footer';

function App() {
  return (
    <div className="App">
      <Header/>
       <HomeContent/>
        <Footer/>
    </div>
  );
}

export default App;
