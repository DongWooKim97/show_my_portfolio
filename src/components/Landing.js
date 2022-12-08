import styled from 'styled-components';
import personal from '../images/personal.jpg';
const Landing = () => {
	return (
		<LandingPage>
			<PersonalImage />
			<div>홈</div>
		</LandingPage>
	);
};

const PersonalImage = styled.div`
	width: 600px;
	height: 600px;

	background-size: 500px 500px;
`;

const LandingPage = styled.div`
	width: 100%;
	height: 100vh;
	/* background-color: green; */
`;

export default Landing;
