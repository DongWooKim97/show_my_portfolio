import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow, media } from '../lib/StyleUtils.js';
import { useNavigate, Link } from 'react-router-dom';

const MenuButton = styled.button`
	font-weight: 600;
	color: ${oc.cyan[6]};
	border: 1px solid ${oc.cyan[6]};
	padding: 0.5rem;
	padding-bottom: 0.4rem;
	cursor: pointer;
	border-radius: 2px;
	text-decoration: none;
	transition: 0.2s all;
	margin-right: 20px;

	&:hover {
		background: ${oc.cyan[6]};
		color: white;
		${shadow(1)}
	}

	&:active {
		/* 마우스 클릭시 아래로 미세하게 움직임 */
		transform: translateY(3px);
	}
`;

// 상단 고정, 그림자
const Positioner = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	top: 0px;
	width: 100%;
	${shadow(1)}
`;

// 흰 배경, 내용 중간 정렬
const WhiteBackground = styled.div`
	background: white;
	display: flex;
	justify-content: center;
	height: auto;
`;

// 해더의 내용
const HeaderContents = styled.div`
	width: 100vw;
	height: 10vh;
	display: flex;
	flex-direction: row;
	align-items: center;

	padding-right: 1rem;
	padding-left: 1rem;
	${media.wide`
        width: 992px;
    `}

	${media.tablet`
        width: 100%;
    `}
`;

// 로고
const Logo = styled.button`
	font-size: 1.4rem;
	letter-spacing: 2px;
	color: ${oc.teal[7]};
	font-family: 'Rajdhani';
	background-color: white;
	outline: 0;
	border: 0;
	&:hover {
		cursor: pointer;
	}
`;

// 중간 여백
const Spacer = styled.div`
	flex-grow: 1;
`;

// 하단 그래디언트 테두리
const GradientBorder = styled.div`
	height: 1px;
	background: linear-gradient(to right, ${oc.teal[6]}, ${oc.cyan[5]});
`;

const Header = () => {
	const navigate = useNavigate();

	const onClickHandler = (e) => {
		e.preventDefault();
		const eventId = e.target.id;
		eventId ? navigate(`/${e.target.id}`) : navigate('/');
	};

	return (
		<Positioner>
			<WhiteBackground>
				<HeaderContents>
					<Logo onClick={onClickHandler}>KimBxxloob</Logo>
					<Spacer />

					<MenuButton id="about" onClick={onClickHandler}>
						About
					</MenuButton>
					<MenuButton id="skills" onClick={onClickHandler}>
						SKills
					</MenuButton>
					<MenuButton id="projects" onClick={onClickHandler}>
						Projects
					</MenuButton>
					<MenuButton id="contact" onClick={onClickHandler}>
						Contact
					</MenuButton>
				</HeaderContents>
			</WhiteBackground>
			<GradientBorder />
		</Positioner>
	);
};

export default Header;
