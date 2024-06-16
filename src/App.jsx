
import './App.css'
import FootBanner from './components/FootBanner'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Banner from './shared/Banner'
import Categories from './shared/Categories'
import Deal from './shared/Deal'
import Popular from './shared/Popular'

function App() {

  return (
    <div className=''>
      <Header/>
      <Navbar/>
      <Banner text2_1={"Feast Your Senses,"} text2_2={"Fast and Fresh"} text1={"Order Restaurant food, takeaway and groceries."} text3={"Enter a postcode to see what we deliver"} bgColor={"bg-black"}/>
      <Deal/>
      <Categories/>
      <Popular/>
      <FootBanner/>
    </div>
  )
}

export default App
