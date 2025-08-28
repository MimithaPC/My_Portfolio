import NavigationBar from "./Components/NavigationBar"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Experiences from "./Pages/Experiences"
import Home from "./Pages/Home"
import Projects from "./Pages/Projects"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Qualifications from "./Pages/Qualifications"
import Footer from "./Components/Footer"

function App() {

  	return (

    	<div>
      		<BrowserRouter>
        		<NavigationBar />
        		<Routes>
          			<Route path="/" element={<Home />} />
          			<Route path="/about" element={<About />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/qualifications" element={<Qualifications />} />
					<Route path="/experiences" element={<Experiences />} />
				</Routes>
				<Footer />
			</BrowserRouter>    
		</div>

  	)

}

export default App
