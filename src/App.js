import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import NavCategory from './Components/NavCategory';
import Banner from './Components/Banner';
import HomeCards from './Components/HomeCards';
import TodayDeal from './Components/TodayDeal';
import Grid from './Components/Grid';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <NavCategory/>
      <br/>
      <Banner/>
      <HomeCards/>
      <br></br>
      <HomeCards/>
      <br></br>
      <HomeCards/>
      <br></br>
      <br></br>

      <TodayDeal/>
      <br/>
      <Grid/>
      <br/>
      <h1 style={{marginLeft:'100px'}}>Your browsing history</h1>
      <HomeCards/>
      <br></br>
      <br></br>
      <br></br>

      <Footer/>

    </>
  );
}

export default App;
