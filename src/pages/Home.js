import styled from 'styled-components';
import Header from '../components/Header';
import Landing from '../components/Landing';

const Home = () => {
	return (
		<HomeContainer>
			<Header />
			<Landing />
		</HomeContainer>
	);
};

const HomeContainer = styled.div`
	width: 100%;
	height: 100%;
`;

export default Home;
