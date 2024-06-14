
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Banner from './shared/Banner'
import Deal from './shared/Deal'

function App() {

  return (
    <>
      <Header/>
      <Navbar/>
      <Banner text2_1={"Feast Your Senses,"} text2_2={"Fast and Fresh"} text1={"Order Restaurant food, takeaway and groceries."} text3={"Enter a postcode to see what we deliver"} bgColor={"bg-black"}/>
      <Deal/>
    </>
  )
}

export default App
