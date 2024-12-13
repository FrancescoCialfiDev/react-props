//import { useState } from 'react'

// Import the Header Component from HeaderComponent.jsx file 
import Header from './components/HeaderComponent/HeaderComponent'
// Import the Main Component from MainComponent.jsx file 
import Main from "./components/MainComponent/MainComponent"
// Import the Footer Component from FooterComponent.jsx file 
import Footer from "./components/FooterComponent/FooterComponent"

function App() {
  return (
    <>
      <div className="mainContent">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  )
}

export default App // Export default App for import into the main.jsx file
