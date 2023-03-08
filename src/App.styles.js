import styled from 'styled-components';
import "./scss/components/variables.scss"

export const Container = styled.div`
display: grid;
grid-template-columns: repeat(1, 1fr);
// grid-template-rows: repeat(2, minmax(100px, auto));
gap: 1rem;
padding: 1rem 1rem;
border: solid 0.1rem white;
border-radius: 0.5rem;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
margin-bottom: 7.5rem;
`

export const Card = styled.div`
background: #508BAD;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
border-radius: 1rem;
color: black;
`;

export const Button = styled.button`
text-transform: uppercase;
font-size: 1.2rem;
padding: 0.3rem 1.5rem;
border-style: none;
border-radius: 3rem;
background: black;
color: white;
`;

export const PageContainer = styled.div`
border: solid 0.1rem white;
text-align: center;
border-radius: 0.5rem;
padding: 0.5rem 1rem;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

export const Category = styled.ul`
display: flex;
overflow-x: scroll;
border: 0.1rem solid white;
border-radius: 0.5rem;
background: linear-gradient(65deg, rgb(68, 124, 156), rgb(25, 55, 100));
position: fixed;
bottom: 0;
left: 0.5rem;
right: 0.5rem;

img {
    background: black;
    padding: 0.5rem;
    margin: 1rem 0.8rem;
    width: 7rem;
    border-radius: 0.5rem;
}
`