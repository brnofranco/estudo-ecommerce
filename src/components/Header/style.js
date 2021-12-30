import styled from "styled-components";

export const Navbar = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
	padding: 1rem 0;
	background-color: #1f1f1f;
	
	a {
		color: var(--title);
		font-weight: bold;
		transition: 0.2s ease;
	}
	a:hover{
		opacity: 0.7;
	}

`