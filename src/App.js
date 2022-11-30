import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import About from './pages/About';

function App() {
	return (
		<>
			<Routes>
				<Route path="/show_my_portfolio" element={<Home />} />
				<Route path="/show_my_portfolio/about" element={<About />} />
			</Routes>
		</>
	);
}

export default App;
