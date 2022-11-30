import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
	return (
		<>
			<Routes>
				<Route path="/show_my_portfolio" element={<Home />} />
				<Route path="/show_my_portfolio/about" element={<About />} />
				<Route path="/show_my_portfolio/skills" element={<Skills />} />
				<Route path="/show_my_portfolio/projects" element={<Projects />} />
				<Route path="/show_my_portfolio/contact" element={<Contact />} />
			</Routes>
		</>
	);
}

export default App;
