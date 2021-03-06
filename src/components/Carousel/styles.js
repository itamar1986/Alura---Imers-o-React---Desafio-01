import styled from 'styled-components';

export const VideoCardGroupContainer = styled.section`
	color: var(--white);

	min-height: 168px;

	margin-left: 5%;
	margin-bottom: 16px;


`;

export const Title = styled.h3`
	font-size: 35px;
	line-height: 1;
	font-weight: 300;

	padding: 20px;
	margin-bottom: 16px;

	display: inline-block;

	border-radius: 6px;
	border: 1px solid white;


	@media(max-width: 800px){
		font-size: 18px;

		padding: 10px;

	}

`;

export const ExtraLink = styled.a`
	text-decoration: none;

	margin-left: 16px;

	transition: opacity .3s;

	&:hover, 
	&:focus{
		opacity: .5;

	}


	@media(max-width: 800px){
		display: block;

		margin-bottom: 16px;
		margin-left: 0;

	}
`;
