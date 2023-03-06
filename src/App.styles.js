import styled from 'styled-components';
import "./scss/components/variables.scss"

export const Container = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(2, minmax(100px, auto));
gap: 1rem;
padding: 1rem 1rem;
border: solid 0.1rem white;
border-radius: 0.5rem;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

export const Card = styled.div`
background: #508BAD;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
border-radius: 1rem;
color: black;

display: flex;
flex-direction: column;

figure {
    display: flex;
    justify-content: center;
    padding: 1rem;
    img {
        border-radius: 1rem;
        width: 100%;
        height: 9rem;
    }
}

h2, h3 {
margin: 0.2rem 1rem
}

h2 {
    font-weight: var(--font-semibold)
}

h3 {
    flex-grow: 1;
}

p {
    margin: 1.5rem 1rem 1rem;
    font-weight: 600;
    color: white;
}

button {
    margin: 0rem 1rem 1rem;
}
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


export const Category = styled.div`

`