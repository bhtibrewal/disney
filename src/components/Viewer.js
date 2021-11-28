import React from 'react'
import styled from 'styled-components'


export default function Viewer() {
    return (
        <div>
            <Container>
                <Wrap>
                    <img src="/images/viewers-disney.png" />
                </Wrap>
                <Wrap>
                    <img src="/images/viewers-pixar.png" />
                </Wrap>
                <Wrap>
                    <img src="/images/viewers-marvel.png" />
                </Wrap>
                <Wrap>
                    <img src="/images/viewers-starwars.png" />
                </Wrap>
                <Wrap>
                    <img src="/images/viewers-national.png" />
                </Wrap>
            </Container>
        </div>
    )
}

const Container = styled.main`
    margin-top:30px;
    display:grid;
    grid-gap:2vw;
    padding:3vh 0;
    grid-template-columns:repeat(5, minmax(0, 1fr));
`
const Wrap = styled.div`
border:3px solid rgba(249,249,249,0.1);
border-radius:10px;
box-shadow: rgb(0 0 0 / 69% ) 0px 26px 30px -10px ,rgb(0 0 0 /73%) 0px 16px 10px -10px;
cursor:pointer;
transition:all 250ms cubic-bezier(0.25, 0.46,0.45, 0.94) 0s;

    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }
    &:hover{
        transform:scale(1.05);
        border-color:rgba(249,249,249,0.8);
        box-shadow: rgb(0 0 0 / 80% ) 0px 40px 50px -16px ,rgb(0 0 0 /73%) 0px 30px 20px -10px;
    }
`