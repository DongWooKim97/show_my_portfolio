import styled from 'styled-components';
import Header from '../components/Header';
const Home = () => {
	return (
		<HomeContainer>
			<Header />
		</HomeContainer>
	);
};

const HomeContainer = styled.div`
	width: 100vw;
	height: 100vh;
`;

export default Home;
