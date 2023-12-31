import React from 'react'
import Navbar from '../Components/Nav/Navbar'
import Banner from '../Components/Banner'
import NavCategory from '../Components/NavCategory'
import HomeCards from '../Components/HomeCards'
import TodayDeal from '../Components/TodayDeal'
import Grid from '../Components/Grid'
import Explore from '../Components/Explore'
import Footer from '../Components/Footer'


function Home() {
  return (
<>
   <Navbar/>
    <NavCategory/>
    <br/>
    <Banner/>
    <HomeCards/>
    <TodayDeal/>
    <br/>

    <Grid/>
    <Explore/>
    <br/>
    <br/>

    <h1 className='browse'> Your Browsing History</h1>
    <br/>

    <HomeCards/>
    <Footer/>
</>
  )
}

export default Home