import React from 'react'
import styled from 'styled-components'


export default function Movies() {
    return (
        <Container>
            Recommended for you
            <Content>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg" />
                </Wrap>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg" />
                </Wrap>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg" />
                </Wrap>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg" />
                </Wrap>
            </Content>
        </Container>
    )
}

const Container = styled.div`
margin-top:3vh;
`
const Content = styled.div`
   
    display:grid;
    grid-gap:2vw;
    padding:3vh 0;
    grid-template-columns:repeat(4, minmax(0, 1fr));

`
const Wrap = styled.div`
border-radius: 10px;
overflow:hidden;
border: 2px solid rgba(249, 249, 249, 0.1);
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