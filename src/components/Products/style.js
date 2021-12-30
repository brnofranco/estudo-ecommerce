import styled from "styled-components";

export const Title = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
	padding: 1rem 0;
	
	a {
		color: #FFF;
		font-family: monospace;
		font-size: 2rem;
		font-weight: bold;
		transition: 0.2s ease;
	}
	a:hover{
		cursor: default;
		opacity: 0.75;
		font-size: 2.1rem;
		color: #c0c5ce;
	}

`

export const Cards = styled.div`
	width: 20%;
    height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
	padding: 1rem 0;
	background-color: #e0deff;
    border: solid;
    border-radius: 0.8rem 0.8rem 0.8rem;
	
	a {
		color: #000;
		font-weight: bold;
		transition: 0.2s ease;
	}
	a:hover{
		opacity: 0.75;
        cursor: pointer;
	}

`